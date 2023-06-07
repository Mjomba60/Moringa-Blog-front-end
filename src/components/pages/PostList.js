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
      <h1>PostList</h1>
      <div>
        {PostList.map((post, index) => {
          return (
            <div className="post-list-container" key={index}>
              <img
                src={post.imgurl}
                alt={post.title}
                height={150}
                width={150}
              />
              <div className="post-list-data">
                <h4>{`Author: ${post.author_name}. ${post.date}`}</h4>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button>like</button>
                <button>dislike</button>
                <button>share</button>
                <button>{post.category}</button>
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
