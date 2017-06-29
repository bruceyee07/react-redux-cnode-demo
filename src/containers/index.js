import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import configureStore from '../stores'
import HomePage from '../components/HomePage'
import TopicContent from '../components/TopicContent'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      	<BrowserRouter>
      		<div>
      			<Route path="/" component={HomePage} />
      			<Route path="/topic/:id" component={TopicContent} />
      		</div>
      	</BrowserRouter>
      </Provider>
    )
  }
}