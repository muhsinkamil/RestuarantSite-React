import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} from "../Actions"

const Cart = ({
  items,
  total,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart
}) => {
  if (!_.size(items)) {
    return (
      <div className="center">
        <h3 className="red-text">Oops! You have not added any item</h3>
        <h4 className="red-text">Visit our</h4>
        <div style={{ marginTop: "20px" }}>
          <Link to="/menu" className="btn red">Menu</Link>
        </div>
      </div>
    )
  }

  const renderList = () => {
    return _.map(items, (item) => {
      return (
        <div key={item.id} className="flex-group">
          <h4>{item.title}</h4>
          <div className="quantity-group">
            <button
              className="btn-floating btn-small"
              onClick={() => increaseQuantity(item.id)}
            >
              <i className="material-icons bold">keyboard_arrow_up</i>
            </button>

            <h5 className="quantity">{item.quantity}</h5>
            <button
              className="btn-floating btn-small"
              onClick={() => decreaseQuantity(item.id)}
            >
              <i className="material-icons bold">keyboard_arrow_down</i>
            </button>
          </div>

          <div className="remove-button">
            <button className="btn red" onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="center">
      {renderList()}
      <h4>total: {total}</h4>
      <button className="btn red" onClick={() => clearCart()}>
        Clear cart
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { items: state.cartItems.items, total: state.cartItems.total }
}

export default connect(mapStateToProps, {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
})(Cart)
