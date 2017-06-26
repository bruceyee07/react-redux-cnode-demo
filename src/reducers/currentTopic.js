import { CLICK_TOPIC, REQUEST_TOPIC_DETAIL, RECEIVE_TOPIC_DETAIL } from '../actions'

export default function currentTopic (state = {
	isFetching: false
}, action) {
	switch (action.type) {
		case CLICK_TOPIC:
			return { ...state, id: action.id }
		case REQUEST_TOPIC_DETAIL:
			return { ...state,  isFetching: true }
		case RECEIVE_TOPIC_DETAIL:
			return {...state, isFetching: false, detail: action.detail }
		default:
			return state
	}
}