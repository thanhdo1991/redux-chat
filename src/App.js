import React, { Component } from 'react';
import './App.css';

import Header from './components/header'
import ShowMessage from './containers/ShowMessage'
import AddMessage from './containers/AddMessage'
import AddImage from './containers/AddImage'

class App extends Component {
  render() {
    return (
      <div className="mdl-layout__container">
        <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-header is-upgraded" data-upgraded=",MaterialLayout">
          <Header />
          <main className="mdl-layout__content mdl-color--grey-100">
            <div id="messages-card-container" className="mdl-cell mdl-cell--12-col mdl-grid">

              <div id="messages-card" className="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-cell--6-col-tablet mdl-cell--6-col-desktop">
                <div className="mdl-card__supporting-text mdl-color-text--grey-600">

                  <ShowMessage />
                  <AddMessage />
                  <AddImage />
                </div>
              </div>

              <div id="must-signin-snackbar" className="mdl-js-snackbar mdl-snackbar" data-upgraded=",MaterialSnackbar">
                <div className="mdl-snackbar__text"></div>
                <button className="mdl-snackbar__action" type="button" aria-hidden="true"></button>
              </div>

            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
