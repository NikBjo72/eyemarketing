import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';
import urls from '../Model/fetch-url';
import postMyModelData from '../Model/post-my-model-data';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import useDatabase from './custom-hooks/use-database';
import ChangeLayoutItemContext from './change-layout-item-context';

const CanvasSavePanel = (props) => {

    const [name, setName] = useState('');
    const { layoutDatabase, layoutNames, updateDatabase } = useDatabase();
    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext); 

    const nameOnChangeHandler = (e) =>  {
        setName(e.target.value);
    }

    const onClickHandler = (async () => {
        debugger
        let saveLayout = {
            id: undefined,
            name: name,
            removable: true,
            layoutContent: ChangeLayoutItemCtx.canvasLayoutItems
        }

        let response = await postMyModelData(urls.savedLayouts, saveLayout);
        if(response === 201) {
            NotificationManager.success('Layout sparad');
        }
        else {
            NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte spara!', 5000);
        }
    })

    return (
        <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">Spara layout</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layoutnamn</label>
                <input onChange = { nameOnChangeHandler } value={name} name='save' id='save' placeholder = "Layoutnamn"></input>
            </div>
            <button onClick = { onClickHandler } className="addBtn">Spara layout</button>
        </fieldset>
    );
}

export default CanvasSavePanel;