import React from 'react';
import './start.css';
import { Background } from '../background';
import Login from '../login';
import { MyEyeMarketing } from './my-eye-marketing'
import { Footer } from '../footer';
import ErrorBoundary from '../ErrorHandeling/error-boundary';

export class Start extends React.Component {

  constructor(props) {
    console.log('construktor');
    super(props)
    const storedState = localStorage.getItem("startState")
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
    console.log('handleClick');
    if (loggedIn) {
        this.updateState({isLoggedIn: true});
        console.log('Inloggad');
    } else {
        this.updateState({isLoggedIn: false});
    }

  }

  updateState = (newState) => {
    console.log('updateState');
    this.setState(newState, () => 
    localStorage.setItem('startState', JSON.stringify(this.state))
    );
  }

  updateBackground = (bool) => {
    console.log('updateBackground');
    this.updateState({background: bool});
    console.log('no background');
  }

  clearLocalStorage = () => {
    console.log('clearLocalStorage');
    localStorage.clear();
    console.log('empty LS');
  }

  render() {
    console.log('Render');
    return (
      <div id="start">
        <ErrorBoundary>

          {!this.state.isLoggedIn
            ?
            <Login clearLoSt = {this.clearLocalStorage} background = {this.updateBackground} email = {'1'} password = {'1'} onClick = {this.handleClick}/>
            :
            <MyEyeMarketing background = {this.updateBackground} onClick = {this.handleClick}/>
          }
          <Footer />
          {this.state.background ? <Background /> : null}

        </ErrorBoundary>   
      </div>
    );
  } 
};