import { combineReducers } from 'redux'
import homePage from './homePage'
import currentTopic from './currentTopic'
import userCenter from './userCenter'
import loginPage from './loginPage'

const rootReducer = combineReducers({ homePage, currentTopic, userCenter, loginPage })

export default rootReducer