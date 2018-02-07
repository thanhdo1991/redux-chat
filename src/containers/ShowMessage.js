import { connect } from 'react-redux'
import MessageList from '../components/message-list'

const ShowMessage = connect(function(state){
  // console.log(state);
  return {messages : state.messages, }
})(MessageList)

export default ShowMessage
