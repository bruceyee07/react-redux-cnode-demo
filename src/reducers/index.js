import { combineReducers } from 'redux'
import homePage from './homePage'
import currentTopic from './currentTopic'

const rootReducer = combineReducers({ homePage, currentTopic })

export default rootReducer