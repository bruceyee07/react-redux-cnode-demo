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
			const { tab, page, topics } = action
			let topicsByTab
			if (state.topicsByTab[tab] && state.topicsByTab[tab].topics.length > 0) {
				let preTopics = state.topicsByTab[tab].topics
				topicsByTab = Object.assign({}, state.topicsByTab, { [tab]: { topics: preTopics.concat(topics), page }})
			} else {
				topicsByTab = Object.assign({}, state.topicsByTab, { [tab]: { topics, page }})
			}
			
			return { ...state, isFetching: false, topicsByTab }
		default:
			return state
	}
}