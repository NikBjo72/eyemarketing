import React, { useContext, useState, useEffect } from 'react';
import './my-eye-marketing.css';
import { Outlet, Link } from "react-router-dom";
import BlinkingEyeBtn  from '../BlinkingEye/blinking-eye-btn';
import BackgroundStatusContext from '../Background/background-status-context';
import Eye from "../../images/eye.svg";
import closedEye from "../../images/Closed_Eye.svg";
import {url} from '../../Helpers/images';

const MyEyeMarketing = (props) => {
  const backgroundCtx = useContext(BackgroundStatusContext);

  useEffect(() => {
    return () => {backgroundCtx.changeBackgroundStatus(true)};
  },[]);

  useEffect(() => {
    backgroundCtx.changeBackgroundStatus(false);
  },[]);

  return (
    <div id="myEyeMarketing">
      <div id="menuContainer">
        <img id="headerLogo" src = {url.logo1} />
        <Link id="navLink" to="/home"><button id="navBtn"><BlinkingEyeBtn imageActivated = {Eye} imageDeactivated = {closedEye} type = 'global' handleEvent = {false} id="smallBtn" name="/home" text="HEM" /></button></Link>
        <Link id="navLink" to="/browser"><button id="navBtn"><BlinkingEyeBtn imageActivated = {Eye} imageDeactivated = {closedEye} type = 'global' handleEvent = {false} id="smallBtn" name="/browser" text="MARKNADSMATERIAL" /></button></Link>
        <Link id="navLink" to="/layout"><button id="navBtn"><BlinkingEyeBtn imageActivated = {Eye} imageDeactivated = {closedEye} type = 'global' handleEvent = {false} id="smallBtn" name ="/layout" text="LAYOUT PANEL" /></button></Link>
        <div id="logoutBtnContainer">
          <Link to="/"><button onClick = {(e) => props.onClick(false)} id="logoutBtn">Logga ut</button></Link>
        </div>    
      </div>
      <Outlet />
    </div>
  );
};
export default MyEyeMarketing;