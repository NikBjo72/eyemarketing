import React, { useState, useEffect, useRef,  } from 'react';
import './collapsable-fieldset.css';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn';
import propTypes from 'prop-types';

export const CollapsableFieldset = (props) => {

    const [collapse, setCollapse] = useState(false);

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
                    <BlinkingEyeBtn type = 'local' handleEvent = {false} id="smallBtn" name="collapse" text={props.legend}/>
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
CollapsableFieldset.propTypes = {
    legend: propTypes.string,
    className: propTypes.string,
    classNameLegend: propTypes.string
};
export default CollapsableFieldset