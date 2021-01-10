import React from "react"
import { connect } from "react-redux"
import { filterItems } from "../../Actions"

const Categories = ({ allItems, categories, filterItems }) => {
  return (
    <div className="center-align">
      {categories.map((category, index) => {
        return (
          <button
            className="btn-flat red white-text"
            style={{ margin: "8px", borderRadius: "20px" }}
            key={index}
            onClick={() => filterItems(allItems, category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  return { allItems: state.menuItems.allItems }
}

export default connect(mapStateToProps, { filterItems })(Categories)
