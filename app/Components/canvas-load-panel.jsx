import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import urls from '../Model/fetch-url';
import GetMyModelData from'../Model/get-my-model-data';

const CanvasLoadPanel = (props) => {

    const [consoleLog, setConsoleLog] = useState(true)
    const [chosenLayout, setchoslenLayout] = useState('');
    const [allLayoutSettings, setAllLayoutSettings] = useState([]);
    const [chosenLayoutSettings, setChosenLayoutSettings] = useState([]);

    const selectOnChangeHandler = (e) => {
        setchoslenLayout(e.currentTarget.value);
        var layout = allLayoutSettings.filter(layout => layout.name == e.currentTarget.value);
        setChosenLayoutSettings(layout);
        // console.log('chosenLayout');
        // console.log(layout);
    }
    
    useEffect(async () => {
        setAllLayoutSettings(await GetMyModelData(urls.savedLayouts));
    }, []);

    // useEffect(() => {
    //     console.log(chosenLayout);
    //     console.log('=> state');
    //     console.log(chosenLayoutSettings);
    // });

    return (
        <fieldset id="fieldsetImage">
            <legend className="text-white">Sparade layouter</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layout</label>
                <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                    <option>Välj en layout</option>
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