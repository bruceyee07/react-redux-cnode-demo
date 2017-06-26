import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router'
import HomePage from '../containers/HomePage'
import TopicContent from '../components/TopicContent'

class App extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

let routes = (
    <Route path={`${prefix}/`} component={App}>
        <IndexRoute component={HomePage}/>
        <Route path='post' component={PostPage}/>
        <Route path='message' component={MessagePage}/>
        <Route path='login' component={LoginPage}/>
        <Route path='profile' component={ProfilePage}/>
        <Route path='user/:name' component={AccountInfo}/>
        <Route path='topic/:id' component={TopicContent}/>
    </Route>
);
export default routes;