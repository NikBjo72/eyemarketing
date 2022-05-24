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
            .filter(o => o.id === id)
        ;
    }

    const updateItemFromId = (id, settings) => {
        for(const index in canvasLayoutItems) {
            const item = canvasLayoutItems[index]
            if(item.id === id) {
                canvasLayoutItems[index] = settings;
            }
        }
    }

    useEffect(() => {

        if(idOfItemToChange) {
            let objectToChange = getItemFromId(idOfItemToChange);
            if(objectToChange[0].type === 'img') {
                setImageSettings(objectToChange[0]);
            }
        }
    },[idOfItemToChange]);

    // useEffect(() => {
    //     console.log('hej!');
    // },[idOfItemToChange])

    useEffect(() => {
        if(idOfItemToChange) {
            // 1. Hitta markerat item i canvasLayoutItems

            // 2. Uppdatear objectet med imageSettings
            updateItemFromId(idOfItemToChange, {...imageSettings});
            // 3. Spara om canvasLayoutItems
            setCanvasLayoutItems(canvasLayoutItems);
            console.log('imageSettings:', imageSettings);
        }
    },[imageSettings])

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