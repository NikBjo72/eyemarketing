import React, { useState, useEffect, useRef,  createContext } from 'react';

const ChangeLayoutItemContext = createContext();

export const ChangeLayoutItemContextProvider = (props) => {

    const [itemObject, setItemObject] = useState();

    return (
     <ChangeLayoutItemContext.Provider value={{ setItemObject: setItemObject, itemObject: itemObject}}>
         {props.children}
     </ChangeLayoutItemContext.Provider>
    );
}
export default ChangeLayoutItemContext;