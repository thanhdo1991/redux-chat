import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleLogin } from '../actions'

class Header extends Component {
  login = () => {
    this.props.dispatch(toggleLogin())
  }

  logout = () => {
    this.props.dispatch(toggleLogin())
  }

  render() {
    return (
      <header className="mdl-layout__header mdl-color-text--white mdl-color--light-blue-700 is-casting-shadow">
        <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
          <div className="mdl-layout__header-row mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-cell--12-col-desktop">
            <h3><i className="material-icons">chat_bubble_outline</i> Chat room</h3>
          </div>
          <div id="user-container">
            <div hidden={!this.props.isLogin} id="user-pic"></div>
            <div hidden={!this.props.isLogin} id="user-name"></div>
            <button onClick={this.logout} hidden={!this.props.isLogin} id="sign-out" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" data-upgraded=",MaterialButton,MaterialRipple">
              Sign-out
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
            <button onClick={this.login} hidden={this.props.isLogin} id="sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white" data-upgraded=",MaterialButton,MaterialRipple">
              <i className="material-icons">account_circle</i>Sign-in with Google
            <span className="mdl-button__ripple-container"><span className="mdl-ripple"></span></span></button>
          </div>
        </div>
      </header>
    )
  }
}

Header = connect(function(state){
  return {isLogin : state.isLogin, }
})(Header)

export default Header
