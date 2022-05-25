import React, { useContext, useState, useEffect } from 'react';
import './blinking-eye-btn.css';
import EyeBtnStatusContext from './blinking-eye-btn-context';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Eye from './default-images/Eye.svg';
import closedEye from './default-images/Closed_Eye.svg'

/**
 * Generates a button that switch two images
 * @param {string} imageActivated - imported image that shows when activated.
 */
const BlinkingEyeBtn = (props) => {

    const btnStatusContext = useContext(EyeBtnStatusContext);
    const location = useLocation();
    
    const [btnImage, setBtnImage] = useState(props.imageDeactivated);
    const [btnStatus, setBtnStatus] = useState(false);

    const handleEvent = () => {
        if (props.type === 'local') {
            if(btnStatus === false) {
                setBtnImage(props.imageActivated);
                setBtnStatus(true);
            } else {
                setBtnImage(props.imageDeactivated);
                setBtnStatus(false);
            }
        }
    }
    
    const checkBtnStatus = () => {
        // Changing image depending on local status
        if(props.type === 'local' || props.type === 'local-scope') {
            if(btnStatus === false) {
                setBtnImage(props.imageDeactivated);
            } else setBtnImage(props.imageActivated);
        }
        // Changing image depending on global status
        if (props.type === 'global') {
            if(btnStatusContext.activeRoute === props.name) {
                setBtnImage(props.imageActivated);
            } else setBtnImage(props.imageDeactivated);
        }
    }

    useEffect(() => {
        if (props.type === 'global') {
            btnStatusContext.changeBtnStatus(location.pathname);
        }
        if(props.type === 'local-scope') {
            setBtnStatus(props.setStatus);
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
BlinkingEyeBtn.defaultProps = {
    imageActivated: Eye,
    imageDeactivated: closedEye,
}
BlinkingEyeBtn.propTypes = {
    type: propTypes.string.isRequired,
    handleEvent: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    imageActivated: propTypes.string,
    imageDeactivated: propTypes.string

};
export default BlinkingEyeBtn;