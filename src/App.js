import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/pages/Home"
import Articles from "./components/pages/Articles"

function App() {
  return (
    <div className="App">
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
