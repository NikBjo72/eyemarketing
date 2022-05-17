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
        if(btnStatus === false) {
            setBtnImage(Eye);
            setBtnStatus(true);
        } else {
            setBtnImage(closedEye);
            setBtnStatus(false);
        }
    }
    
    const checkBtnStatus = () => {

        if(props.type === 'local') {
            if(btnStatus === false) {
                setBtnImage(closedEye);
            } else setBtnImage(Eye);
        }
        
        if (props.type === 'global') {
            if(btnStatusContext.btnName === props.name) {
                setBtnImage(Eye);
            } else setBtnImage(closedEye);
        }
    }

    useEffect(() => {
        checkBtnStatus();
    },[btnImage]);

    return (
        <li id={`li${props.id}`}
            onClick = {(e) => props.onClick(props.name, btnStatus)}
            onMouseDown={ handleEvent }>
            <img id={props.id}
                src = {btnImage}
            />
            {props.text}
        </li>
    );
}