import React from "react"

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="center-align">
      {categories.map((category, index) => {
        return (
          <button
            className="btn-flat red white-text"
            style={{ margin: "8px", borderRadius:"20px" }}
            key={index}
            onClick = { () => filterItems(category) }
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
