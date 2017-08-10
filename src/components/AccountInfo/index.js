import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import LinkToLoginPage from '../LinkToLoginPage'
import Footer from '../Footer'
import { fetchUserInfo, logout } from '../../actions'
import { prettyDate } from '../../utils'
import style from './style.styl'

const TABS = [
	{
		code: 'recent_topics',
		name: '主题'
	},
	{
		code: 'recent_replies',
		name: '回复'
	}
]

class AccountInfo extends Component {
	constructor (props) {
		super(props)

		this.state = {
			currentTab: 'recent_topics'
		}

		this.handleLogout = this.handleLogout.bind(this)
		this.handleClickTab = this.handleClickTab.bind(this)
	}
	componentDidMount () {
		const { accountInfo, dispatch } = this.props

		if (accountInfo.token) {
			dispatch(fetchUserInfo(accountInfo.loginname))
		}
	}
	handleLogout () {
		const { dispatch } = this.props

		dispatch(logout())
	}
	handleClickTab (code) {
		this.setState({
			currentTab: code
		})
	}
	render () {
		const { accountInfo, userCenter } = this.props

		if (!accountInfo.token) {
			return (
				<div className="account-info-wrapper">
			  	<LinkToLoginPage />
			  </div>
			)
		}

		return (
		  <div className="account-info-wrapper">
		  	<div className="account-header">
		  		个人中心
	  			<FontAwesome
	  				className="sign-out-btn"
		        name='sign-out'
		        size='2x'
		        onClick={this.handleLogout}
		      />
		  	</div>
		  	<div className="account-info">
		  		<img className="account-avatar" src={(userCenter.userInfo || {}).avatar_url} />
		  		<p className="account-name">{accountInfo.loginname}</p>
		  		<ul className="basic-info">
		  			<li>注册于：{prettyDate((userCenter.userInfo || {}).create_at)}</li>
		  			<li>积分：{(userCenter.userInfo || {}).score}</li>
		  		</ul>
		  	</div>
		  	<div className="account-topic-wrapper">
		  		<div className="account-topic-header">
		  			<ul className="account-topic-tabs">
		  				{
		  					TABS.map(item => 
		  						<li 
		  							key={item.code} 
		  							className={cx('account-topic-tab', { active: item.code == this.state.currentTab })}
		  							onClick={() => this.handleClickTab(item.code)}
	  							>
	  								{item.name}
	  							</li>
	  						)
		  				}
		  			</ul>
		  		</div>
		  		<div className="account-topic-content">
		  			<ul className="account-topic-list">
		  				{((userCenter.userInfo || {})[this.state.currentTab] || []).map(item => 
		  					<li key={item.id} className="list-item">
		  						<Link to={`/topic/${item.id}`}>{item.title}</Link>
		  						<span className="last-reply-at">{prettyDate(item.last_reply_at)}</span>
	  						</li>
	  					)}
		  			</ul>
		  		</div>
		  	</div>
		  	<Footer />
		  </div>
		)
	}
}

const mapStateToProps = state => {
	const { accountInfo, userCenter } = state
	
	return { accountInfo, userCenter }
}

export default connect(mapStateToProps)(AccountInfo)