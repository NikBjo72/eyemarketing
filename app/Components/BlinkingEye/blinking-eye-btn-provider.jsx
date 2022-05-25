import React, { useState, createContext } from 'react';

const EyeBtnStatusContext = createContext();

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
export default EyeBtnStatusContext;