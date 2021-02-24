import React, { useEffect } from "react"
import { Parallax } from "materialize-css"
import burger from "../../images/burgerP.jpg"
import Chefs from "./Chefs"
import ParallaxImg from "../Atoms/ParallaxImg"
import Footer from "./Footer"

const Home = () => {
  useEffect(() => {
    var parallaxDesign = document.querySelectorAll(".parallax")
    Parallax.init(parallaxDesign)
  }, [])

  return (
    <>
      <header></header>
      <Chefs />
      <ParallaxImg poster={burger} />
      <Footer />
    </>
  )
}

export default Home
