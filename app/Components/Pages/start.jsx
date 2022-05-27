import React from 'react';
import './start.css';
import { Background } from '../Background/background';
import Login from '../login';
import MyEyeMarketing from './my-eye-marketing'
import { Footer } from '../footer';
import ComponentsErrorBoundary from '../ErrorHandeling/components-error-boundary';
import BackgroundStatusContext from '../Background/background-status-context';

export class Start extends React.Component {

  constructor(props) {
    super(props)
    const storedState = localStorage.getItem("startState")
    if(storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        isLoggedIn: false
      }
    }
  }

  handleClick = (loggedIn) => {
    if (loggedIn) {
        this.updateState({isLoggedIn: true});
    } else {
        this.updateState({isLoggedIn: false});
    }
  }

  updateState = (newState) => {
    this.setState(newState, () => 
    localStorage.setItem('startState', JSON.stringify(this.state))
    );
  }

  clearLocalStorage = () => {
    localStorage.clear();
  }

  render() {
    return (
      <ComponentsErrorBoundary>
        <div id="start">
            {!this.state.isLoggedIn
              ?
              <Login clearLoSt = {this.clearLocalStorage} email = {'1'} password = {'1'} onClick = {this.handleClick}/>
              :
              <MyEyeMarketing onClick = {this.handleClick}/>
            }
            <Footer />
            {this.context.background ? <Background /> : null}  
        </div>
      </ComponentsErrorBoundary>
    );
  } 
};
Start.contextType = BackgroundStatusContext;