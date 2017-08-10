import { REQUEST_MESSAGES, RECEIVE_MESSAGES, REQUEST_UNREAD_MESSAGES_COUNT, RECEIVE_UNREAD_MESSAGES_COUNT } from '../actions'

export default function messagePage (state = {
	isFetching: false,
	unread_count: 0,
	messages: {}
}, action) {
	switch (action.type) {
		case REQUEST_MESSAGES:
			return { ...state, isFetching: true }
		case RECEIVE_MESSAGES:
			return { ...state, messages: action.messages, isFetching: false }
		case REQUEST_UNREAD_MESSAGES_COUNT:
			return state
		case RECEIVE_UNREAD_MESSAGES_COUNT:
			return { ...state, unread_count: action.count }
		default:
			return state
	}
}