import React from "react"
import _ from "lodash"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { clearCart, removeItem } from "../Actions"
import RemoveButton from "./RemoveButton"
import QuantityChanger from "./QuantityChanger"

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
        <div className="row" key={item.id}>
          <div className="col s12 m3">
            <img src={item.img} style={{ height: "120px" }} alt={item.title} />
          </div>

          <div key={item.id} className="col s12 m9">
            <div className="flex-group row col s12">
              <h5 className="red-text col s5 m7">{item.title}</h5>

              <div className="quantity-group col s6 m4">
                <QuantityChanger id={item.id} />
              </div>

              <div className="col s2 m1 offset-m1">
                <RemoveButton id={item.id} />
              </div>
            </div>
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
        <button
          className="btn red"
          onClick={() => clearCart()}
          style={{ marginBottom: "20px" }}
        >
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
