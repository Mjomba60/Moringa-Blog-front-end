import React from "react"

function AnalyticsForm() {
  return (
    <div className="Analytics-form">
      <form>
        <div>
          <label htmlFor="analytics-blogsread">Blogs Read : </label>
          <input
            name="username"
            id="analytics-blogread"
            value={"25%"}
            disabled
          ></input>
        </div>
        <div>
          <label htmlFor="analytics-blogsliked">Blogs Liked : </label>
          <input
            name="username"
            id="analytics-blogsliked"
            value={"15%"}
            disabled
          ></input>
        </div>
        <div>
          <label htmlFor="analytics-similarinterest">
            People with <br /> Similar Interests :
          </label>
          <input
            name="username"
            id="analytics-similarinterest"
            value={"38%"}
            disabled
          ></input>
        </div>
        <div>
          <label htmlFor="analytics-blogscommented">Blogs Commented : </label>
          <input
            name="username"
            id="analytics-blogscommented"
            value={"30%"}
            disabled
          ></input>
        </div>
      </form>
    </div>
  )
}

export default AnalyticsForm
