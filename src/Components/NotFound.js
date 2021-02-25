import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="center">
      <h3 className="red-text">Oops! You are definitely in a wrong spot</h3>
      <h4 className="red-text">Visit our</h4>
      <div style={{ marginTop: "20px" }}>
        <Link to="/" className="btn red">
          Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
