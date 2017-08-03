import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { requestLogin } from '../../actions'
import './style.styl'

class LoginPage extends Component {
	constructor (props) {
		super (props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit () {
		const { dispatch } = this.props
		const token = this.refs['token-input'].value

		dispatch(requestLogin(token))
	}
	render () {
		return (
			<div className="login-page-wrapper">
				<div className="login-box">
					<div><input ref="token-input" className="token-input" type="password" placeholder="请输入您的access token" /></div>
					<div><button type="submit" className="submit-btn" onClick={this.handleSubmit}>提交</button></div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	const { loginPage } = state
	
	return { loginPage }
}

export default connect(mapStateToProps)(LoginPage)