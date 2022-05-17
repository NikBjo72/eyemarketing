import React, { useContext, useState, useEffect } from 'react';
import Eye from "../../images/eye.svg";
import closedEye from "../../images/Closed_Eye.svg";
import './blinking-eye-btn.css';
import EyeBtnStatusContext from './eye-btn-status-context';

export const BlinkingEyeBtn = (props) => {

    const [btnImage, setBtnImage] = useState();

    const btnStatusContext = useContext(EyeBtnStatusContext);

    const checkBtnStatus = () => {

        if(props.btnStatus === "on") {
            setBtnImage(Eye);
        } else {
            setBtnImage(closedEye);
        }
    }

    useEffect(() => {
        checkBtnStatus();
    }, []);

    return (
        <li id={`li${props.id}`}
            onClick = {(e) => props.onClick(props.name, props.btnStatus)}>
            <img id={props.id}
                src = {btnImage}
            />
            {props.text}
        </li>
    );
}