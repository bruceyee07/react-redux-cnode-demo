import { CLICK_FOOTER } from '../actions'

export default function footer (state = {
	tab: '',
}, action) {
	switch (action.type) {
		case CLICK_FOOTER:
			return { ...state, tab: action.tab }
		default:
			return state
	}
}