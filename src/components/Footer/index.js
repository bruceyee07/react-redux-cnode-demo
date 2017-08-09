import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import './style.styl'

const TABS = [
	{
		title: '首页',
		code: 'index',
		url: '/'
	},
	{
		title: '发表',
		code: 'deliver',
		url: '/deliver'
	},
	{
		title: '消息',
		code: 'message',
		url: '/message'
	},
	{
		title: '我的',
		code: 'ucenter',
		url: '/account'
	}
]

export default class Footer extends Component {
	render () {
		const { handleClickFooter } = this.props
		
		return (
			<ul className="nav-footer">
				{TABS.map(tab => 
					<li
						key={tab.code}
						className={cx('list-item')}
					>
						<Link to={tab.url}>{tab.title}</Link>
					</li>
				)}
			</ul>
		)
	}
}