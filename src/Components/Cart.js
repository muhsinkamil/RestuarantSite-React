import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { clearCart, removeItem } from "../Actions"
import QuantityButton from "./QuantityButton"

const Cart = ({ items, total, clearCart, removeItem }) => {
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
        <div className="row" key={ item.id }>
          <div className="col s12 m5 l3">
            <img src={item.img} style={{ height: "130px" }} alt={ item.title }/>
          </div>

          <div key={item.id} className="flex-group col s9 m7 l9">
            <h5 className="col s6 m7 red-text">{item.title}</h5>
            <QuantityButton item={item} />
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <div className="center-align">
        <h3>Cart</h3>
        <hr className="ruler" />
      </div>

      <div className="container">{renderList()}</div>

      <div className="center-align">
        <hr className="ruler" />
        <h4>Total: {total}</h4>
        <button className="btn red" onClick={() => clearCart()}>
          Clear cart
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { items: state.cartItems.items, total: state.cartItems.total }
}

export default connect(mapStateToProps, {
  clearCart,
  removeItem,
})(Cart)
