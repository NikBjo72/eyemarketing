import React from 'react';
import Eye from "./images/eye.svg";
import closedEye from "./images/Closed_Eye.svg";
import closedEyeGreen from "./images/Closed_Eye_green.svg";

export class BlinkingEyeBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnImage: closedEye,
            btnState: '',
            btnName: this.props.text
        }

    }

    handleEvent = (e) => {
        // //debugger
        // if (e.type === 'mouseenter' && this.state.btnImage != Eye) {
        //     this.setState({btnImage: closedEyeGreen}, () => 
        //     console.log('mouseenter'))
        //     return
        // }
        // //debugger
        // if (e.type === 'mouseleave' && this.state.btnImage != Eye) {
        //     this.setState({btnImage: closedEye}, () => 
        //     console.log('mouseleave'))
        //     return
        // }
        //debugger
        if (e.type === 'mousedown') {

            if (this.state.btnImage === Eye) {
                this.setState({btnImage: closedEye, btnState: 'disabled'}, () => 
                console.log(this.state.btnState))
            } else {
                var newState = {btnImage: Eye, btnState: 'active'};
                this.setState({btnImage: Eye, btnState: 'active'}, () => 
                console.log(this.state.btnState))
            }

        }
    }

    render() {
        //console.log(this.state.btnImage);
        return (
                <li>
                    <img id="eyeBtn"
                        src = {this.state.btnImage}
                        //onMouseEnter={ this.handleEvent }
                        //onMouseLeave={ this.handleEvent }
                        onMouseDown={ this.handleEvent }
                        onClick = {(e) => this.props.onClick(this.state.btnName, this.state.btnState)}
                    />
                    {this.props.text}
                </li>
        );
    }
}