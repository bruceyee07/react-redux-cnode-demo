import { combineReducers } from 'redux'
import homePage from './homePage'
import currentTopic from './currentTopic'
import userCenter from './userCenter'
import loginPage from './loginPage'
import accountInfo from './accountInfo'
import footer from './footer'

const rootReducer = combineReducers({ homePage, currentTopic, userCenter, loginPage, accountInfo, footer })

export default rootReducer