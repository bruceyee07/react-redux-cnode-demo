import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import LinkToLoginPage from '../LinkToLoginPage'
import Footer from '../Footer'
import { fetchUserInfo, logout } from '../../actions'
import { prettyDate } from '../../utils'
import style from './style.styl'

class AccountInfo extends Component {
	constructor (props) {
		super(props)

		this.handleLogout = this.handleLogout.bind(this)
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
		  				<li className="account-topic-tab active">主题</li>
		  				<li className="account-topic-tab">回复</li>
		  			</ul>
		  		</div>
		  		<div className="account-topic-content">
		  			
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