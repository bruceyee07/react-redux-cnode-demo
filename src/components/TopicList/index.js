import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { tabClick } from '../../actions'
import style from './style.module.styl'

export default class TopicList extends Component {
	render () {
		const { topics, isFetching } = this.props

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
	          <ul>
	          	{topics.map(topic => <li key={topic.id}>{topic.title}</li>)}
	          </ul>
	        </div>
	      }
   		</div>
		)
	}
}