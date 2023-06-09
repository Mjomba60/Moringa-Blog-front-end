import { useEffect, useState } from "react"
import React from "react"
import PostData from "../utils/PostData"
import { Link, useLocation } from "react-router-dom"
import { GetArticleMany } from "../../api/api.js"

function Articles() {
  const [PostListAll, setPostListAll] = useState([])
  const [PostList, setPostList] = useState([])
  const startIndex = 3
  const location = useLocation()

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    console.log(PostListAll)
    setPostList(PostListAll.slice(0, 2))
    // setPostListAll(PostListAll.slice())
  }, [PostListAll?.length])

  return (
    <div>
      <div>
        <div className="articles-recent-title">
          <p>
            <b>Recent posts</b>
          </p>
          {/* <Link to="/articles" state={location.state}>
            View all
          </Link> */}
        </div>
        <div className="articles-recents">
          {PostList.length === 0
            ? "Data Loading..."
            : PostList.map((post, index) => {
                return <PostData post={post} index={index} key={index} />
              })}
        </div>
      </div>
      <div className="articles-posts">
        <h3>Blog</h3>
        {articles.length === 0
          ? "Data Loading..."
          : articles.map((post, index) => {
              return <PostData post={post} index={index} inlist={true} />
            })}
      </div>
      <hr />
    </div>
  )
}

export default Articles
