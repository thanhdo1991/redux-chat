import React, { Component } from 'react'
import fakeAuth from './fakeAuth'

export default class Header extends Component {
  state = {
    isLogin: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({isLogin: true})
    })
  }

  render() {
    let signInBtn = this.state.isLogin ? 'hidden': '';
    let signOutBtn = this.state.isLogin ? '': 'hidden';

    return (
      <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700 is-casting-shadow">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
            <h3><i className="material-icons">chat_bubble_outline</i> Chat room</h3>
          </div>
          <div id="user-container">
            <div {...signOutBtn} id="user-pic"></div>
            <div {...signOutBtn} id="user-name"></div>
            <button {...signOutBtn} id="sign-out" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" data-upgraded=",MaterialButton,MaterialRipple">
              Sign-out
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
            <button onClick={this.login} {...signInBtn} id="sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" data-upgraded=",MaterialButton,MaterialRipple">
              <i className="material-icons">account_circle</i>Sign-in with Google
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
          </div>
        </div>
      </header>
    )
  }
}
