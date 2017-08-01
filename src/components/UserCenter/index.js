import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { fetchUserInfo } from '../../actions'
import { prettyDate } from '../../common'
import style from './style.styl'

class UserCenter extends Component {
	componentDidMount() {
		const { dispatch } = this.props
		const userName = this.props.match.params.userName

		dispatch(fetchUserInfo(userName))
	}
	render () {
		const { userCenter } = this.props
		const userInfo = userCenter.userInfo || null

		return userInfo ? 
			<div className="user-center-wrap">
				<div className="user-homepage">
					<div className="panel-header">
						<span className="homepage-title">个人主页</span>
						<span className="divider">/</span>
					</div>
					<div className="panel-body">
						<div className="user-avatar-wrap">
							<img className="user-avatar" src={userInfo.avatar_url} />
							<span className="user-name">{userInfo.loginname}</span>
						</div>
						<div className="user-score">{userInfo.score} 积分</div>
					</div>
				</div>
				<div className="recent-create-topics">
					<div className="panel-header">最近创建的话题</div>
					<div className="panel-body">
						<ul className="topic-list">
							{userInfo.recent_topics.map(item => 
								<li key={item.id} className="list-item">
									<div className="left-content">
										<img className="tiny-avatar" src={item.author.avatar_url} />
									</div>
									<div className="right-content">
										<Link to={`/topic/${item.id}`}>{item.title}</Link>
										<span className="last-reply-wrap">{prettyDate(item.last_reply_at)}</span>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
				<div className="recent-join-topics">
					<div className="panel-header">最近参与的话题</div>
					<div className="panel-body">
						<ul className="topic-list">
							{userInfo.recent_replies.map(item => 
								<li key={item.id} className="list-item">
									<div className="left-content">
										<img className="tiny-avatar" src={item.author.avatar_url} />
									</div>
									<div className="right-content">
	          				<Link to={`/topic/${item.id}`}>{item.title}</Link>
	          				<span className="last-reply-wrap">{prettyDate(item.last_reply_at)}</span>
									</div>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div> : null
	}
}

const mapStateToProps = state => {
	const { userCenter } = state
	return { userCenter }
}

export default connect(mapStateToProps)(UserCenter)