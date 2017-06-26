import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.styl'

const TABS = [
	{
		title: '全部',
		code: 'all'
	},
	{
		title: '精华',
		code: 'good',
	},
	{
		title: '分享',
		code: 'share'
	},
	{
		title: '问答',
		code: 'ask'
	},
	{
		title: '招聘',
		code: 'job'
	}
]

export default class NavTab extends Component {
	render () {
		const { handleClickTab } = this.props

		return (
			<ul className="nav-tab">
				{TABS.map(tab => 
					<li 
						key={tab.code}
						onClick={() => handleClickTab(tab.code)}
					>
						{tab.title}
					</li>
				)}
			</ul>
		)
	}
}