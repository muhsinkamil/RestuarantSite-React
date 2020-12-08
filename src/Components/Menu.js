import React, { useEffect } from "react"
import Card from "./Card"
import Categories from "./Categories"
import loader from '../images/loader.gif'
import { connect } from "react-redux"
import { fetchItems } from "../Actions"

const Menu = ({ allItems, fetchItems, filteredItems }) => {
  useEffect(() => {
    fetchItems()
  }, [])

  if (!allItems) {
    return (
      <div className="center">
        <img src={ loader } alt="Loading..."/>
      </div>
    )
  }

  const getCardList = (filteredItems) => {
    return filteredItems.map((item) => {
      return (
        <div className="col s12 m6 l4" key={item.id}>
          <Card item={item} />
        </div>
      )
    })
  }

  const categories = ["all", ...new Set(allItems.map((item) => item.category))]

  return (
    <div className="container">
      <h2 className="center-align red-text">Menu</h2>
      <Categories categories={categories} />

      <div className="row" style={{ marginTop: "1rem" }}>
        {getCardList(filteredItems)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allItems: state.items.allItems,
    filteredItems: state.items.filteredItems,
  }
}

export default connect(mapStateToProps, { fetchItems })(Menu)
