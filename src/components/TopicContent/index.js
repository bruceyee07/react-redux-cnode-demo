import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchTopicDetail } from '../../actions'
import style from './style.styl'

class TopicContent extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		const id = this.props.match.params.id

		dispatch(fetchTopicDetail(id))
	}
	render () {
		const { currentTopic } = this.props

		return (
		  <div className="topic-content-wrapper">
		  	<div className="top-bar">
		  		{(currentTopic.detail || {}).title}
		  	</div>
		  	<div className="brief-info">
		  		
		  	</div>
		  	<div className="main-content" dangerouslySetInnerHTML={{__html: (currentTopic.detail || {}).content}} />
		  </div>
		)
	}
}

const mapStateToProps = state => {
	const { currentTopic } = state

	return { currentTopic }
}

export default connect(mapStateToProps)(TopicContent)