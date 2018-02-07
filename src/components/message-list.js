import React, { Component } from 'react';

// Components.
import MessageItem from './message-item';

export default class MessageList extends Component {
  render() {
    return (
      <div id="messages">
        {this.props.messages.map((message, key) => <MessageItem key={key} message={message} /> )}
      </div>
    )
  }
}
