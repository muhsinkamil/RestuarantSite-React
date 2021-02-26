import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const CartNavigator = ({ cartItemsCount, cartStyle }) => {
  return (
    <Link to="/cart" className={cartStyle.linkStyle}>
      <i className={cartStyle.iconStyle}>shopping_cart</i>
      <small className={cartStyle.badgeStyle}>{cartItemsCount}</small>
    </Link>
  )
}

const mapStateToProps = (state) => {
  const { items } = state.cartItems
  const itemIds = Object.keys(items)
  const totalQuantity = itemIds.reduce((acc, id) => acc + items[id].quantity, 0)
  return { cartItemsCount: totalQuantity }
}

export default connect(mapStateToProps)(CartNavigator)
