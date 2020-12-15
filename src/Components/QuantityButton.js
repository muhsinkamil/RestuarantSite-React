import React from "react"
import { connect } from "react-redux"
import { removeItem, decreaseQuantity, increaseQuantity } from "../Actions"

const QuantityButton = ({
  item,
  removeItem,
  decreaseQuantity,
  increaseQuantity,
}) => {
  return (
    <>
      <div className="quantity-group col s6 m4">
        <button
          className="btn-floating btn-small"
          onClick={() =>
            item.quantity === 1
              ? removeItem(item.id)
              : decreaseQuantity(item.id)
          }
        >
          <i className="material-icons bold">keyboard_arrow_down</i>
        </button>

        <h5>{item.quantity}</h5>

        <button
          className="btn-floating btn-small center-align"
          onClick={() => increaseQuantity(item.id)}
        >
          <i className="material-icons bold">keyboard_arrow_up</i>
        </button>
      </div>

      <button className="btn red col s2 m1" onClick={() => removeItem(item.id)}>
        <i className="material-icons">clear</i>
      </button>
    </>
  )
}

export default connect(null, {
  removeItem,
  decreaseQuantity,
  increaseQuantity,
})(QuantityButton)
