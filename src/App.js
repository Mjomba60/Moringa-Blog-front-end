import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Articles from "./components/pages/Articles"
import Navbar from "./components/Navigation/Navbar"
import AboutUs from "./components/pages/AboutUs"
import ContactUS from "./components/pages/ContactUs"
import CreateArticle from "./components/pages/CreateArticle"

function App() {
  return (
    <div className="App">
      <div>{<Navbar />}</div>

      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/articles/create" element={<CreateArticle />} />
          <Route path="/contactus" element={<ContactUS />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
