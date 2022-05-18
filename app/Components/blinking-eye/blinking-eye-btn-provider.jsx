import React, { useState, useEffect, useRef } from 'react';
import EyeBtnStatusContext from './eye-btn-status-context';

export const BlinkingEyeProvider = (props) => {

    const [activeRoute, setActiveRoute] = useState('');

    const changeBtnStatus = (route) => {
        setActiveRoute(route);
    }

    return (
     <EyeBtnStatusContext.Provider value={{ activeRoute: activeRoute, changeBtnStatus: changeBtnStatus }}>
         {props.children}
     </EyeBtnStatusContext.Provider>
    );
}