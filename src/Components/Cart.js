import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { clearCart } from "../Actions"
import QuantityButton from "./QuantityButton"

const Cart = ({ items, total, clearCart }) => {
  if (!_.size(items)) {
    return (
      <div className="center">
        <h3 className="red-text">Oops! You have not added any item</h3>
        <h4 className="red-text">Visit our</h4>
        <div style={{ marginTop: "20px" }}>
          <Link to="/menu" className="btn red">
            Menu
          </Link>
        </div>
      </div>
    )
  }

  const renderList = () => {
    return _.map(items, (item) => {
      return (
        <div key={item.id} className="flex-group">
          <h4>{item.title}</h4>
          <QuantityButton item={item} />
        </div>
      )
    })
  }

  return (
    <div className="cart-list-group">
      <h3>Cart</h3>
      <hr className="ruler" />
      <div className="cart-list">{renderList()}</div>

      <hr className="ruler" />
      <h4>Total: {total}</h4>
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
  clearCart,
})(Cart)
