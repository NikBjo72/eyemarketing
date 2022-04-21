import React from 'react';
import backgroundImage from "../images/eye.svg";
import { Background } from '../background';
import { Login } from '../login';
import { Logout } from '../logout'
import { Footer } from '../footer';

export class Start extends React.Component {

  constructor(props) {
    super(props)
    const storedState = localStorage.getItem("state")
    if(storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        isLoggedIn: false,
        background: true
      }
    }
  }

  handleClick = (loggedIn) => {
    if (loggedIn) {
        this.updateState({isLoggedIn: true});
        console.log('Inloggad');
    } else {
        this.updateState({isLoggedIn: false});
        console.log('Fel användarnamn eller lösenord');
    }
  }

  updateState = (newState) => {
    this.setState(newState, () => 
    localStorage.setItem('state', JSON.stringify(this.state))
    );
  }

  updateBackground = (bool) => {
    this.updateState({background: bool});
    console.log('no background');
  }

  render() {
    return (
      <div id="start">
        {!this.state.isLoggedIn
          ?
          <Login background = {this.updateBackground} email = {'1'} password = {'1'} onClick = {this.handleClick}/>
          :
          <Logout background = {this.updateBackground} onClick = {this.handleClick}/>
        }
          <Footer />

          {this.state.background ? <Background /> : null}
          
      </div>
    );
  } 
};