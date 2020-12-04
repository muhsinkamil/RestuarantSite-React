import React from "react"
// import { Link } from "react-router-dom"
import Card from "./Card"
import items from "../data"

const Menu = () => {
  return (
    <div className="container">
      <h2 className="center-align red-text">Menu</h2>
      <div className="row">
        {items.map((item) => {
          return <Card key={item.id} item={item} />
        })}
      </div>
    </div>
  )
}

export default Menu
