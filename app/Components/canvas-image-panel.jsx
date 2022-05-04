import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import './canvas-image.css'

const CanvasImagePanel = () => {

    const xOnChangeHandler = () => {

    }
    const yOnChangeHandler = () => {
        
    }
    const widthOnChangeHandler = () => {
        
    }

    let images = Object.keys(url);

    return (
        <fieldset id="fieldsetImage">
            <legend className="text-white">Lägg till bild</legend>
            <select name='images' id='selectImage'>
                {images.map((i) => {
                    return (<option key={i} value={i}>{i}</option>)
                })}

            </select>
            <input onChange = { xOnChangeHandler } value = {``} type="text" placeholder='Placering horisontellt'/>
            <input onChange = { yOnChangeHandler } value = {``} type="text" placeholder='Placering vertikalt'/>
            <input onChange = { widthOnChangeHandler } value = {``} type="text" placeholder='Bildbredd'/>
            <button  id="addImageBtn">Lägg till</button>
            <button  id="deleteImageBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;