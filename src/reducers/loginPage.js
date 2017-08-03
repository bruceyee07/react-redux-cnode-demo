import { LOGIN_SUCCEED, LOGIN_FAILED, LOGIN_RESET } from '../actions'

export default function loginPage (state = {
	succeed: false,
	failed: false,
	reset: false,
	errorMsg: ''
}, action) {
	switch (action.type) {
		case LOGIN_SUCCEED:
			return { ...state, succeed: true }
		case LOGIN_FAILED:
			return { ...state, failed: true, errorMsg: action.msg  }
		case LOGIN_RESET:
			return { ...state, reset: true, errorMsg: '' }
		default:
			return state
	}
}