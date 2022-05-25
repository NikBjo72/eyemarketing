import React, { useState, createContext } from 'react';

const EyeBtnStatusContext = createContext();
/**Context provider
 * Wrap component tree that you would lik to use BlinkingEye button.
 * You only need to use context if you use button type="global".
 * @example
 * <BlinkingEyeProvider> <Routes>...</Routes> </BlinkingEyeProvider>
*/
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