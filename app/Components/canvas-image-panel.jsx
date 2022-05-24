import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { url } from '../Helpers/images';
import ChangeLayoutItemContext from './change-layout-item-context';
import UpdateComponent from '../Helpers/update-component';

const CanvasImagePanel = (props) => {

    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [consoleLog, setConsoleLog] = useState(true);
    const [update, setUpdate] = useState(false);

    const selectOnChangeHandler = (e) =>  { ChangeLayoutItemCtx.setImageSettings(
        { ...ChangeLayoutItemCtx.imageSettings, "id": e.currentTarget.value });
    }
    const onChangeHandler = (e) =>  { ChangeLayoutItemCtx.setImageSettings(
        { ...ChangeLayoutItemCtx.imageSettings, [e.currentTarget.name]: parseInt(e.currentTarget.value) });
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
                <input onChange = { onChangeHandler } name='X' value = {ChangeLayoutItemCtx.imageSettings.X} type="number" placeholder='Placering horisontellt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { onChangeHandler } name='Y' value = {ChangeLayoutItemCtx.imageSettings.Y} type="number" placeholder='Placering vertikalt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bildbredd</label>
                <input onChange = { onChangeHandler } name='imageWidth' value = {ChangeLayoutItemCtx.imageSettings.imageWidth} type="number" placeholder='Bildbredd'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>
                <input onChange = { onChangeHandler } name='order' value = {ChangeLayoutItemCtx.imageSettings.order} type="number" placeholder='Ordning'/>
            </div>
            <button onClick = {(e) => ChangeLayoutItemCtx.addItem(ChangeLayoutItemCtx.imageSettings)} className="addBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteImageBtn", ChangeLayoutItemCtx.imageSettings.id)} className="deleteBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasImagePanel;