import React, { useEffect } from "react"
import M from "materialize-css"
import burger from "../images/burger.jpg"
import ParallaxImg from "./ParallaxImg"
import InfoSection from "./InfoSection"

const Home = () => {
  useEffect(() => {
    var parallaxDesign = document.querySelectorAll(".parallax")
    M.Parallax.init(parallaxDesign)
  }, [])

  return (
    <>
      <header></header>
      <ParallaxImg poster={burger} />
      <InfoSection />
    </>
  )
}

export default Home
