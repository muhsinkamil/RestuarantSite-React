import React from "react"
import { size, map } from "lodash"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import EmptyCart from "../images/EmptyCart.png"
import { clearCart, removeItem } from "../Actions"
import RemoveButton from "./Atoms/RemoveButton"
import QuantityChanger from "./Atoms/QuantityChanger"

const Cart = ({ items, total, clearCart }) => {
  if (!size(items)) {
    return (
      <div className="center">
        <img src={EmptyCart} alt="Empty cart" />
        <h4 className="red-text">So Empty!! Visit our</h4>
        <div style={{ marginTop: "20px" }}>
          <Link to="/menu" className="btn red">
            Menu
          </Link>
        </div>
      </div>
    )
  }

  const renderList = () => {
    return map(items, (item) => {
      return (
        <div className="row" key={item.id}>
          <div className="col s12 m3">
            <img src={item.img} alt={item.title} className="card-item-img" />
          </div>

          <div key={item.id} className="col s12 m9">
            <div className="col s12 flex-group">
              <div className="red-text col s4 m7 title">{item.title}</div>
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
    <>
      <h3 className="center-align">Cart</h3>
      <hr className="ruler" />

      <div className="container">{renderList()}</div>

      <div className="center-align">
        <hr className="ruler" />
        <h4>Total: {total}</h4>
        <button
          className="btn red"
          onClick={() => clearCart()}
          style={{ marginBottom: "1.2rem" }}
        >
          Clear cart
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return { items: state.cartItems.items, total: state.cartItems.total }
}

export default connect(mapStateToProps, {
  clearCart,
  removeItem,
})(Cart)
