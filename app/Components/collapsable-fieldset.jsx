import React, { useState, useEffect, useRef,  } from 'react';
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
         <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">
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
    legend: propTypes.string
};
export default CollapsableFieldset