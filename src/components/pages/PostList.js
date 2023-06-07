import React from "react"
import { useState } from "react"
import FirstImage from "../../assets/pexels-athena-2582937.jpg"
import { Link } from "react-router-dom"

function PostList() {
  const data = [
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
    {
      body: "xyz",
      imgurl: FirstImage,
      author_name: "author 1",
      date: "07/06/2003 03:09",
      title: "title 1",
      category: "tech",
    },
  ]
  const [PostList, setPostList] = useState(data)
  return (
    <div>
      <div className="post-list">
        {PostList.map((post, index) => {
          return (
            <div className="post-list-container" key={index}>
              <div className="post-list-image">
                <img
                  src={post.imgurl}
                  alt={post.title}
                  height={150}
                  width={150}
                />
              </div>

              <div className="post-list-data">
                <h6>{`Author: ${post.author_name}. ${post.date}`}</h6>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <div>
                  <button>like</button>
                  <button>dislike</button>
                  <button>share</button>
                  <button>{post.category}</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <Link to="/articles">More Articles</Link>
    </div>
  )
}

export default PostList
