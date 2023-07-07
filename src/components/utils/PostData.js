import React from "react"
import { FcShare } from "react-icons/fc"
import { useNavigate, useLocation } from "react-router-dom"

function PostData({ post, index, inlist }) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <div
      className="post-list-container"
      // className="grid grid-cols-2 md:grid-cols-4 space-x-2 space-y-3 mt-5"
      key={index}
      onClick={(e) => {
        e.preventDefault()
        navigate(`/articles/${index + 1}`, {
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
          <h6>On {`${post.date}`}</h6>
        </div>
        <div>
          <button>share{<FcShare />}</button>
          <button>{post.category}</button>
        </div>
      </div>
    </div>
  )
}

export default PostData
