import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import configureStore from '../stores'
import AsyncApp from './asyncApp'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        	<Route path="/" component={AsyncApp} />
        </BrowserRouter>
      </Provider>
    )
  }
}