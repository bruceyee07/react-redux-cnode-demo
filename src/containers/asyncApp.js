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
		const { dispatch, tab } = this.props
		dispatch(fetchTopics(tab))
	}
	render () {
		const { isFetching, tab, topicsByTab } = this.props

		return (
			<div>
				<NavTab
					handleClickTab={this.handleClickTab}
			 	/>
	 		 	<TopicList
	 		 		isFetching={isFetching}
	 		 		topics={topicsByTab[tab] || []}
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
	isFetching: PropTypes.bool.isRequired,
	tab: PropTypes.string.isRequired,
	topicsByTab: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	const {isFetching, tab, topicsByTab } = state

	return {
		isFetching,
		tab,
		topicsByTab
	}
}

export default connect(mapStateToProps)(AsyncApp)