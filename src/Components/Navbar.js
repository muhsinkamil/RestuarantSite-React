import React, { useEffect } from "react"
import M from "materialize-css"
import { Link } from "react-router-dom"

const Navbar = () => {
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
            </Link>
          </li>
        </ul>

        <ul className="sidenav grey" id="mobile-links">
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

export default Navbar
