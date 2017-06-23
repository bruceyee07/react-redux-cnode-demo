import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import NavTab from '../components/NavTab'
import TopicList from '../components/TopicList'
import { tabClick, fetchTopics } from '../actions'

class AsyncApp extends Component {
	constructor (props) {
		super(props)

		this.handleClickTab = this.handleClickTab.bind(this)
	}
	componentDidMount () {
		const { dispatch, clickedTab } = this.props
		dispatch(fetchTopics(clickedTab))
	}
	render () {
		const { clickedTab, topics, isFetching } = this.props

		return (
			<div>
				<NavTab
					handleClickTab={this.handleClickTab}
			 	/>
			 	<TopicList
			 		topics={topics}
			 		isFetching={isFetching}
		 		/>
			</div>
		)
	}
	handleClickTab (tab) {
		this.props.dispatch(tabClick(tab))
		this.props.dispatch(fetchTopics(tab))
	}
}

AsyncApp.propTypes = {
	clickedTab: PropTypes.string.isRequired,
	topics: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	const { clickedTab, topicsByTab } = state
	const { 
		isFetching, 
		items: topics 
	} = topicsByTab[clickedTab] || { 
		isFetching: true, 
		items: [] 
	}

	return {
		clickedTab,
		topics,
		isFetching
	}
}

export default connect(mapStateToProps)(AsyncApp)