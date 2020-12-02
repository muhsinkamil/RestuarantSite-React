import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../styles/styles.css"
import Navbar from "./Navbar"
import Home from "./Home"
import Menu from "./Menu"
import Cart from "./Cart"
import Contact from "./Contact"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/menu" exact component={Menu}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
