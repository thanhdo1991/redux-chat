import { combineReducers } from 'redux'
import messages from './messages'
import toggleLogin from './toggleLogin'

const messageApp = combineReducers({
  messages,
  isLogin: toggleLogin
})

export default messageApp
