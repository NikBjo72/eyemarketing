import React, { useState, useEffect, useRef,  } from 'react';
import EyeBtnStatusContext from './eye-btn-status-context';

export const BlinkingEyeProvider = (props) => {

    const [btnName, setBtnName] = useState('');

    const changeBtnStatus = (name) => {
        setBtnName(name);
    }

    return (
     <EyeBtnStatusContext.Provider value={{ btnName: btnName, changeBtnStatus: changeBtnStatus }}>
         {props.children}
     </EyeBtnStatusContext.Provider>
    );
}