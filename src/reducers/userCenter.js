import { CLICK_USER_AVATAR, REQUEST_USER_INFO, RECEIVE_USER_INFO } from '../actions'

export default function userCenter (state = {
	isFetching: false
}, action) {
	switch (action.type) {
		case CLICK_USER_AVATAR:
			return { ...state, userName: action.userName }
		case REQUEST_USER_INFO:
			return { ...state,  isFetching: true }
		case RECEIVE_USER_INFO:
			return {...state, isFetching: false, userInfo: action.userInfo }
		default:
			return state
	}
}