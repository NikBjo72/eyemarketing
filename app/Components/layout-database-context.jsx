import React, { useState, useEffect, useContext,  createContext } from 'react';
import GetMyModelData from '../Model/get-my-model-data';
import urls from '../Model/fetch-url';

const LayoutDatabaseContext = createContext();

export const LayoutDatabaseContextProvider = (props) => {

    const [update, setUpdate] = useState(); 
    const [layoutDatabase, setLayoutDatabase] = useState();
    const [layoutNames, setLayoutNames] = useState();
    const [loading, setLoading] = useState(true);
	const [err, setErr] = useState([]);

    useEffect(async () => {
        const [data, err] = await GetMyModelData(urls.savedLayouts)
        setLayoutDatabase(data);
        setLoading(false);
        setErr(err);
        
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
     <LayoutDatabaseContext.Provider value={{ layoutDatabase: layoutDatabase, layoutNames: layoutNames, updateDatabase: updateDatabase, loading: loading, err: err }}>
         {props.children}
     </LayoutDatabaseContext.Provider>
    );
}
//
export default useDatabase = () => useContext(LayoutDatabaseContext);