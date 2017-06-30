import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'
import configureStore from '../stores'
import HomePage from '../components/HomePage'
import TopicContent from '../components/TopicContent'
import NotFound from '../components/NotFound'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      	<HashRouter>
      		<div>
      			<Route path="/" exact component={HomePage} />
      			<Route path="/topic/:id" exact component={TopicContent} />
      		</div>
      	</HashRouter>
      </Provider>
    )
  }
}