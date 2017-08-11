import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LinkToLoginPage from '../LinkToLoginPage'
import Footer from '../Footer'
import { deliver } from '../../actions'
import style from './style.styl'

const DELIVER_TYPE = [
	{
		name: '分享',
		code: 'share'
	},
	{
		name: '问答',
		code: 'ask'
	},
	{
		name: '招聘',
		code: 'job'
	},
	{
		name: '开发',
		code: 'dev'
	}
]

class DeliverPage extends Component {
	constructor (props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit () {
		const { accountInfo, dispatch } = this.props
		const index = this.refs['deliver-type-select'].selectedIndex
		const type = this.refs['deliver-type-select'][index].value
		const title = this.refs['deliver-title-input'].value
		const content = this.refs['deliver-content-textarea'].value

		console.log(this.props.history)

		dispatch(deliver(accountInfo.token, type, title, content, (id) => {
			setTimeout(() => { this.props.history.push(`/topic/${id}`) }, 1000)
		}))
	}
	render () {
		const { accountInfo } = this.props

		if (!accountInfo.token) {
			return (
				<div className="deliver-page-wrapper">
			  	<LinkToLoginPage />
			  </div>
			)
		}

		return (
		  <div className="deliver-page-wrapper">
		  	<div className="deliver-page-header">发表主题</div>
		  	<div className="deliver-page-content">
		  		<div className="deliver-type-select">
		  			<label>请选择主题类型：</label>
		  			<select ref="deliver-type-select">
		  				{DELIVER_TYPE.map(item =>
		  					<option key={item.code} value={item.code}>{item.name}</option>
	  					)}
		  			</select>
		  		</div>
		  		<div className="deliver-title-input">
		  			<input ref="deliver-title-input" type="text" placeholder="请输入标题" />
		  		</div>
		  		<div className="deliver-content-textarea">
		  			<textarea ref="deliver-content-textarea" placeholder="请输入内容" />
		  		</div>
		  		<button className="deliver-btn" type="submit" onClick={this.handleSubmit}>发表</button>
		  	</div>
		  	<Footer />
		  </div>
		)
	}
}

const mapStateToProps = state => {
	const { accountInfo } = state
	
	return { accountInfo }
}

export default connect(mapStateToProps)(DeliverPage)