import React from "react"
import { useState } from "react"
import { chefs } from "../../data"
import Slide from "./Slide"

const Chefs = () => {
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((index) => {
      const newIndex = index + 1
      return newIndex === chefs.length ? 0 : newIndex
    })
  }

  const prevSlide = () => {
    setIndex((index) => {
      const newIndex = index - 1
      return newIndex < 0 ? chefs.length - 1 : newIndex
    })
  }

  return (
    <section className="container slide-container">
      <h3 className="yellow-text center-align text-darken-4">Our Chefs</h3>
      <hr className="ruler" />

      <div className="row valign-wrapper">
        <div className="col s1">
          <button className="btn" onClick={prevSlide}>
            <i className="material-icons">arrow_back</i>
          </button>
        </div>

        <Slide chef={chefs[index]} />

        <div className="col s1">
          <button className="btn" onClick={nextSlide}>
            <i className="material-icons">arrow_forward</i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Chefs
