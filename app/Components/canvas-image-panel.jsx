import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import './canvas-image.css'

const CanvasImagePanel = (props) => {

    const [consoleLog, setConsoleLog] = useState(true)
    const [imageSettings, setImageSettings] = useState(
        {
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
        <fieldset id="fieldsetImage">
            <legend className="text-white">Lägg till bild</legend>
            <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                {images.map((i) => {
                    return (<option key={i} value={i}>{i}</option>)
                })}

            </select>
            <input onChange = { xOnChangeHandler } value = {imageSettings.imageX} type="number" placeholder='Placering horisontellt'/>
            <input onChange = { yOnChangeHandler } value = {imageSettings.imageY} type="number" placeholder='Placering vertikalt'/>
            <input onChange = { widthOnChangeHandler } value = {imageSettings.imageWidth} type="number" placeholder='Bildbredd'/>
            <input onChange = { orderOnChangeHandler } value = {imageSettings.order} type="number" placeholder='Ordning'/>
            <button onClick = {(e) => props.onClick("addImageBtn", imageSettings)} id="addImageBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn", imageSettings.imageName)} id="deleteImageBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;