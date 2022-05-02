import React from 'react';
import Eye from "../images/eye.svg";
import closedEye from "../images/Closed_Eye.svg";
import './blinking-eye-btn.css';

export class BlinkingEyeBtn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btnImage: "",
            btnStatus: this.props.btnStatus,
            btnName: this.props.text,
            btnID: this.props.id
        }
        console.log(this.state.btnStatus);
    }

    componentDidMount() {
        this.checkBtnStatus();
        console.log(this.props.btnStatus);
    }

    checkBtnStatus = () => {
        if(this.state.btnStatus === "on") {
            this.setState({btnImage: Eye});
        } else {
            this.setState({btnImage: closedEye});
        }
    }

    handleEvent = (e) => {

        if (e.type === 'mousedown') {

            if (this.state.btnImage === Eye) {
                this.setState({btnImage: closedEye, btnStatus: 'off'});
            } else {
                this.setState({btnImage: Eye, btnStatus: 'on'});
            }
        }
    }

    render() {
        return (
                <li id={`li${this.props.id}`}
                    //onMouseDown={ this.handleEvent }
                    onClick = {(e) => this.props.onClick(this.state.btnName, this.state.btnStatus)}>

                    <img id={this.props.id}
                        src = {this.state.btnImage}    
                    />
                    {this.props.text}
                </li>
        );
    }
}