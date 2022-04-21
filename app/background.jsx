import React from 'react';
import background from "./images/eye.svg";
import { Login } from './login';

export class Background extends React.Component {

  render() {
    return (
      <div style={{ 
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: '75vw',
        marginTop: '14vh',
        width: '100vw',
        height: '100vw'
      }}>
        <div>
          <Login />
        </div>
      </div>
      
    );
  }

};