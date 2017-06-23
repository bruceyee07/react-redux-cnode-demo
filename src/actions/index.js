import fetch from 'isomorphic-fetch'

export const CLICK_TAB = 'CLICK_TAB'
export const REQUEST_TOPICS = 'REQUEST_TOPICS'
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS'
export const CLICK_TOPIC = 'CLICK_TOPIC'
export const REQUEST_TOPIC_DETAIL = 'REQUEST_TOPIC_DETAIL'
export const RECEIVE_TOPIC_DETAIL = 'RECEIVE_TOPIC_DETAIL'

export function tabClick (tab) {
	return {
		type: CLICK_TAB,
		tab
	}
}

export function requestTopics (tab) {
	return {
		type: REQUEST_TOPICS,
		tab
	}
}

export function receiveTopics (tab, json) {
	return {
		type: RECEIVE_TOPICS,
		tab,
		topics: json.data.map(child => child)
	}
}

export function fetchTopics (tab = 'all', page = 1, limit = 20) {
	return dispatch => {
		dispatch(requestTopics(tab))
		return fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=false`)
			.then(res => res.json())
			.then(json => dispatch(receiveTopics(tab, json)))
	}
}

export function requestTopicDetail (id) {
	return  {
		type: REQUEST_TOPIC_DETAIL,
		id
	}
}

export function receiveTopicDetail (id, json) {
	return {
		type: RECEIVE_TOPIC_DETAIL,
		id,
		detail: json.data
	}
}

export function fetchTopicDetail (id) {
	return dispatch => {
		dispatch(requestTopicDetail(id))
		return fetch(`https://cnodejs.org/api/v1/topic/${id}`)
			.then(res => res.json())
			.then(json => dispatch(receiveTopicDetail(id, json)))
	}
}