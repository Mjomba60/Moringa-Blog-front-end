import React from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../../assets/Icon.png"

function Navbar() {
  const navigate = useNavigate()
  const handleArticleCreate = (e) => {
    e.preventDefault()
    navigate("/articles/create")
  }

  return (
    <div className="navigation">
      <div className="navigation-group-1">
        <img src={Icon} alt="logo.png" height={20} width={20} />
        <p>
          <b>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "black",
                // marginLeft: "5px",
              }}
            >
              MORINGA BLOG
            </a>
          </b>
        </p>
      </div>
      <nav className="navigation-group-2">
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
        <button className="add-button" onClick={handleArticleCreate}>
          +
        </button>
        <button className="profile-button">Profile</button>
      </nav>
    </div>
  )
}

export default Navbar
