import React, { Component } from 'react';

// Components.
import MessageItem from './message-item';

// Data.
import messages from '../messagesAPI';

export default class MessageList extends Component {
  constructor(props) {
    super(props);

    this.state = {messages}
  }

  render() {
    return (
      <div id="messages">
        {this.props.messages.map((message, key) => <MessageItem key={key} message={message} /> )}
      </div>
    )
  }
}
