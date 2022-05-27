import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';
import urls from '../Model/fetch-url';
import postMyModelData from '../Model/post-my-model-data';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import useDatabase from './ContextAndHooks/layout-database-context';
import ChangeLayoutItemContext from './ContextAndHooks/change-layout-item-context';
import CollapsableFieldset from './collapsable-fieldset';

const CanvasSavePanel = (props) => {

    const [name, setName] = useState('');
    const { layoutDatabase, layoutNames, updateDatabase } = useDatabase();
    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext); 

    const nameOnChangeHandler = (e) =>  {
        setName(e.target.value);
    }

    const checkId = (() => {
        return layoutDatabase
            .map(layout => layout.name === name)
            .find(bool => bool === true)
    });

    const onClickHandler = (async () => {

        if(!checkId()) {
            let saveLayout = {
                id: undefined,
                name: name,
                removable: true,
                layoutContent: ChangeLayoutItemCtx.canvasLayoutItems
            }
            let [response, err] = await postMyModelData(urls.savedLayouts, saveLayout);
            if(response.status === 201) {
                NotificationManager.success('Layout sparad');
                updateDatabase();
            }
            else {
                NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte spara!', 5000);
                console.log(err);
            }
        } else {
            ChangeLayoutItemCtx.setDublicatedIdError(true);
        }
    })

    return (
        <CollapsableFieldset legend='Spara layout' className='panelFieldset' classNameLegend='text-white'>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layoutnamn</label>
                <input onChange = { nameOnChangeHandler } value={name} name='save' id='save' placeholder = "Layoutnamn"></input>
            </div>
            <button onClick = { onClickHandler } className="addBtn">Spara layout</button>
        </CollapsableFieldset>
    );
}

export default CanvasSavePanel;