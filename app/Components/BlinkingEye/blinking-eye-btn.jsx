import React, { useContext, useState, useEffect } from 'react';
import './blinking-eye-btn.css';
import EyeBtnStatusContext from './blinking-eye-btn-context';
import { useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import Eye from './default-images/Eye.svg';
import closedEye from './default-images/Closed_Eye.svg'

/**
 * Generates a button that switch two images.
 * Use alone, inside a button or React Router Link.
 * @param {string} type - region where button sholuld work: global/local/local-scope 
 * @param {bool} handleEvent - if you would use onClick event
 * @param {string} id - size of the button: smallBtn/mediumBtn
 * @param {string} name - name of the button element,
 * @param {string} text - text that is displayed on the button together with the image,
 * @param {string} imageActivated - image that shows when activated
 * @param {string} imageDeactivated - image that shows when deactivated
 * @param {bool} setStatus - sets the default status: true/false(default)
 * @param {func} onClick - function you wold like to execute at onClick
 * @example
 * <BlinkingEyeBtn type = 'local' handleEvent = {true} id="mediumBtn" name="colors" text = 'FÄRGER' onClick = {this.handleClick} setStatus={false}/>
 */
const BlinkingEyeBtn = (props) => {

    const btnStatusContext = useContext(EyeBtnStatusContext);
    const location = useLocation();
    
    const [btnImage, setBtnImage] = useState(props.imageDeactivated);
    const [btnStatus, setBtnStatus] = useState(props.setStatus);

    // Setting image when props.type='local'
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
    // Changing image depending on props.type
    const checkBtnStatus = () => {
        if(props.type === 'local' || props.type === 'local-scope') {
            if(btnStatus === false) {
                setBtnImage(props.imageDeactivated);
            } else setBtnImage(props.imageActivated);
        }
        if (props.type === 'global') {
            if(btnStatusContext.activeRoute === props.name) {
                setBtnImage(props.imageActivated);
            } else setBtnImage(props.imageDeactivated);
        }
    }
    
    useEffect(() => {
        // Sets btnStatusContext.activeRoute to current location
        if (props.type === 'global') {
            btnStatusContext.changeBtnStatus(location.pathname);
        }
        // Change button status when type='local-scope'
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
    setStatus: false
}
BlinkingEyeBtn.propTypes = {
    type: propTypes.string.isRequired,
    handleEvent: propTypes.bool.isRequired,
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    text: propTypes.string.isRequired,
    imageActivated: propTypes.string,
    imageDeactivated: propTypes.string,
    setStatus: propTypes.bool,
    onClick: propTypes.func

};
export default BlinkingEyeBtn;