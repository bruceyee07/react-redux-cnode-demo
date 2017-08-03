import fetch from 'isomorphic-fetch'

export const CLICK_TAB = 'CLICK_TAB'
export const REQUEST_TOPICS = 'REQUEST_TOPICS'
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS'
export const CLICK_TOPIC = 'CLICK_TOPIC'
export const REQUEST_TOPIC_DETAIL = 'REQUEST_TOPIC_DETAIL'
export const RECEIVE_TOPIC_DETAIL = 'RECEIVE_TOPIC_DETAIL'
export const CLICK_USER_AVATAR = 'CLICK_USER_AVATAR'
export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_RESET = 'LOGIN_RESET'
export const LOGOUT = 'LOGOUT'

export const tabClick = (tab) => {
	return {
		type: CLICK_TAB,
		tab
	}
}

export const requestTopics = (tab) => {
	return {
		type: REQUEST_TOPICS,
		tab
	}
}

export const receiveTopics = (tab, json) => {
	return {
		type: RECEIVE_TOPICS,
		tab,
		topics: json.data.map(child => child)
	}
}

export const fetchTopics = (tab = 'all', page = 1, limit = 20) => {
	return dispatch => {
		dispatch(requestTopics(tab))
		return fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=false`)
			.then(res => res.json())
			.then(json => dispatch(receiveTopics(tab, json)))
	}
}

export const topicClick = (id) => {
	return {
		type: CLICK_TOPIC,
		id
	}
}

export const requestTopicDetail = (id) => {
	return  {
		type: REQUEST_TOPIC_DETAIL,
		id
	}
}

export const receiveTopicDetail = (id, json) => {
	return {
		type: RECEIVE_TOPIC_DETAIL,
		id,
		detail: json.data
	}
}

export const fetchTopicDetail = (id) => {
	return dispatch => {
		dispatch(requestTopicDetail(id))
		return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
			.then(res => res.json())
			.then(json => dispatch(receiveTopicDetail(id, json)))
	}
}

export const userAvatarClick = (userName) => {
	return {
		type: CLICK_USER_AVATAR,
		userName
	}
}

export const requestUserInfo = (userName) => {
	return {
		type: REQUEST_USER_INFO,
		userName
	}
}

export const receiveUserInfo = (userName, json) => {
	return {
		type: RECEIVE_USER_INFO,
		userName,
		userInfo: json.data
	}
}

export const fetchUserInfo = (userName) => {
	return dispatch => {
		dispatch(requestUserInfo(userName))
		return fetch(`https://cnodejs.org/api/v1/user/${userName}`)
			.then(res => res.json())
			.then(json => dispatch(receiveUserInfo(userName, json)))
	}
}

export const loginSucceed = (data) => {
	return {
		type: LOGIN_SUCCEED,
		data
	}
}

export const loginFailed = (msg) => {
	return {
		type: LOGIN_FAILED,
		msg
	}
}

export const loginReset = () => {
	return {
		type: LOGIN_RESET
	}
}

export const requestLogin = (token) => {
	return dispatch => {
		return fetch('https://cnodejs.org/api/v1/accesstoken', {
			method: 'post',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: `accesstoken=${token}`
		})
		.then(res => res.json())
		.then(json => {
			if (json.success) {
				dispatch(loginSucceed({
					loginname: json.loginname,
					id: json.id,
					token
				}))
			} else {
				dispatch(loginFailed(json.error_msg))
			}
		})
		.then(setTimeout(() => dispatch(loginReset()), 2000))
	}
}