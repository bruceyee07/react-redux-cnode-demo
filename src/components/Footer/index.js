import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { footerClick } from '../../actions'
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

class Footer extends Component {
	constructor (props) {
		super(props)

		this.handleClickFooter = this.handleClickFooter.bind(this)
	}
	handleClickFooter (code) {
		const { dispatch } = this.props

		dispatch(footerClick(code))
	}
	render () {
		const { footer } = this.props
		const currentTab = footer.tab.length > 0 ? footer.tab : TABS.filter(item => item.url == location.hash.slice(1))[0].code
		
		return (
			<ul className="nav-footer">
				{
					TABS.map(tab => {
						return (
							<li
								key={tab.code}
								className={cx('list-item', { active: tab.code == currentTab })}
								onClick={() => this.handleClickFooter(tab.code)}
							>
								<Link to={tab.url}>{tab.title}</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	const { footer } = state

	return { footer }
}

export default connect(mapStateToProps)(Footer)