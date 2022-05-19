import React, { useContext, useState, useEffect } from 'react';
import Eye from "../../images/eye.svg";
import closedEye from "../../images/Closed_Eye.svg";
import './blinking-eye-btn.css';
import EyeBtnStatusContext from './eye-btn-status-context';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';

const BlinkingEyeBtn = (props) => {

    const btnStatusContext = useContext(EyeBtnStatusContext);
    const location = useLocation();
    
    const [btnImage, setBtnImage] = useState(closedEye);
    const [btnStatus, setBtnStatus] = useState(false);

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
            if(btnStatusContext.activeRoute === props.name) {
                setBtnImage(Eye);
            } else setBtnImage(closedEye);
        }
    }

    useEffect(() => {
        if (props.type === 'global') {
            btnStatusContext.changeBtnStatus(location.pathname);
        }
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
BlinkingEyeBtn.propTypes = {
    type: propTypes.string.isRequired,
    handleEvent: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
};
export default BlinkingEyeBtn;