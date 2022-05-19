import React from 'react';
import './background.css';
import backgroundImage from "../../images/eye.svg";

export class Background extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="background"
                style={{ 
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '75vw',
              }}>
            </div>
        );
    }
}