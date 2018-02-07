import React from 'react';
import { connect } from 'react-redux';
import { addImage } from '../actions';
import users from '../usersAPI';

let AddImage = ({ dispatch, isLogin }) => {
  // Fake user.
  const user = users[Math.floor(Math.random() * users.length)];
  const {name} = user;
  const {photoUrl} = user;

  // Fake image
  const imageUrl = "https://www.w3schools.com/howto/img_fjords.jpg";

  return (
    <form id="image-form" onSubmit={e => {
      e.preventDefault()
    }}>
      <input id="mediaCapture"
              type="file"
              accept="image/*,capture=camera"
              disabled={!isLogin}
              onChange={e => {
                e.preventDefault();
                var file = e.target.files[0];
                document.getElementById('image-form').reset();

                if (!file.type.match('image.*')) {
                  alert("You can only share images");
                  return;
                }
                dispatch(addImage({imageUrl: imageUrl, name, photoUrl}))
              }}

      />
      <button id="submitImage" title="Add an image" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--amber-400 mdl-color-text--white">
        <i className="material-icons">image</i>
      </button>
    </form>
  )
}

AddImage = connect(function(state){
  return {isLogin : state.isLogin, }
})(AddImage)

export default AddImage
