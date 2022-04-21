import React from 'react';
import background from "./images/eye.svg";
import { Login } from './login';

export class Start extends React.Component {

  render() {
    return (
      <div id="start" style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '75vw',
      }}>
        <Login />
        {/* <Logout /> */}
      </div>
    );
  } 
};