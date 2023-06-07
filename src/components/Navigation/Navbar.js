import React from "react"
import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
  const handleArticleCreate = (e) => {
    e.preventDefault()
    navigate("/articles/create")
  }

  return (
    <div className="navigation">
      <div className="navigation-group-1">
        <h3>
          <a href="/" style={{ textDecoration: "none", color: "black" }}>
            Moringa Blog
          </a>
        </h3>
      </div>
      <nav className="navigation-group-2">
        <a href="/">Home</a>
        <a href="/articles">More Articles</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </nav>

      <div className="navigation-group-3">
        <button onClick={handleArticleCreate}>+</button>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
