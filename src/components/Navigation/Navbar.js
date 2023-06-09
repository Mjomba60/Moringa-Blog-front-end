import React, { useEffect, useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import Icon from "../../assets/Icon.png"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
<<<<<<< HEAD
  const [hasUser, setHasUser] = useState(false)
=======
  const [hasUser, setHasUser] = useState({})
  const [currentUser, setCurrentUser] = useState(null)
>>>>>>> 069c2e67868c1146bb2beb6d49994f34177831d9

  useEffect(() => {
    const user = location.state?.user
    user ? setHasUser(true) : setHasUser(false)
    user ? setCurrentUser(user) : setCurrentUser(null)
  }, [location.state])

  const handleArticleCreate = (e) => {
    e.preventDefault()
    navigate("/articles/create", {
      state: { user: currentUser, ...location.state },
    })
  }

  const handleSigninClick = (e) => {
    e.preventDefault()
    navigate("/signin")
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
        <Link to="/" state={location.state}>
          Home
        </Link>
        <Link to="/articles" state={location.state}>
          Articles
        </Link>
        <Link to="/aboutus" state={location.state}>
          About Us
        </Link>
        <Link to="/contactus" state={location.state}>
          Contact Us
        </Link>
        <button className="add-button" onClick={handleArticleCreate}>
          +
        </button>
        {hasUser ? (
          <button className="profile-button">Profile</button>
        ) : (
          <button className="profile-button" onClick={handleSigninClick}>
            signin
          </button>
        )}
      </nav>
    </div>
  )
}

export default Navbar
