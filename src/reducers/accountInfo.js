import { LOGIN_SUCCEED, LOGIN_FAILED, UPDATE_ACCOUNT, LOGOUT } from '../actions'
import { storeToken, deleteToken } from '../utils'

let defaultState
if (storeToken('account')) {
	defaultState = JSON.parse(storeToken('account'))
} else {
	defaultState = {}
}

export default function accountInfo (state = defaultState, action) {
	switch (action.type) {
		case LOGIN_SUCCEED:
			storeToken('account', JSON.stringify(action.data))
			return Object.assign({}, state, action.data)
		case LOGIN_FAILED:
			return {}
		case LOGOUT:
			deleteToken('account')
			return {}
		case UPDATE_ACCOUNT:
			return Object.assign({}, state, action.data)
		default:
			return state
	}
}