import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';

const CanvasImagePanel = (props) => {

    const [consoleLog, setConsoleLog] = useState(true)
    const [imageSettings, setImageSettings] = useState(
        {
            "id": "",
            "type": "img",
            "X": 0,
            "Y": 0,
            "imageWidth": 0,
            "order": 0
        }
    );

    const selectOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "id": e.currentTarget.value });
    }
    const onChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, [e.currentTarget.name]: parseInt(e.currentTarget.value) });
    }

    let images = Object.keys(url);

    return (
        <fieldset id="fieldsetImage" className="panelFieldset">
            <legend className="text-white">Lägg till bild</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bild</label>
                <select onChange = { selectOnChangeHandler } name='id' id='selectImage'>
                    <option>Välj en bild</option>
                    {images.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering horisontellt</label>
                <input onChange = { onChangeHandler } name='X' value = {imageSettings.X} type="number" placeholder='Placering horisontellt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { onChangeHandler } name='Y' value = {imageSettings.Y} type="number" placeholder='Placering vertikalt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bildbredd</label>
                <input onChange = { onChangeHandler } name='imageWidth' value = {imageSettings.imageWidth} type="number" placeholder='Bildbredd'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>
                <input onChange = { onChangeHandler } name='order' value = {imageSettings.order} type="number" placeholder='Ordning'/>
            </div>
            <button onClick = {(e) => props.onClick("addImageBtn", imageSettings)} className="addBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn", imageSettings.id)} className="deleteBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;