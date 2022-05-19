import React, { useState, useEffect, useRef } from 'react';
import BackgroundStatusContext from './background-status-context';

const BackgroundProvider = (props) => {

    const [background, setBackground] = useState(true);

    const changeBackgroundStatus = (bool) => {
        setBackground(bool);
    }

    return (
     <BackgroundStatusContext.Provider value={{ background: background, changeBackgroundStatus: changeBackgroundStatus }}>
         {props.children}
     </BackgroundStatusContext.Provider>
    );
}
export default BackgroundProvider;