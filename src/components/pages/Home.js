import React from "react"
// import HOMEIMG from "../../assets/home-image.jpg"
// import { Link } from "react-router-dom"

import HomeData from "../utils/HomeData"
import HomeData2 from "../utils/HomeData2"
// import HomeData3 from "../utils/HomeData3"
// import { useLocation } from "react-router-dom"

function Home() {
  // const [currentUser, setCurrentUser] = useState(null)
  // const [hasUser, setHasUser] = useState(false)
  // const location = useLocation()
  // useEffect(() => {
  //   const user = location.state?.user
  //   console.log(user)
  //   user ? setCurrentUser(user) : setCurrentUser(null)
  //   user ? setHasUser(true) : setHasUser(false)
  // })
  return (
    <div className="home-padding">
      <div>{<HomeData />}</div>
      <div>{<HomeData2 />}</div>
      {/* <div>{<HomeData3 />}</div> */}
    </div>
  )
}

//   return (
//     <>
//       <img src={HOMEIMG} alt="HOME" className="p-2" />

//       <div className="md:flex md:space-x-7">
//         <div className="md:w-[70%]">
//           <div className="homepage_section_1_1">
//             A platform that allows people with similar interests interact. Get
//             to feel the environment virtually from where you are, create a
//             network of people. Convert your journey into a story that inspires
//             others. Read about a fellow’s story and get inspiration to fly
//             higher. A free space to air your thoughts. Share that feeling in
//             words to vast number of people with similar interests as you. Get
//             feedback from plenty of people who are willing to read.
//             <br />
//             To Proceed <Link to="/login">Login</Link> or{" "}
//             <Link to="/signup">Sign Up</Link>
//           </div>

//           <div className="homepage_section_1_2 mt-5">
//             <p className="text-4xl text-center" style={{ color: "#FFE45E" }}>
//               “The first three months were overwhelming”
//             </p>
//             Give and view reactions from other like minds through the comments.
//             Also give a simple feedback by hitting the like button after
//             enjoying a story by a writer.
//           </div>
//         </div>

//         <div className="homepage_section_1_3 flex-1 p-5 mt-5 md:mt-0">
//           <p className="text-5xl mb-5 text-center" style={{ color: "#CAE6E1" }}>
//             “Bugs are not a curse”
//           </p>
//           Get this and more captivating titles that are followed by stories that
//           describe similar experiences along the journey.
//         </div>
//       </div>

//       <div align="center">
//         <button className="btn btn-wide btn-neutral m-5">Get Started</button>
//       </div>
//     </>
//   )
// }

export default Home
