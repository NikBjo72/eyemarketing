import React, { useState, useEffect } from 'react';
import GetMyModelData from '../../Model/get-my-model-data';
import urls from '../../Model/fetch-url';

export const useDatabase = () => {

    const [update, setUpdate] = useState(true); 
    const [layoutDatabase, setLayoutDatabase] = useState();
    const [layoutNames, setLayoutNames] = useState();
    const [loading, setLoading] = useState(true);
	const [err, setErr] = useState([]);


    useEffect(async () => {
        const [data, err] = await GetMyModelData(urls.savedLayouts)
        setLayoutDatabase(data);
        setErr(err);
        setLoading(false);

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
        { layoutDatabase, layoutNames, loading, err, updateDatabase }
    );
}
export default useDatabase;