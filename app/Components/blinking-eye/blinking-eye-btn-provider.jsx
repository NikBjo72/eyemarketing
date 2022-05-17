import React from 'react';
import { useState, useEffect, useRef,  } from 'react-dom';
import EyeBtnStatusContext from './eye-btn-status-context';

export const BlinkingEyeProvider = (props) => {

    const [btnName, setBtnName] = useState('');

    const changeBtnStatus = () => {
        setBtnName(props.btnName);
    }

    return (
     <EyeBtnStatusContext.Provider value={{ btnName: btnName, changeBtnStatus: changeBtnStatus }}>
         {props.children}
     </EyeBtnStatusContext.Provider>
    );
}