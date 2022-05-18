import React from 'react';
import { useState, useEffect, useRef } from 'react';

const CanvasSavePanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [name, setName] = useState("");

    const Update = () => {
        if (update == false) {
            setUpdate(true);
        } else setUpdate(false);
    }

    const nameOnChangeHandler = (e) =>  {
        setName(e.currentTarget.value);
    }

    useEffect(() => {
        console.log(name);
    });

    return (
        <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">Spara layout</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layout</label>
                <input onChange = { nameOnChangeHandler } name='image' id='selectImage' placeholder = "Layoutnamn"></input>
            </div>
            <button onClick = {(e) => props.onClick("saveLayoutBtn", name)} className="addBtn">Spara layout</button>
        </fieldset>
    );
}

export default CanvasSavePanel;