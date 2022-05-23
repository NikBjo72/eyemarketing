import React, { useState, useEffect, useRef,  createContext } from 'react';
import SyncStateToLocalStorage from '../Model/sync-state-to-local-storage';
import useDatabase from './custom-hooks/use-database';

const ChangeLayoutItemContext = createContext();

export const ChangeLayoutItemContextProvider = (props) => {

    const [canvasLayoutItems, setCanvasLayoutItems] = SyncStateToLocalStorage('canvasItems', []);
    const [idOfItemToChange, setIdOfItemToChange] = useState(undefined);
    const { layoutDatabase, layoutNames, updateDatabase } = useDatabase();
    const [imageSettings, setImageSettings] = useState(
        {
            "id": "",
            "type": "img",
            "X": 0,
            "Y": 0,
            "imageWidth": 0,
            "order": 0
        }
    );
    const getLayoutFromName = (name) => {
        return layoutDatabase
            .find(o => o.name === name)
        ;
    }
    const getItemFromId = (id) => {
        return canvasLayoutItems
            .find(o => o.id === id)
        ;
    }

    useEffect(() => {

        if(idOfItemToChange) {
            let objectToChange = getItemFromId(idOfItemToChange);
            console.log(objectToChange);
            if(objectToChange.type === 'img') {
                let newObjectToChange = {...objectToChange};
                setImageSettings(newObjectToChange);
            }
        }
    }),[idOfItemToChange];

    useEffect(() => {
        console.log('hej!');
    },[idOfItemToChange])

    const openLayout = (name) => {
        if(name.length === 0) {
            setCanvasLayoutItems([]);
        } else {
            let layout = getLayoutFromName(name);
            setCanvasLayoutItems(layout.layoutContent);
        }
    }

    const addItem = (object) => {
        setCanvasLayoutItems([...canvasLayoutItems, object]);
    };

    return (
     <ChangeLayoutItemContext.Provider value={{
         canvasLayoutItems: canvasLayoutItems,
         setCanvasLayoutItems: setCanvasLayoutItems,
         setIdOfItemToChange: setIdOfItemToChange,
         idOfItemToChange: idOfItemToChange,
         imageSettings: imageSettings,
         setImageSettings: setImageSettings,
         addItem: addItem,
         openLayout: openLayout
         }}>

         {props.children}
     </ChangeLayoutItemContext.Provider>
    );
}
export default ChangeLayoutItemContext;