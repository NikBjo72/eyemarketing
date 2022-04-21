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
      this.setState({isLoggedIn: true}, () => {
        this.saveIsLoggedIn();
        console.log('Inloggad')});
    } else {
      this.setState({isLoggedIn: false}, () => {
        this.saveIsLoggedIn();
        console.log('Fel användarnamn eller lösenord')
      });
    }
  }

  saveIsLoggedIn = () => {
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  removeBackgroundAtLogin = (bool) => {
    this.setState({background: bool}, () => {
      console.log('no background')
    });
  }

  render() {
    return (
      <div id="start">
        {!this.state.isLoggedIn
          ?
          <Login background = {this.removeBackgroundAtLogin} email = {'1'} password = {'1'} onClick = {this.handleClick}/>
          :
          <Logout background = {this.removeBackgroundAtLogin} onClick = {this.handleClick}/>
        }
          <Footer />

          {this.state.background ? <Background /> : null}
          
      </div>
    );
  } 
};