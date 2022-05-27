import React, { useState, useEffect, useContext,  createContext } from 'react';
import GetMyModelData from '../../Model/get-my-model-data';
import urls from '../../Model/fetch-url';

const LayoutDatabaseContext = createContext();

export const LayoutDatabaseContextProvider = (props) => {

    const [update, setUpdate] = useState(); 
    const [layoutDatabase, setLayoutDatabase] = useState(
        [
            {
              "id": "canvas",
              "type": "canvas",
              "width": 500,
              "height": 500
            }
        ]
    );
    const [layoutNames, setLayoutNames] = useState([]);
    const [loading, setLoading] = useState(true);
	const [err, setErr] = useState();

    useEffect(async () => {
        const [data, err] = await GetMyModelData(urls.savedLayouts)

        if(data) {
            setLayoutDatabase(data);
            let layoutNames = data.map(object => {
                return (object.name)
            });
            setLayoutNames(layoutNames)
        }

        setLoading(false);
        setErr(err);
        
    },[update]);

    const updateDatabase = () => {
        if(update === false) {
            setUpdate(true);
        } else setUpdate(false)
    }

    return (
     <LayoutDatabaseContext.Provider value={{ layoutDatabase: layoutDatabase, layoutNames: layoutNames, updateDatabase: updateDatabase, loading: loading, err: err, setErr: setErr }}>
         {props.children}
     </LayoutDatabaseContext.Provider>
    );
}

export default useDatabase = () => useContext(LayoutDatabaseContext);