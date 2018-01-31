import React from 'react';
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import users from '../usersAPI';

let AddMessage = ({ dispatch }) => {
  let message;
  // Fake user.
  const user = users[Math.floor(Math.random() * users.length)];
  const {name} = user;
  const {photoUrl} = user;

  return (
    <form id="message-form" onSubmit={e => {
      e.preventDefault()
      if (!message.value.trim()) {
        return
      }
      dispatch(addMessage({text: message.value, name, photoUrl}))
      message.value = ''
      message.focus()
    }}>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="message" ref={el => {message = el}} />
        <label className="mdl-textfield__label" htmlFor="message">Message...</label>
      </div>
      <button id="submit" disabled type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
        Send
      </button>
    </form>
  )
}

AddMessage = connect()(AddMessage)

export default AddMessage
