import React, { Component } from 'react'
import ReactDOM from 'react-dom'
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
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount () {
		const { dispatch, homePage } = this.props
		dispatch(fetchTopics(homePage.tab, 1))
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
	 		 		ref="topic-list"
	 		 		isFetching={homePage.isFetching}
	 		 		topics={(homePage.topicsByTab[homePage.tab] || {}).topics || []}
	 		 		handleClickTopic={this.handleClickTopic}
	 		 		handleClickUserAvatar={this.handleClickUserAvatar}
	 		 		handleScroll={this.handleScroll}
	 	 		/>
	 	 		<Footer />
   		</div>
		)
	}
	handleClickTab (tab) {
		this.props.dispatch(tabClick(tab))
		this.props.dispatch(fetchTopics(tab), 1)
	}
	handleClickTopic (id) {
		this.props.dispatch(topicClick(id))
		this.props.dispatch(fetchTopicDetail(id))
	}
	handleClickUserAvatar (userName) {
		this.props.dispatch(userAvatarClick(userName))
		this.props.dispatch(fetchUserInfo(userName))
	}
	handleScroll () {
		const { dispatch, homePage } = this.props
		const topicList = ReactDOM.findDOMNode(this.refs['topic-list'])

    if (!homePage.isFetching) {
      if (topicList.scrollHeight <= topicList.scrollTop + topicList.offsetHeight) {
        const data = homePage.topicsByTab[homePage.tab]
        dispatch(fetchTopics(homePage.tab, data.page + 1))
      }
    }
	}
}

const mapStateToProps = state => {
	const { homePage } = state

	return { homePage }
}

export default connect(mapStateToProps)(HomePage)