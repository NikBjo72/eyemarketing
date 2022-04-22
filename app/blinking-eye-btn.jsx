import React from 'react';
import Eye from "./images/eye.svg";
import closedEye from "./images/Closed_Eye.svg";
import closedEyeGreen from "./images/Closed_Eye_green.svg";

export class BlinkingEyeBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnImage: closedEye,
            btnState: ''
        }

    }

    handleEvent = (e) => {
        if (e.type === 'mouseenter' && this.state.btnImage != Eye) {
            this.setState({btnImage: closedEyeGreen, btmState: 'mouseenter'}, () => 
            console.log('mouseenter'))
        }
        if (e.type === 'mouseleave' && this.state.btnImage != Eye) {
            this.setState({btnImage: closedEye, btmState: 'mouseleave'}, () => 
            console.log('mouseleave'))
        }
        if (e.type === 'mousedown') {
            this.setState({btnImage: Eye, btmState: 'mousedown'}, () => 
            console.log('mousedown'))
        }
        if (e.type === 'mousedown' && this.state.btnImage == Eye) {
            this.setState({btnImage: closedEye, btmState: 'mousedown'}, () => 
            console.log('mousedown'))
        }
    }

    render() {
        //console.log(this.state.btnImage);
        return (
                <li>
                    <img id="eyeBtn"
                        src = {this.state.btnImage}
                        onMouseEnter={ this.handleEvent }
                        onMouseLeave={ this.handleEvent }
                        onMouseDown={ this.handleEvent }
                    />
                    {this.props.text}
                </li>
        );
    }
}