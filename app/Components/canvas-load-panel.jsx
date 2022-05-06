import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';

const CanvasLoadPanel = (props) => {

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
        <fieldset id="fieldsetImage">
            <legend className="text-white">Sparade layouter</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Layout</label>
                <select onChange = { selectOnChangeHandler } name='image' id='selectImage'>
                    <option>Välj en layout</option>
                    {images.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <button onClick = {(e) => props.onClick("addImageBtn", imageSettings)} id="addImageBtn">Öppna</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn", imageSettings.imageName)} id="deleteImageBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasLoadPanel;