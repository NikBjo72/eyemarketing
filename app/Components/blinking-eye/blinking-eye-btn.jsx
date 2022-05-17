import React, { useContext, useState, useEffect } from 'react';
import Eye from "../../images/eye.svg";
import closedEye from "../../images/Closed_Eye.svg";
import './blinking-eye-btn.css';
import EyeBtnStatusContext from './eye-btn-status-context';

export const BlinkingEyeBtn = (props) => {

    const [btnImage, setBtnImage] = useState(closedEye);
    const [btnStatus, setBtnStatus] = useState(false);

    const btnStatusContext = useContext(EyeBtnStatusContext);


    const handleEvent = () => {

        if (props.type === 'local') {

            if(btnStatus === false) {
                setBtnImage(Eye);
                setBtnStatus(true);
            } else {
                setBtnImage(closedEye);
                setBtnStatus(false);
            }
        }
        else if (props.type === 'global') {
            btnStatusContext.changeBtnStatus(props.name);
        }
    }
    
    const checkBtnStatus = () => {
        // Changing image depending on local status
        if(props.type === 'local') {
            if(btnStatus === false) {
                setBtnImage(closedEye);
            } else setBtnImage(Eye);
        }
        // Changing image depending on global status
        if (props.type === 'global') {
            if(btnStatusContext.btnName === props.name) {
                setBtnImage(Eye);
            } else setBtnImage(closedEye);
        }
    }

    useEffect(() => {
        checkBtnStatus();
    });

    return (
        <li id={`li${props.id}`}
            onClick = {props.handleEvent ? (e) => props.onClick(props.name, btnStatus) : undefined}
            onMouseDown={ handleEvent }>
            <img id={props.id}
                src = {btnImage}
            />
            {props.text}
        </li>
    );
}