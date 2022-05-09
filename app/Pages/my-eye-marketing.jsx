import React from 'react';
import './my-eye-marketing.css';
import { Outlet, Link } from "react-router-dom";
import { BlinkingEyeBtn } from '../Components/blinking-eye-btn';

export class MyEyeMarketing extends React.Component {

  constructor(props) {
    super(props);
    const storedState = localStorage.getItem("myEyeMarketingState")
    if(storedState) {
      this.state = JSON.parse(storedState);
    } else {
      this.state = {
        activeButton: "home"
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

  handleClick = (btnName, btnState) => {
    if(btnState == "off" && btnName != this.state.activeButton) {
      this.updateState({activeButton: btnName});
    }
    else if (btnState == "on" && btnName != this.state.activeButton){
      this.updateState({activeButton: "home"});
    }
  }

  render() {
    //console.log('my-eye-marketing - Render');
    //console.log(this.state.activeButton);
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link id="navLink" to="/"><button id="navBtn"><BlinkingEyeBtn key = {`Home ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "home" ? "on" : "off" } id="smallBtn" name="home" text="HEM" onClick = {this.handleClick}/></button></Link>
          <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn key = {`Browser ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "browser" ? "on" : "off" } id="smallBtn" name="browser" text="MARKNADSMATERIAL" onClick = {this.handleClick}/></button></Link>
          <Link id="navLink" to="/layout"><button id="navBtn"><BlinkingEyeBtn key = {`Layout ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "layoutPanel" ? "on" : "off" } id="smallBtn" name ="layoutPanel" text="LAYOUT PANEL" onClick = {this.handleClick}/></button></Link>

          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};