import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavTab from '../NavTab'
import TopicList from '../TopicList'
import Footer from '../Footer'
import { tabClick, fetchTopics, topicClick, fetchTopicDetail, userAvatarClick, fetchUserInfo } from '../../actions'
import style from './style.styl'

class HomePage extends Component {
	constructor (props) {
		super(props)

		this.handleClickTab = this.handleClickTab.bind(this)
		this.handleClickTopic = this.handleClickTopic.bind(this)
		this.handleClickUserAvatar = this.handleClickUserAvatar.bind(this)
	}
	componentDidMount() {
		const { dispatch, homePage } = this.props
		
		dispatch(fetchTopics(homePage.tab))
	}
	render () {
		const { homePage } = this.props

		return (
   		<div className="homepage-wrapper">
   			<NavTab
					handleClickTab={this.handleClickTab}
					currentTab={homePage.tab}
			 	/>
	 		 	<TopicList
	 		 		isFetching={homePage.isFetching}
	 		 		topics={homePage.topicsByTab[homePage.tab] || []}
	 		 		handleClickTopic={this.handleClickTopic}
	 		 		handleClickUserAvatar={this.handleClickUserAvatar}
	 	 		/>
	 	 		<Footer />
   		</div>
		)
	}
	handleClickTab (tab) {
		this.props.dispatch(tabClick(tab))
		this.props.dispatch(fetchTopics(tab))
	}
	handleClickTopic (id) {
		this.props.dispatch(topicClick(id))
		this.props.dispatch(fetchTopicDetail(id))
	}
	handleClickUserAvatar (userName) {
		this.props.dispatch(userAvatarClick(userName))
		this.props.dispatch(fetchUserInfo(userName))
	}
}

const mapStateToProps = state => {
	const { homePage } = state

	return { homePage }
}

export default connect(mapStateToProps)(HomePage)