import React from 'react';
import './my-eye-marketing.css';
import { Outlet, Link } from "react-router-dom";
import { BlinkingEyeBtn } from '../Components/blinking-eye/blinking-eye-btn';

export class MyEyeMarketing extends React.Component {

  constructor(props) {
    super(props);
    const storedState = localStorage.getItem("myEyeMarketingState")
    if(storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        //activeButton: "home"
      }
    }
  }

  updateState = (newState) => {
    this.setState(newState, () => 
    localStorage.setItem('myEyeMarketingState', JSON.stringify(this.state))
    );
  }

  componentWillUnmount(){
    console.log('logoutComponentWillOnmount');
    this.props.background(true);
  }

  // handleClick = (btnName, btnState) => {
  //   if(btnState == "off" && btnName != this.state.activeButton) {
  //     this.updateState({activeButton: btnName});
  //   }
  //   else if (btnState == "on" && btnName != this.state.activeButton){
  //     this.updateState({activeButton: "home"});
  //   }
  // }

  render() {
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link id="navLink" to="/"><button id="navBtn"><BlinkingEyeBtn key = {`Home ${this.state.activeButton}`} type = 'global' id="smallBtn" name="home" text="HEM" /></button></Link>
          <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn key = {`Browser ${this.state.activeButton}`} type = 'global' id="smallBtn" name="browser" text="MARKNADSMATERIAL" /></button></Link>
          <Link id="navLink" to="/layout"><button id="navBtn"><BlinkingEyeBtn key = {`Layout ${this.state.activeButton}`} type = 'global' id="smallBtn" name ="layoutPanel" text="LAYOUT PANEL" /></button></Link>

          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};