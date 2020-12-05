import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.img} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title red-text" style={{ fontWeight: 500 }}>
          {item.title}
        </span>
        <p>{item.desc}</p>
      </div>
      <div className="card-action">
        <Link to="/" className="red-text" style={{ fontWeight: 500 }}>
          Add Item
        </Link>
      </div>
    </div>
  )
}

export default Card
