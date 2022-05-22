import React from 'react';
import { useState, useEffect, useCallback, useContext} from 'react';
import urls from '../Model/fetch-url';
import GetMyModelData from'../Model/get-my-model-data';
import deleteMyModelData from '../Model/delete-my-model-data';
import urls from '../Model/fetch-url';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LayoutDatabaseContext from '../Components/layout-database-context';
import updateComponent from '../Helpers/update-component';

const CanvasLoadPanel = (props) => {
    const LayoutDatabaseCtx = useContext(LayoutDatabaseContext);
    const [update, setUpdate] = useState(false);
    const [chosenLayoutName, setchosenLayoutName] = useState();
    const [allLayoutSettings, setAllLayoutSettings] = useState([]);
    const [chosenLayoutSettings, setChosenLayoutSettings] = useState([]);

    const deleteBtnOnClick = async () => {
        let response = await deleteMyModelData(urls.savedLayouts, chosenLayoutName);

        if(response === 200) {
            NotificationManager.success('Layout borttagen');
            LayoutDatabaseCtx.updateDatabase();
        }
        else {
            NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte att ta bort!', 5000);
        }
        updateComponent(update, setUpdate);
    }

    const selectOnChangeHandler = (e) => {
        updateComponent(update, setUpdate);
        if(e.target.name == 'empty') {
            setChosenLayoutSettings([]);
        } else {
            setchosenLayoutName(e.currentTarget.value);
            const layout = allLayoutSettings.filter(layout => layout.name == e.currentTarget.value);
            setChosenLayoutSettings(layout);
        }
    }
    
    useEffect(async () => {
        setAllLayoutSettings(await GetMyModelData(urls.savedLayouts));
    }, [update]);

    return (
        <>
            <fieldset id="fieldsetLoad" className="panelFieldset">
                <legend className="text-white">Öppna/Ta bort layout</legend>
                <div className='inputHolder'>
                    <label className="inputlabel text-white" >Layout</label>
                    <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                    <option name={'empty'} value={'Tom layout'}>Tom layout</option>
                        {LayoutDatabaseCtx.layoutNames !== undefined
                        ?
                        LayoutDatabaseCtx.layoutNames.map((object) => {
                            return (<option key={object} value={object}>{object}</option>)
                        })
                        :
                        null}   
                    </select>
                </div>
                <button onClick = {(e) => props.onClick("addLayoutBtn", chosenLayoutSettings)} className="addBtn">Öppna</button>
                <button onClick = { deleteBtnOnClick } className="deleteBtn">Ta bort</button>
            </fieldset>
            <NotificationContainer/>
        </>
    );
};
export default CanvasLoadPanel;