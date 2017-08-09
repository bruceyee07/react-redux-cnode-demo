import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'
import configureStore from '../stores'
import HomePage from '../components/HomePage'
import TopicContent from '../components/TopicContent'
import UserCenter from '../components/UserCenter'
import LoginPage from '../components/LoginPage'
import DeliverPage from '../components/DeliverPage'
import AccountInfo from '../components/AccountInfo'
import NotFound from '../components/NotFound'

import './style.styl'

const store = configureStore()

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      	<HashRouter>
      		<div className="wrapper">
      			<Route path="/" exact component={HomePage} />
            <Route path="/topic/:id" exact component={TopicContent} />
      			<Route path="/user/:userName" exact component={UserCenter} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/deliver" exact component={DeliverPage} />
            <Route path="/account" exact component={AccountInfo} />
      		</div>
      	</HashRouter>
      </Provider>
    )
  }
}