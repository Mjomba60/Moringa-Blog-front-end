import React from "react"
import RecentPost from "./RecentPost"
import PostList from "./PostList"

function Home() {
  return (
    <>
      <div>Home</div>
      <h1>Inside Moringa: Stories & Development Experiences</h1>
      <p>
        Subscribe to get the latest Moringa developers stories & other updates
      </p>
      <div>
        <input type="text" placeholder="Enter your email"></input>
        <button type="submit">Subscribe</button>
      </div>
      <div className="home-posts">
        <div className="recent-post">{<RecentPost />}</div>
        <div className="post-list">{<PostList />}</div>
      </div>
    </>
  )
}

export default Home
