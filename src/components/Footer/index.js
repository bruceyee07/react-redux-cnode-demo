import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style.styl'

const TABS = [
	{
		title: '首页',
		code: 'index'
	},
	{
		title: '发表',
		code: 'deliver',
	},
	{
		title: '消息',
		code: 'message'
	},
	{
		title: '我的',
		code: 'ucenter'
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
						{tab.title}
					</li>
				)}
			</ul>
		)
	}
}