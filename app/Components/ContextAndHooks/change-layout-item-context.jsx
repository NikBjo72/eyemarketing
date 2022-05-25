import React, { useState, useEffect, useRef,  createContext } from 'react';
import SyncStateToLocalStorage from '../../Model/sync-state-to-local-storage';
import useDatabase from './layout-database-context';

const ChangeLayoutItemContext = createContext();

export const ChangeLayoutItemContextProvider = (props) => {

    const [canvasLayoutItems, setCanvasLayoutItems] = SyncStateToLocalStorage('canvasItems', []);
    const [idOfItemToChange, setIdOfItemToChange] = useState(undefined);
    const [dublicatedIdError, setDublicatedIdError] = useState(false);
    const {layoutDatabase, layoutNames, updateDatabase} = useDatabase();
    const [imageSettings, setImageSettings] = useState(
        {
            "id": "",
            "imageName": "",
            "type": "img",
            "X": 0,
            "Y": 0,
            "imageWidth": 0,
            "order": 0
        }
    );
    const [textSettings, setTextSettings] = useState(
        {
            "id": "",
            "type": "text",
            "content": "",
            "font": "",
            "fontSize": 0,
            "style": "",
            "color": "",
            "X": 0,
            "Y": 0,
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
    /** Get item from canvasLayoutItems with id, and then update with new settings */ 
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
        console.log('canvasLayoutItems: ',canvasLayoutItems);
    },[idOfItemToChange]);

    useEffect(() => {
        if(idOfItemToChange) {
            updateItemFromId(idOfItemToChange, {...imageSettings});
            // Resaves the edited canvasLayoutItems
            setCanvasLayoutItems(canvasLayoutItems);
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

    const checkId = ((object) => {
        return canvasLayoutItems
            .filter(item => item.type === object.type)
            .map(item => item.id === object.id)
            .find(bool => bool === true)
    }) 

    const addItem = (object) => {
        if(!checkId(object)) {
            setCanvasLayoutItems([...canvasLayoutItems, object]);
        } else {
            setDublicatedIdError(true);
        }
    };

    return (
     <ChangeLayoutItemContext.Provider value={{
         canvasLayoutItems: canvasLayoutItems,
         setCanvasLayoutItems: setCanvasLayoutItems,
         setIdOfItemToChange: setIdOfItemToChange,
         idOfItemToChange: idOfItemToChange,
         imageSettings: imageSettings,
         setImageSettings: setImageSettings,
         textSettings: textSettings,
         dublicatedIdError: dublicatedIdError,
         setDublicatedIdError: setDublicatedIdError,
         setTextSettings: setTextSettings,
         addItem: addItem,
         openLayout: openLayout
         }}>

         {props.children}
     </ChangeLayoutItemContext.Provider>
    );
}
export default ChangeLayoutItemContext;