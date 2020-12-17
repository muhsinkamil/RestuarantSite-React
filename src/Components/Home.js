import React, { useEffect } from "react"
import M from "materialize-css"
import burger from "../images/burger.jpg"
// import veggies from "../images/veggies.jpg"
import ParallaxImg from "./ParallaxImg"

const Home = () => {
  useEffect(() => {
    var parallaxDesign = document.querySelectorAll(".parallax")
    M.Parallax.init(parallaxDesign)
  }, [])

  return (
    <>
      <header></header>
      <ParallaxImg poster = { burger }/>
      {/* <ParallaxImg poster = { veggies } /> */}
    </>
  )
}

export default Home
