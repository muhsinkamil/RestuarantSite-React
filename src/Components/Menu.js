import React, { useState } from "react"
import Card from "./Card"
import items from "../data"
import Categories from "./Categories"

const Menu = () => {
  const [filteredItems, setFilteredItems] = useState(items)

  const categories = ["all", ...new Set(items.map((item) => item.category))]

  const getCardList = (items) => {
    return items.map((item) => {
      return (
        <div className="col s12 m6 l4" key={item.id}>
          <Card item={item} />
        </div>
      )
    })
  }

  const filterItems = (category) => {
    if(category === "all"){
      setFilteredItems(items)
    }else{
    const filteredMenu = items.filter((item) => item.category === category)
    setFilteredItems(filteredMenu)
  }
}

  return (
    <div className="container">
      <h2 className="center-align red-text">Menu</h2>
      <Categories
        categories={categories}
        filterItems={ filterItems }
      />

      <div className="row" style={{ marginTop: "1rem" }}>
        {getCardList(filteredItems)}
      </div>

    </div>
  )
}

export default Menu
