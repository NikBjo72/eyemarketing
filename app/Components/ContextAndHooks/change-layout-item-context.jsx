import React, { useState, useEffect, useRef,  createContext } from 'react';
import SyncStateToLocalStorage from '../../Model/sync-state-to-local-storage';
import useDatabase from './layout-database-context';
import UpdateComponent from '../../Helpers/update-component';

const ChangeLayoutItemContext = createContext();

export const ChangeLayoutItemContextProvider = (props) => {

    const [update, setUpdate] = useState(false);
    const [canvasLayoutItems, setCanvasLayoutItems] = SyncStateToLocalStorage('canvasItems', []);
    const [idOfItemToChange, setIdOfItemToChange] = useState(undefined);
    const [objectToChange, setObjectToChange] = useState({});
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

    useEffect(() => {
        setCanvasLayoutItems(canvasLayoutItems);
        updateDatabase();
    },[update])

    useEffect(() => {
    },[textSettings])
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
        setObjectToChange(getItemFromId(idOfItemToChange));
    }, [idOfItemToChange])

    useEffect(() => {
        if(idOfItemToChange) {
            if(objectToChange[0].type === 'img') {
                setImageSettings(objectToChange[0]);
            }
            if(objectToChange[0].type === 'text') {
                setTextSettings(objectToChange[0]);
            }
        }
    },[objectToChange]);

    useEffect(() => {
        if(idOfItemToChange) {
            if(objectToChange[0].type === 'img') {
                updateItemFromId(idOfItemToChange, {...imageSettings});
            }
            if(objectToChange[0].type === 'text') {
                updateItemFromId(idOfItemToChange, {...textSettings});
            }
            // Resaves the edited canvasLayoutItems
            setCanvasLayoutItems(canvasLayoutItems);
        }
    },[imageSettings, textSettings])

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

    const deleteItem = ((id) => {
        const index = canvasLayoutItems.findIndex(i => i.id === id);
        canvasLayoutItems.splice(index, index);
        UpdateComponent(update, setUpdate);
    })

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
         openLayout: openLayout,
         deleteItem: deleteItem,
         updateHistoryOnDelete: update
         }}>

         {props.children}
     </ChangeLayoutItemContext.Provider>
    );
}
export default ChangeLayoutItemContext;