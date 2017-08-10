import { combineReducers } from 'redux'
import homePage from './homePage'
import currentTopic from './currentTopic'
import userCenter from './userCenter'
import loginPage from './loginPage'
import accountInfo from './accountInfo'
import footer from './footer'
import messagePage from './messagePage'

const rootReducer = combineReducers({ 
	homePage, 
	currentTopic, 
	userCenter, 
	loginPage, 
	accountInfo, 
	footer, 
	messagePage 
})

export default rootReducer