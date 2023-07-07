import React from "react"
import { FcShare } from "react-icons/fc"
import { useNavigate, useLocation } from "react-router-dom"
import commentimg from "../../assets/uil_comment.png"
import likeimg from "../../assets/solar_like-linear.svg"

function PostData({ post, index, inlist }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      className="post-list-container"
      onClick={(e) => {
        e.preventDefault()
        navigate(`/articles/${post.id}`, {
          state: { article_data: post, ...location.state },
        })
      }}
  //style={{backgroundImage: `url(${post.image_url})`}}
  >

      <div className="post-list-data">
        
        <h5>{post.title}</h5>
        <div className="subcont">
          <h6>By {`${post.author_name}`}</h6>
          <h6>Category {`${post.category}`}</h6>
        </div>
        <div className="article-bottom">
          <div className="likecomm">
            <img src={likeimg}/><span>{post.likes}</span>
          </div>
          <div className="likecomm">
            <img src={commentimg}/><span>9</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostData
