import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { markdown } from 'markdown'
import { fetchTopicDetail } from '../../actions'
import {prettyDate} from '../../common'
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
		  	<div className="block-item">
		  		<div className="top-bar">
		  			<h3 className="title">{(currentTopic.detail || {}).title}</h3>
		  			<ul className="topic-info-list">
		  				<li className="list-item">发布于 {prettyDate((currentTopic.detail || {}).create_at)}</li>
		  				<li className="list-item">作者 {((currentTopic.detail || {}).author || {}).loginname}</li>
		  				<li className="list-item">{(currentTopic.detail || {}).visit_count} 次浏览</li>
		  			</ul>
		  		</div>
		  		<div className="topic-content" dangerouslySetInnerHTML={{__html: (currentTopic.detail || {}).content}} />
		  	</div>
		  	<div className="block-item">
		  		<ul className="reply-list">
	  				{((currentTopic.detail || {}).replies || []).map(item => 
	  					<li key={item.id} className="list-item">
	  						<div className="left-content">
	  							<img className="tiny-avatar" src={item.author.avatar_url} />
	  						</div>
	  						<div className="main-content">
	  							<div className="reply-content" dangerouslySetInnerHTML={{__html: item.content}} />
	  						</div>
	  						<div className="right-content">
	  							<span className="last-reply-wrap">{prettyDate(item.last_reply_at)}</span>
	  						</div>
	  					</li>
	  				)}
		  		</ul>
		  	</div>
		  </div>
		)
	}
}

const mapStateToProps = state => {
	const { currentTopic } = state

	return { currentTopic }
}

export default connect(mapStateToProps)(TopicContent)