import React, { useEffect } from "react"
import M from "materialize-css"
import _ from 'lodash'
import { Link } from "react-router-dom"
import { connect } from "react-redux"

const Navbar = ({ cartItemsCount }) => {
  useEffect(() => {
    var sidenavbar = document.querySelectorAll(".sidenav")
    M.Sidenav.init(sidenavbar)
  }, [])

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FEST
        </Link>

        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
          <i className="material-icons">menu</i>
        </Link>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link
              to="/menu"
              className="yellow-text lighten-3 btn-flat transparent"
            >
              Menu
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="yellow-text darken-3 btn-flat transparent"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/cart"
              className="yellow-text darken-3 btn-flat transparent"
            >
              <i className="material-icons">shopping_cart</i>
              <small className="notification-badge white-text">
                { cartItemsCount }
              </small>
            </Link>
          </li>
        </ul>

        <ul className="sidenav red lighten-2 sidenav-close" id="mobile-links">
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  return { cartItemsCount: _.size(state.cartItems.items) }
}

export default connect(mapStateToProps)(Navbar)
