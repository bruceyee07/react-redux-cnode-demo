import { combineReducers } from 'redux'
import { CLICK_TAB, REQUEST_TOPICS, RECEIVE_TOPICS } from '../actions'

function clickedTab (state = 'all', action) {
	switch (action.type) {
		case CLICK_TAB: 
			return action.tab
		default:
			return state
	}
}

function topics (state = {
	isFetching: false,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_TOPICS:
			return { ...state, isFetching: true }
		case RECEIVE_TOPICS:
			return { ...state, isFetching: false, items: action.topics }
		default:
			return state
	}
}

function topicsByTab (state = {}, action) {
	switch (action.type) {
		case REQUEST_TOPICS:
		case RECEIVE_TOPICS:
			return {...state, [action.tab]: topics(state[action.tab], action) }
		default:
			return state
	}
}

const rootReducer = combineReducers({ clickedTab, topicsByTab })

export default rootReducer