import React from "react"

const ParallaxImg = ({ poster }) => {
  return (
    <section className="parallax-container">
      <div className="parallax">
        <img src={poster} alt="poster" />
      </div>
    </section>
  )
}

export default ParallaxImg
