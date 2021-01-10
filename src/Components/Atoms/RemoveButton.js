import React from "react"
import {connect} from 'react-redux'
import { removeItem } from "../../Actions"

const RemoveButton = ({ id, removeItem }) => {
  return (
    <button className="btn red" onClick={() => { removeItem(id) }}>
      <i className="material-icons">clear</i>
    </button>
  )
}

export default connect(null, {removeItem})(RemoveButton)
