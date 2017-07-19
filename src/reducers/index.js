import { combineReducers } from 'redux'
import homePage from './homePage'
import currentTopic from './currentTopic'
import userCenter from './userCenter'

const rootReducer = combineReducers({ homePage, currentTopic, userCenter })

export default rootReducer