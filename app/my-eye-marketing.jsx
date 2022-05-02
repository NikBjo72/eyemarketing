import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { BlinkingEyeBtn } from './Components/blinking-eye-btn';

export class MyEyeMarketing extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentWillUnmount(){
    console.log('logoutComponentWillOnmount');
    this.props.background(true);
  }

  handleClick = (btnName, btnState) => {

  }

  render() {
    console.log('logoutRender');
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn id="smallBtn" text="BROWSER" onClick = {this.handleClick}/></button></Link>

          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};