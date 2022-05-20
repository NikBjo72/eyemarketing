import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import urls from '../Model/fetch-url';
import GetMyModelData from'../Model/get-my-model-data';
import deleteMyModelData from '../Model/delete-my-model-data';
import urls from '../Model/fetch-url';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const CanvasLoadPanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [chosenLayoutName, setchosenLayoutName] = useState();
    const [allLayoutSettings, setAllLayoutSettings] = useState([]);
    const [chosenLayoutSettings, setChosenLayoutSettings] = useState([]);

    const Update = () => {
        if (update == false) {
            setUpdate(true);
        } else setUpdate(false);
    }

    const deleteBtnOnClick = async () => {
        let response = await deleteMyModelData(urls.savedLayouts, chosenLayoutName);

        if(response === 200) {
            NotificationManager.success('Layout borttagen');
        }
        else {
            NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte att ta bort!', 5000, () => {
                alert('callback');
            });
        }
        console.log('response at delete: ',response);
        Update();
    }

    const selectOnChangeHandler = (e) => {
        Update();
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
                        {allLayoutSettings.map((object) => {
                            return (<option key={object.name} value={object.name}>{object.name}</option>)
                        })}
                    </select>
                </div>
                <button onClick = {(e) => props.onClick("addLayoutBtn", chosenLayoutSettings)} className="addBtn">Öppna</button>
                <button onClick = { deleteBtnOnClick } className="deleteBtn">Ta bort</button>
            </fieldset>
            <NotificationContainer/>
        </>
    );
}
export default CanvasLoadPanel;