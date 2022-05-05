import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import './canvas-image.css'

const CanvasImagePanel = (props) => {

    const updateUseEffect = () => {
        if(consoleLog) {
            setConsoleLog(false);
        } else {
            setConsoleLog(true);
        };
    }

    const [consoleLog, setConsoleLog] = useState(true)
    const [imageSettings, setImageSettings] = useState(
        {
            "imageName": "",
            "imageX": 0,
            "imageY": 00,
            "imageWidth": 0,
            "imageHeight": 0
        }
        );

    const selectOnChangeHandler = (e) =>  { setImageSettings(
        {...imageSettings, "imageName": e.currentTarget.value});
        updateUseEffect();
    }

    const xOnChangeHandler = (e) =>  { setImageSettings(
        {...imageSettings, "imageX": e.currentTarget.value});
        updateUseEffect();
    }
    const yOnChangeHandler = (e) =>  { setImageSettings(
        {...imageSettings, "imageY": e.currentTarget.value});
        updateUseEffect();
    }
    const widthOnChangeHandler = (e) =>  { setImageSettings(
        {...imageSettings, "imageWidth": e.currentTarget.value});
        updateUseEffect();
    }
    const heightOnChangeHandler = (e) =>  { setImageSettings(
        {...imageSettings, "imageHeight": e.currentTarget.value});
        updateUseEffect();
    }
    
    useEffect(() => {
        console.log(imageSettings);
    }, [consoleLog]);

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
            <input onChange = { heightOnChangeHandler } value = {imageSettings.imageHeight} type="number" placeholder='Bildbredd'/>
            <button onClick = {(e) => props.onClick("addImageBtn")} id="addImageBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn")} id="deleteImageBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;

// {
//     "imageName": "bild1",
//     "imageX": 50,
//     "imageY": 50,
//     "imageWidth": 200,
//     "imageHeight": 140
// }