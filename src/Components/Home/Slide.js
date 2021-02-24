import React from "react"

const Slide = ({ chef }) => {
  return (
    <article key={chef.id} className="slide-card">
      <div className="col s8 m6 l4 offset-s2 offset-m1 offset-l1">
        <div className="img-container">
          <img src={chef.img} alt="product" className="slide-img" />
        </div>
      </div>
      <div className="col s9 m5 l5 offset-s1 offset-l1">
        <h3 className="center-align">{chef.name}</h3>
        <p className="center-align">{chef.desc}</p>
      </div>
    </article>
  )
}

export default Slide
