import React, { useState, useCallback, useEffect, useRef, useContext } from 'react';

const CanvasSavePanel = (props) => {

    const [name, setName] = useState('');

    const nameOnChangeHandler = (e) =>  {
        setName(e.target.value);
    }

    return (
        <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">Spara layout</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layoutnamn</label>
                <input onChange = { nameOnChangeHandler } value={name} name='save' id='save' placeholder = "Layoutnamn"></input>
            </div>
            <button onClick = {(e) => {props.onClick("saveLayoutBtn", name); setName('')}} className="addBtn">Spara layout</button>
        </fieldset>
    );
}

export default CanvasSavePanel;