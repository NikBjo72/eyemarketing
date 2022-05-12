import React from 'react';
import Eye from "../images/eye.svg";
import closedEye from "../images/Closed_Eye.svg";
import './blinking-eye-btn.css';

export class BlinkingEyeBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnImage: "",
        }
    }

    componentDidMount() {
        this.checkBtnStatus();
    }

    checkBtnStatus = () => {
        if(this.props.btnStatus === "on") {
            this.setState({btnImage: Eye});
        } else {
            this.setState({btnImage: closedEye});
        }
    }

    render() {
        return (
            <li id={`li${this.props.id}`}
                onClick = {(e) => this.props.onClick(this.props.name, this.props.btnStatus)}>
                <img id={this.props.id}
                    src = {this.state.btnImage}    
                />
                {this.props.text}
            </li>
        );
    }
}