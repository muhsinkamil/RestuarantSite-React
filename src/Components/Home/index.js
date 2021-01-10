import React, { useEffect } from "react"
import M from "materialize-css"
import burger from "../../images/burger.jpg"
import ParallaxImg from "../Atoms/ParallaxImg"
import InfoSection from "./InfoSection"
import Footer from './Footer'

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
      <Footer />
    </>
  )
}

export default Home
