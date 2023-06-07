import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Articles from "./components/pages/Articles"
import Navbar from "./components/Navigation/Navbar"
import AboutUs from "./components/pages/AboutUs"
import ContactUS from "./components/pages/ContactUs"
import CreateArticle from "./components/pages/CreateArticle"
import Profile from "./components/pages/Profile"
import Footer from "./components/Navigation/Footer"
import SingleArticle from "./components/pages/SingleArticle"

function App() {
  return (
    <div className="App">
      <div className="app-navigation">{<Navbar />}</div>

      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="/articles/:1d" element={<SingleArticle />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer className="app-footer">
        <div>{<Footer />}</div>
      </Footer>
    </div>
  )
}

export default App
