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
      <div className="quantity-group">
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

        <h5 className="quantity">{item.quantity}</h5>

        <button
          className="btn-floating btn-small"
          onClick={() => increaseQuantity(item.id)}
        >
          <i className="material-icons bold">keyboard_arrow_up</i>
        </button>
      </div>
      <div className="remove-button">
        <button className="btn red" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </>
  )
}

export default connect(null, {
  removeItem,
  decreaseQuantity,
  increaseQuantity,
})(QuantityButton)
