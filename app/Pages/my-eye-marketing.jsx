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
        activeButton: "HOME"
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
      this.updateState({activeButton: "HOME"});
    }
  }

  render() {
    //console.log('my-eye-marketing - Render');
    //console.log(this.state.activeButton);
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link id="navLink" to="/"><button id="navBtn"><BlinkingEyeBtn key = {`Home ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "HOME" ? "on" : "off" } id="smallBtn" name="HOME" text="HOME" onClick = {this.handleClick}/></button></Link>
          <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn key = {`Browser ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "BROWSER" ? "on" : "off" } id="smallBtn" name="BROWSER" text="BROWSER" onClick = {this.handleClick}/></button></Link>
          <Link id="navLink" to="/layout"><button id="navBtn"><BlinkingEyeBtn key = {`Layout ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "LAYOUT PANEL" ? "on" : "off" } id="smallBtn" text="LAYOUT PANEL" onClick = {this.handleClick}/></button></Link>

          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};