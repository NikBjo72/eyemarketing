import React from 'react';
import { useState, useEffect, useRef } from 'react';
import urls from '../Model/fetch-url';
import GetMyModelData from'../Model/get-my-model-data';

const CanvasLoadPanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [allLayoutSettings, setAllLayoutSettings] = useState([]);
    const [chosenLayoutSettings, setChosenLayoutSettings] = useState([]);

    const Update = () => {
        if (update == false) {
            setUpdate(true);
        } else setUpdate(false);
    }

    const selectOnChangeHandler = (e) => {
        Update();
        if(e.target.name == 'empty') {
            setChosenLayoutSettings([]);
        } else {
            const layout = allLayoutSettings.filter(layout => layout.name == e.currentTarget.value);
            setChosenLayoutSettings(layout);
        }
    }
    
    useEffect(async () => {
        setAllLayoutSettings(await GetMyModelData(urls.savedLayouts));
    }, [update]);

    // useEffect(() => {
    //     console.log('vald layout i load panel');
    //     console.log(chosenLayoutSettings);
    //     console.log('alla layouter hämtade');
    //     console.log(allLayoutSettings);
    // });

    return (
        <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">Sparade layouter</legend>
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
            <button onClick = {(e) => props.onClick("deleteLayoutBtn")} className="deleteBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasLoadPanel;