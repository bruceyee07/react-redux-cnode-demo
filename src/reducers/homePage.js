import { CLICK_TAB, REQUEST_TOPICS, RECEIVE_TOPICS } from '../actions'

export default function homePage (state = {
	isFetching: false,
	tab: 'all',
	topicsByTab: {}
}, action) {
	switch (action.type) {
		case CLICK_TAB:
			return { ...state, tab: action.tab }
		case REQUEST_TOPICS:
			return { ...state, isFetching: true }
		case RECEIVE_TOPICS:
			let topicsByTab = Object.assign({}, state.topicsByTab, { [action.tab]: action.topics })
			return { ...state, isFetching: false, topicsByTab }
		default:
			return state
	}
}