import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';

const CanvasImagePanel = (props) => {

    const [consoleLog, setConsoleLog] = useState(true)
    const [imageSettings, setImageSettings] = useState(
        {
            "type": "img",
            "imageName": "",
            "imageX": 0,
            "imageY": 0,
            "imageWidth": 0,
            "order": 0
        }
        );

    const selectOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "imageName": e.currentTarget.value });
    }
    const xOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "imageX": parseInt(e.currentTarget.value) });
    }
    const yOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "imageY": parseInt(e.currentTarget.value) });
    }
    const widthOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "imageWidth": parseInt(e.currentTarget.value) });
    }
    const orderOnChangeHandler = (e) =>  { setImageSettings(
        { ...imageSettings, "order": parseInt(e.currentTarget.value) });
    }
    
    // useEffect(() => {
    //     console.log(imageSettings);
    // });

    let images = Object.keys(url);

    return (
        <fieldset id="fieldsetImage" className="panelFieldset">
            <legend className="text-white">Lägg till bild</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bild</label>
                <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                    <option>Välj en bild</option>
                    {images.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering horisontellt</label>
                <input onChange = { xOnChangeHandler } value = {imageSettings.imageX} type="number" placeholder='Placering horisontellt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { yOnChangeHandler } value = {imageSettings.imageY} type="number" placeholder='Placering vertikalt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bildbredd</label>
                <input onChange = { widthOnChangeHandler } value = {imageSettings.imageWidth} type="number" placeholder='Bildbredd'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>
                <input onChange = { orderOnChangeHandler } value = {imageSettings.order} type="number" placeholder='Ordning'/>
            </div>
            <button onClick = {(e) => props.onClick("addImageBtn", imageSettings)} className="addBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn", imageSettings.imageName)} className="deleteBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;