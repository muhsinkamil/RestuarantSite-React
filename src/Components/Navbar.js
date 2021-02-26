import React, { useEffect } from "react"
import { Sidenav } from "materialize-css"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import CartNavigator from "./Atoms/CartNavigator"

const Navbar = ({ location }) => {
  useEffect(() => {
    var sidenavbar = document.querySelectorAll(".sidenav")
    Sidenav.init(sidenavbar)
  }, [])

  const navClass = (pathName) => {
    return pathName === "/" ? "nav-wrapper black" : "nav-wrapper red darken-2"
  }

  const cartStyle = {
    linkStyle: "darken-3 btn-flat transparent",
    iconStyle: "material-icons yellow-text",
    badgeStyle: "notification-badge yellow-text",
  }

  return (
    <nav className={navClass(location.pathname)}>
      <div className="container">
        <Link to="/" className="brand-logo">
          FEST
        </Link>

        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
          <i className="material-icons">menu</i>
        </Link>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/menu" className="yellow-text btn-flat transparent">
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
            <CartNavigator cartStyle={cartStyle} />
          </li>
        </ul>

        {/* Side bar */}
        <ul
          className="sidenav deep-orange lighten-5 sidenav-close"
          id="mobile-links"
        >
          <li>
            <Link to="/menu">
              <i className="material-icons">restaurant_menu</i>
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <i className="material-icons">shopping_cart</i>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <i className="material-icons">email</i>Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
