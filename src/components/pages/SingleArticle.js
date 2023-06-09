import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { CreateComment, GetArticleSingle } from "../../api/api"
import { DeleteComment, SendInteraction } from "../../api/api"
import Chip from "@mui/material/Chip"

function SingleArticle() {
  const location = useLocation()
  const navigate = useNavigate()
  const routeParams = useParams()

  console.log(routeParams)
  const [ArticleData, setArticleData] = useState(null)
  const [form, setForm] = useState({})
  const [currentUser, setCurrentUser] = useState(null)
  const [createData, setCreateData] = useState(null)
  const [Data, setData] = useState(null)
  // const comments_data = [
  //   { comment: "Nice Post", by: "user1", time: "2 minute ago" },
  //   { comment: "Nice Post", by: "user1", time: "2 minute ago" },
  //   { comment: "Nice Post", by: "user1", time: "2 minute ago" },
  // ]

  const [comments, setComments] = useState(null)
  const [loading, setLoading] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(null)

  useEffect(() => {
    // setArticleData(data)
    let { id } = routeParams
    console.log(parseInt(id))
    GetArticleSingle(parseInt(id), setArticleData)
  }, [routeParams])

  // useEffect(() => {
  //   if(Data.)
  // })

  useEffect(() => {
    if (ArticleData?.comments) {
      setComments(ArticleData.comments)
    }
  }, [ArticleData?.comments])
  useEffect(() => {
    const user = location.state?.user
    user ? setCurrentUser(user) : setCurrentUser(null)
    // setComments(data.comments)
  }, [location.state?.user])

  useEffect(() => {
    if (createData?.status === 200) {
      GetArticleSingle(ArticleData.id, setArticleData)
    }
  }, [ArticleData?.id, createData?.status])

  useEffect(() => {
    if (loadingDelete) {
      GetArticleSingle(ArticleData.id, setArticleData)
    }
  }, [ArticleData?.id, createData?.status, loadingDelete])

  const onchange = (e) => [
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    }),
  ]

  return (
    <div>
      <h1>{ArticleData ? ArticleData.title : "Single Article"}</h1>
      <h6>
        {ArticleData?.author_name && ArticleData?.date
          ? `By ${ArticleData?.author_name} ${ArticleData?.date}`
          : "Anonymous Author"}
      </h6>
      <div className="article-interaction">
        <button
          onClick={(e) => {
            e.preventDefault()
            let int_data = {
              user_id: currentUser?.id,
              article_id: ArticleData?.id,
              interaction_type: "like",
            }
            SendInteraction(ArticleData?.id, int_data, setData)
          }}
        >
          {" "}
          {<AiFillLike />}
        </button>
        <button>{<AiOutlineLike />}</button>
        <button>{ArticleData?.category}</button>
      </div>

      <img
        src={ArticleData?.image_url}
        alt={ArticleData?.title}
        height={200}
        width={300}
      />
      <p>{ArticleData ? ArticleData?.body : "No Information"}</p>
      <div className="comment-box">
        <form className="comment-form">
          <div>
            <label for="txtarea">Add Your comment: </label>
            <br />
            {loading ? "Posting ..." : ""}
            <textarea
              id="txtarea"
              name="comments"
              placeholder="Comment here"
              onChange={onchange}
              value={form.comments || ""}
            ></textarea>
            <br />
            {/* <button onClick={handleSubmit}> Post comment</button> */}
            <Chip
              label=" Edit Article"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault()
                navigate(`/articles/edit/${ArticleData?.id}`, {
                  state: { data_to_edit: ArticleData, ...location.state },
                })
              }}
            />
            <Chip
              label=" Post comment"
              variant="outlined"
              onClick={(e) => {
                e.preventDefault()
                let comment_data = {
                  article_id: ArticleData.id,
                  user_id: currentUser?.id,
                  ...form,
                }
                console.log(comment_data)
                CreateComment(
                  comment_data,
                  ArticleData.id,
                  setLoading,
                  setCreateData
                )
              }}
              // onClick={handleSubmit}
            />
          </div>
        </form>
        <hr />
      </div>
      <div>
        <p>{`${comments?.length}`} Comments</p>
        {comments
          ? comments.map((comment, index) => {
              return (
                <div className="comment-box-comment" key={index}>
                  <div className="comment-box-comment-user">
                    <p>{comment.user.first_name[0]}</p>
                  </div>
                  <div>
                    <p>{comment.comments}</p>
                    <p>{`posted at: ${comment.created_at}`}</p>
                    {currentUser.id !== comment.user.id ? (
                      ""
                    ) : (
                      <Chip
                        label="delete comment"
                        variant="outlined"
                        onDelete={(e) => {
                          e.preventDefault()
                          DeleteComment(
                            ArticleData.id,
                            comment.id,
                            setLoadingDelete
                          )
                        }}
                      />
                    )}
                  </div>
                </div>
              )
            })
          : ""}
      </div>

      {/* {console.log(ArticleData)} */}
    </div>
  )
}

export default SingleArticle
