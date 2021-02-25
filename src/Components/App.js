import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../styles/dist/main.css"
import Navbar from "./Navbar"
import Home from "./Home"
import Menu from "./Menu"
import Cart from "./Cart"
import Contact from "./Contact"
import NotFound from "./NotFound"

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
          <Route exact component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
