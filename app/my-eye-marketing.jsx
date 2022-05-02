import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { BlinkingEyeBtn } from './Components/blinking-eye-btn';

export class MyEyeMarketing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeButton: "HOME"
    }
  }

  componentWillUnmount(){
    console.log('logoutComponentWillOnmount');
    this.props.background(true);
  }

  handleClick = (btnName, btnState) => {
    if(btnState == "off" && btnName != this.state.activeButton) {
      this.setState({activeButton: btnName}, () => {
        console.log(`handleClick ${this.state.activeButton}`);
        });
    }
    else if (btnState == "on" && btnName != this.state.activeButton){
      this.setState({activeButton: ""}, () => {
        console.log(`handleClick ${this.state.activeButton}`);
        });
    }
  }

  render() {
    console.log('my-eye-marketing - Render');
    console.log(this.state.activeButton);
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link id="navLink" to="/"><button id="navBtn"><BlinkingEyeBtn key = {`Home ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "HOME" ? "on" : "off" } id="smallBtn" name="HOME" text="HOME" onClick = {this.handleClick}/></button></Link>
          <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn key = {`Browser ${this.state.activeButton}`} btnStatus = { this.state.activeButton == "BROWSER" ? "on" : "off" } id="smallBtn" name="BROWSER" text="BROWSER" onClick = {this.handleClick}/></button></Link>

          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};