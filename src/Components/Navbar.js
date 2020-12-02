import React, { useEffect } from "react"
import M from "materialize-css"
import { Link } from "react-router-dom"

const Navbar = () => {
  useEffect(() => {
    var sidenavbar = document.querySelectorAll(".sidenav")
    var navInstance = M.Sidenav.init(sidenavbar)
  }, [])

  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FEST
        </Link>

        <Link to="#" className="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </Link>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/menu" className="yellow-text darken-3 btn-small orange">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/cart" className="yellow-text darken-3 btn-small orange">
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="yellow-text darken-3 btn-small orange"
            >
              Contact
            </Link>
          </li>
        </ul>

        <ul className="sidenav grey" id="mobile-links">
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
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
