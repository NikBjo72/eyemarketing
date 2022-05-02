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
                <li>
                    <img id="eyeBtn"
                        src = {this.state.btnImage}
                        onMouseDown={ this.handleEvent }
                        onClick = {(e) => this.props.onClick(this.state.btnName, this.state.btnState)}
                    />
                    {this.props.text}
                </li>
        );
    }
}