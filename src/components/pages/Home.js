import React from "react"
import HomeData from "../utils/HomeData"
import HomeData2 from "../utils/HomeData2"
import HomeData3 from "../utils/HomeData3"

function Home() {
  return (
    <div>
      <div>{<HomeData />}</div>
      <div>{<HomeData2 />}</div>
      <div>{<HomeData3 />}</div>
    </div>
  )
}

export default Home
