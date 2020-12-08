import React from "react"
import _ from "lodash"
import { connect } from "react-redux"

const Cart = ({ items, total }) => {
  if (!_.size(items)) {
    return (
      <div className="center">
        <h3 className="red-text">Oops! You have not added any item</h3>
        <h4 className="red-text">Visit our</h4>
        <div style={{ marginTop: "20px" }}>
          <button className="btn red">Menu</button>
        </div>
      </div>
    )
  }

  return (
    <div className="center">
      {_.map(items, (item) => {
        return (
          <div key={ item.id }>
            <h4>
              {item.title} <small>*</small> {item.quantity}
            </h4>
          </div>
        )
      })}
      <h4>total: {total}</h4>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { items: state.cartItems.items, total: state.cartItems.total }
}

export default connect(mapStateToProps)(Cart)
