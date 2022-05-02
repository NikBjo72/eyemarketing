import React from 'react';
import Eye from "../images/eye.svg";
import closedEye from "../images/Closed_Eye.svg";
import './blinking-eye-btn.css';

export class BlinkingEyeBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnImage: closedEye,
            btnState: '',
            btnName: this.props.text,
            btnID: this.props.id
        }

    }

    handleEvent = (e) => {

        if (e.type === 'mousedown') {

            if (this.state.btnImage === Eye) {
                this.setState({btnImage: closedEye, btnState: 'disabled'});
            } else {
                this.setState({btnImage: Eye, btnState: 'active'});
            }
        }
    }

    render() {
        return (
                <li id={`li${this.props.id}`}
                    onMouseDown={ this.handleEvent }
                    onClick = {(e) => this.props.onClick(this.state.btnName, this.state.btnState)}>

                    <img id={this.props.id}
                        src = {this.state.btnImage}    
                    />
                    {this.props.text}
                </li>
        );
    }
}