import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { url } from '../Helpers/images';
import ChangeLayoutItemContext from './ContextAndHooks/change-layout-item-context';
import CollapsableFieldset from './collapsable-fieldset';

const CanvasImagePanel = (props) => {

    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [consoleLog, setConsoleLog] = useState(true);
    const [update, setUpdate] = useState(false);

    const textOnChangeHandler = (e) =>  { ChangeLayoutItemCtx.setImageSettings(
        { ...ChangeLayoutItemCtx.imageSettings, [e.currentTarget.name]: e.currentTarget.value });
    }
    const NumberOnChangeHandler = (e) =>  { ChangeLayoutItemCtx.setImageSettings(
        { ...ChangeLayoutItemCtx.imageSettings, [e.currentTarget.name]: parseInt(e.currentTarget.value) });
    }

    let images = Object.keys(url);

    return (
        <CollapsableFieldset legend='Lägg till bild' className='panelFieldset' classNameLegend='text-white'>
            <div className='inputHolder'>
                <label className="inputlabel text-white">Namn</label>
                <input onChange = { textOnChangeHandler } name='id' value = {ChangeLayoutItemCtx.imageSettings.id} id='id' placeholder = "Namn på bildobjekt"></input>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bild</label>
                <select onChange = { textOnChangeHandler } name='imageName' id='selectImage' value = {ChangeLayoutItemCtx.imageSettings.imageName}>
                    <option>Välj en bild</option>
                    {images.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering horisontellt</label>
                <input onChange = { NumberOnChangeHandler } name='X' value = {ChangeLayoutItemCtx.imageSettings.X} type="number" placeholder='Placering horisontellt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { NumberOnChangeHandler } name='Y' value = {ChangeLayoutItemCtx.imageSettings.Y} type="number" placeholder='Placering vertikalt'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Bildbredd</label>
                <input onChange = { NumberOnChangeHandler } name='imageWidth' value = {ChangeLayoutItemCtx.imageSettings.imageWidth} type="number" placeholder='Bildbredd'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>
                <input onChange = { NumberOnChangeHandler } name='order' value = {ChangeLayoutItemCtx.imageSettings.order} type="number" placeholder='Ordning'/>
            </div>
            <button onClick = {(e) => ChangeLayoutItemCtx.addItem(ChangeLayoutItemCtx.imageSettings)} className="addBtn">Lägg till</button>
        </CollapsableFieldset>
    );
}

export default CanvasImagePanel;