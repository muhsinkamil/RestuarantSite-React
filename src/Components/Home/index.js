import React, { useEffect } from "react"
import M from "materialize-css"
import burger from "../../images/burgerP.jpg"
import ParallaxImg from "../Atoms/ParallaxImg"
import Footer from "./Footer"

const Home = () => {
  useEffect(() => {
    var parallaxDesign = document.querySelectorAll(".parallax")
    M.Parallax.init(parallaxDesign)
  }, [])

  return (
    <>
      <header></header>
      <ParallaxImg poster={burger} />
      <Footer />
    </>
  )
}

export default Home
