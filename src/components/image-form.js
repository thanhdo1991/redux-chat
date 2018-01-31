import React, { Component } from 'react';

export default class ImageForm extends Component {
  render() {
    return (
      <form id="image-form" action="#">
        <input id="mediaCapture" type="file" accept="image/*,capture=camera" />
        <button id="submitImage" title="Add an image" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
          <i class="material-icons">image</i>
        </button>
      </form>
    )
  }
}
