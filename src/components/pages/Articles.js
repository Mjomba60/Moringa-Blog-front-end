import { useEffect, useState } from "react"
import React from "react"
import PostData from "../utils/PostData"
// import { useLocation } from "react-router-dom"
import { GetArticleMany } from "../../api/api.js"
import SearchComponent from "./Search"

function Articles() {
  const [PostListAll, setPostListAll] = useState([])
  // const [PostList, setPostList] = useState([])
  // const startIndex = 3
  // const location = useLocation()
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    // console.log(PostListAll)
    // setPostList(PostListAll.slice(0, 2))
    // setPostListAll(PostListAll.slice())
  }, [PostListAll?.length])

  const handleSearch = (searchCriteria) => {
    console.log(searchCriteria)
    console.log(searchCriteria)
    const filteredResults = PostListAll.filter((post) => {
      return post.title.includes(searchCriteria)
    })
    console.log(filteredResults)
    console.log(filteredResults)
    setSearchResults(filteredResults)
  }

  const renderArticles =
    searchResults.length !== 0 ? searchResults : PostListAll

  const allArticles = renderArticles.map((post) => {
    return <PostData key={post.id} post={post} />
  })

  useEffect(() => {
    GetArticleMany(setPostListAll)
    console.log("here")
    // console.log(PostListAll)
    // setPostList(PostListAll.slice(0, 2))
  }, [PostListAll?.length])

  return (
    <div>
      <div>
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="allarticles">{allArticles}</div>
      <hr />
    </div>
  )
}

export default Articles
