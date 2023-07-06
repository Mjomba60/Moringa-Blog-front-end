import { useEffect, useState } from "react"
import React from "react"
import PostData from "../utils/PostData"
import { Link, useLocation } from "react-router-dom"
import { GetArticleMany } from "../../api/api.js"
import SearchComponent from "./Search"

function Articles() {
  const [PostListAll, setPostListAll] = useState([])
  const [PostList, setPostList] = useState([])
  const startIndex = 3
  const location = useLocation()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    console.log(PostListAll)
    setPostList(PostListAll.slice(0, 2))
    // setPostListAll(PostListAll.slice())
  }, [PostListAll?.length])

  const handleSearch = (searchCriteria) => {
    const filteredResults = PostListAll.filter((post) => {
      const regex = new RegExp(searchCriteria, "i")
      return regex.test(post.title) || regex.test(post.content)
    })

    setSearchResults(filteredResults)
  }

  const allArticles = PostListAll.map(post => {
    return (
      <PostData key={post.id} post={post}/>
    )
  })

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    console.log(PostListAll)
    setPostList(PostListAll.slice(0, 2))
  }, [PostListAll?.length])

  return (
    <div>
      <div>
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="allarticles">
        {allArticles}
      </div>
    </div>
  )
}

export default Articles
