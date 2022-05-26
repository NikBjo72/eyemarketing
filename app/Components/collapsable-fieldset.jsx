import React, { useState, useEffect, useRef,  } from 'react';
import './collapsable-fieldset.css';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn';
import propTypes from 'prop-types';

/**
 * Collapse its children
 * @param {string} legend - name that displayes at the top of the <fieldset>.
 * @param {string} className - className for <fieldset>.
 * @param {string} classNameLegend - className for legend.
 * @param {bool} activated - control if it should be true or false(collapsed) as default.
 * @example
 * <CollapsableFieldset legend='Storlek layout' className='panelFieldset'classNameLegend='text-white'>
 */
export const CollapsableFieldset = (props) => {

    const [collapse, setCollapse] = useState(props.activated);
    // Toggle collapse when clicked
    const onClickHandler = () => {
        if(collapse === true) {
            setCollapse(false)
        } else {
            setCollapse(true)
        }
    }

    return (
         <fieldset className={props.className}>
            <legend className={props.classNameLegend}>
                <a onClick={ onClickHandler }>
                    <BlinkingEyeBtn type = 'local' handleEvent = {false} id="smallBtn" name="collapse" text={props.legend} setStatus= {props.activated}/>
                </a>
            </legend>
            {collapse
            ? 
            <>{props.children}</>
            :
            null
            }
         </fieldset>
    );
}
CollapsableFieldset.defaultProps = {
    activated: false
}
CollapsableFieldset.propTypes = {
    legend: propTypes.string.isRequired,
    className: propTypes.string,
    classNameLegend: propTypes.string,
    activated: propTypes.bool
};
export default CollapsableFieldset