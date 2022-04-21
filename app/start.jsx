import React from 'react';
import background from "./images/eye.svg";
import { Login } from './login';
import { Logout } from './logout'

export class Start extends React.Component {

  constructor(props) {
    super(props)
    const storedState = localStorage.getItem("state")
    this.state = JSON.parse(storedState);
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

  render() {
    return (
      <div id="start" style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '75vw',
      }}>
        {!this.state.isLoggedIn
          ?
          <Login email = {'1'} password = {'1'} onClick = {this.handleClick}/>
          :
          <Logout onClick = {this.handleClick}/>}
      </div>
    );
  } 
};