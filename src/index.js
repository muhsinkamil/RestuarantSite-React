import React from "react"
import { render } from "react-dom"
import { createStore, compose } from "redux"
import { Provider } from "react-redux"

import App from "./Components/App"

import reducers from "./Reducers"

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhacers())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
