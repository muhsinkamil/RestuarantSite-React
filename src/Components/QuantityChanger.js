import React from "react"
import { connect } from "react-redux"
import { increaseQuantity, decreaseQuantity, removeItem } from "../Actions"

const QuantityChanger = ({
  id,
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <>
      <button
        className="btn-floating btn-small"
        onClick={() => {
          item.quantity === 1 ? removeItem(id) : decreaseQuantity(id)
        }}
      >
        <i className="material-icons bold">keyboard_arrow_down</i>
      </button>

      <h5>{item.quantity} </h5>

      <button
        className="btn-floating btn-small"
        onClick={() => increaseQuantity(id)}
      >
        <i className="material-icons bold">keyboard_arrow_up</i>
      </button>
    </>
  )
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id
  return { item: state.cartItems.items[id] }
}

export default connect(mapStateToProps, {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
})(QuantityChanger)
