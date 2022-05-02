import React from 'react';
import { Outlet, Link } from "react-router-dom";

export class MyEyeMarketing extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentWillUnmount(){
    console.log('logoutComponentWillOnmount');
    this.props.background(true);
  }

  render() {
    console.log('logoutRender');
    return (
      <div id="myEyeMarketing">
        <div id="menuContainer">
          <Link to="/browser"><button id="navBtn">Browser</button></Link>
          <Link to="/browser"><button id="navBtn">Browser</button></Link>
          <Link to="/browser"><button id="navBtn">Browser</button></Link>
          <Link to="/browser"><button id="navBtn">Browser</button></Link>
          <Link to="/browser"><button id="navBtn">Browser</button></Link>
          <div id="logoutBtnContainer">
            <Link to="/"><button onClick = {(e) => this.props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
          </div>    
        </div>
        <Outlet />
      </div>
    );
  }

};