import React, { useState, useEffect, useRef,  createContext } from 'react';
import GetMyModelData from '..//Model/get-my-model-data';
import urls from '../Model/fetch-url';

const LayoutDatabaseContext = createContext();

export const LayoutDatabaseContextProvider = (props) => {

    const [update, setUpdate] = useState(); 
    const [layoutDatabase, setLayoutDatabase] = useState();
    const [layoutNames, setLayoutNames] = useState();

    useEffect(async () => {
        let data = await GetMyModelData(urls.savedLayouts)
        setLayoutDatabase(data);
        let layoutNames = data.map(object => {
            return (object.name)
        });
        setLayoutNames(layoutNames)
    },[update]);

    const updateDatabase = () => {
        if(update === false) {
            setUpdate(true);
        } else setUpdate(false)
    }

    return (
     <LayoutDatabaseContext.Provider value={{ layoutDatabase: layoutDatabase, layoutNames: layoutNames, updateDatabase: updateDatabase }}>
         {props.children}
     </LayoutDatabaseContext.Provider>
    );
}
export default LayoutDatabaseContext;