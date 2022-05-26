import React from 'react';
import { useState, useEffect, useCallback, useContext} from 'react';
import urls from '../Model/fetch-url';
import deleteMyModelData from '../Model/delete-my-model-data';
import urls from '../Model/fetch-url';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import ChangeLayoutItemContext from './ContextAndHooks/change-layout-item-context';
import UpdateComponent from '../Helpers/update-component';
import useDatabase from './ContextAndHooks/layout-database-context';
import CollapsableFieldset from './collapsable-fieldset';

const CanvasLoadPanel = (props) => {
    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [update, setUpdate] = useState(false);
    const [chosenLayoutId, setChosenLayoutId] = useState([]);
    const { layoutDatabase, layoutNames, updateDatabase } = useDatabase();

    const deleteBtnOnClick = async () => {
        let check = layoutDatabase
            .filter(k => k.name === chosenLayoutId)
            .map(t => t.removable)
        ;

        if (check[0]) {
            let response = await deleteMyModelData(urls.savedLayouts, chosenLayoutId);

            if(response === 200) {
                NotificationManager.success('Layout borttagen');
                updateDatabase();
            }
            else {
                NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte att ta bort!', 5000);
            }
        } else {
            NotificationManager.error('Denna layout är skyddad för borttagning.', 'Skyddad!', 5000);
        }
    }

    const selectOnChangeHandler = (e) => {
        UpdateComponent(update, setUpdate);
        if(e.target.name == 'empty') {
            setChosenLayoutId([]);
        } else {
            setChosenLayoutId(e.currentTarget.value);
        }
    }

    return (     
        <CollapsableFieldset legend='Öppna/Ta bort layout' className='panelFieldset' classNameLegend='text-white' activated={true}>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layout</label>
                <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                <option name={'empty'} value={'Välj en layput'}>Välj en layout</option>
                    {layoutNames !== undefined
                    ?
                    layoutNames.map((object) => {
                        return (<option key={object} value={object}>{object}</option>)
                    })
                    :
                    null}   
                </select>
            </div>
            <button onClick = {(e) => ChangeLayoutItemCtx.openLayout(chosenLayoutId)} className="addBtn">Öppna</button>
            <button onClick = { deleteBtnOnClick } className="deleteBtn">Ta bort</button>
        </CollapsableFieldset>
    );
};
export default CanvasLoadPanel;