import React, { Component } from 'react';

export default class MessageItem extends Component {
  render() {
    const {message} = this.props;
    const {photoUrl} = message;
    const {name} = message;

    const text = message.text ? message.text : '';
    const imageUrl = message.imageUrl ? <img src={message.imageUrl} alt="Message" /> : '';

    return (
      <div className="message-container visible" id="12">
        <div className="spacing">
        <div className="pic" style={{backgroundImage: "url('" + photoUrl + "')"}}></div>
        </div>
        <div className="message">{text} {imageUrl}</div>
        <div className="name">{name}</div>
      </div>
    )
  }
}
