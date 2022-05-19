import React, { useEffect } from 'react';
import './my-eye-marketing.css';
import { Outlet, Link } from "react-router-dom";
import BlinkingEyeBtn  from '../BlinkingEye/blinking-eye-btn';

export const MyEyeMarketing = (props) => {

  useEffect(() => {
    return () => {props.background(true)}
  },[]);

  return (
    <div id="myEyeMarketing">
      <div id="menuContainer">
        <Link id="navLink" to="/"><button id="navBtn"><BlinkingEyeBtn type = 'global' handleEvent = {false} id="smallBtn" name="/" text="HEM" /></button></Link>
        <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn type = 'global' handleEvent = {false} id="smallBtn" name="/browser" text="MARKNADSMATERIAL" /></button></Link>
        <Link id="navLink" to="/layout"><button id="navBtn"><BlinkingEyeBtn type = 'global' handleEvent = {false} id="smallBtn" name ="/layout" text="LAYOUT PANEL" /></button></Link>
        <div id="logoutBtnContainer">
          <Link to="/"><button onClick = {(e) => props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
        </div>    
      </div>
      <Outlet />
    </div>
  );
};