import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { AiFillLike, AiOutlineLike } from "react-icons/ai"

function SingleArticle() {
  const location = useLocation()
  const [ArticleData, setArticleData] = useState({})

  const comments_data = [
    { comment: "Nice Post", by: "user1", time: "2 minute ago" },
    { comment: "Nice Post", by: "user1", time: "2 minute ago" },
    { comment: "Nice Post", by: "user1", time: "2 minute ago" },
  ]

  const [comments, setComments] = useState(comments_data)

  useEffect(() => {
    const data = location.state?.article_data
    setArticleData(data)
  }, [location.state?.article_data])

  return (
    <div>
      <h1>{ArticleData ? ArticleData.title : "Single Article"}</h1>
      <h6>
        {ArticleData.author_name && ArticleData.date
          ? `By ${ArticleData.author_name} ${ArticleData.date}`
          : "Anonymous Author"}
      </h6>
      <div className="article-interaction">
        <button>{<AiFillLike />}</button>
        <button>{<AiOutlineLike />}</button>
        <button>{ArticleData.category}</button>
      </div>

      <img
        src={ArticleData.imgurl}
        alt={ArticleData.title}
        height={200}
        width={300}
      />
      <p>{ArticleData ? ArticleData.body : "No Information"}</p>
      <div className="comment-box">
        <form className="comment-form">
          <div>
            <label for="txtarea">Add Your comment: </label>
            <br />
            <textarea id="txtarea" placeholder="Comment here"></textarea>
            <br />
            <button type="submit"> Post comment</button>
          </div>
        </form>
        <hr />
      </div>
      <div>
        <p>{`${comments.length}`} Comments</p>
        {comments.map((comment, index) => {
          return <p>{comment.comment}</p>
        })}
      </div>

      {/* {console.log(ArticleData)} */}
    </div>
  )
}

export default SingleArticle
