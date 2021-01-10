import React from "react"

const ParallaxImg = ({ poster }) => {
  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={poster} alt="" />
      </div>
    </div>
  )
}

export default ParallaxImg
