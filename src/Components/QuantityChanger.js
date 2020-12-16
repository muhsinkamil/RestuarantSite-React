import React from "react"
import { connect } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeItem } from "../Actions"

const QuantityChanger = ({
  id,
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <>
      <button
        className="btn-floating btn-small"
        onClick={() => {
          cartItems[id].quantity === 1 ? removeItem(id) : decreaseQuantity(id)
        }}
      >
        <i className="material-icons bold">keyboard_arrow_down</i>
      </button>

      <h5>{cartItems[id].quantity} </h5>

      <button
        className="btn-floating btn-small"
        onClick={() => increaseQuantity(id)}
      >
        <i className="material-icons bold">keyboard_arrow_up</i>
      </button>
    </>
  )
}

const mapStateToProps = (state) => {
  return { cartItems: state.cartItems.items }
}

export default connect(mapStateToProps, {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
})(QuantityChanger)
