import React from "react"
import { connect } from "react-redux"
import { addItem } from "../Actions"

const Card = ({ item, addItem }) => {
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
        <button className="btn red waves-effect" onClick={() => addItem(item)}>
          Add Item
        </button>
      </div>
    </div>
  )
}

export default connect(null, { addItem })(Card)
