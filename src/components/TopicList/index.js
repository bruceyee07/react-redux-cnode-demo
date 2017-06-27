import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import style from './style.styl'

export default class TopicList extends Component {
	render () {
		const { isFetching, topics } = this.props
		
		return (
   		<div>
				{isFetching && topics.length === 0 &&
	        <h2>Loading...</h2>
	      }
	      {!isFetching && topics.length === 0 &&
	        <h2>Empty.</h2>
	      }
	      {!!topics.length &&
	        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	          <ul className="topic-list">
	          	{topics.map(topic => 
	          		<li key={topic.id}>
	          			<div className="left-wrap">
	          				<img className="avatar" src={topic.author['avatar_url']} alt={topic.author['loginname']} />
	          			</div>
	          			<div className="right-wrap">
		          			<Link 
		          				to={`/topic/${topic.id}`}
		          				className="title"
		          				onClick={() => this.props.handleClickTopic(topic.id)}
	          				>
	          					{topic.title}
	        					</Link>	
	          			</div>
        				</li>
          		)}
	          </ul>
	        </div>
	      }
   		</div>
		)
	}
}