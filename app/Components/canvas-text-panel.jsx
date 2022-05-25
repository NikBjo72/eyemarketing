import React, { useState, useContext, useEffect, useRef } from 'react';
import { fonts, color } from '../Helpers/presets';
import './canvas-text-panel.css'
import ChangeLayoutItemContext from './ContextAndHooks/change-layout-item-context';

const CanvasTextPanel = (props) => {

    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [checkboxBold, setcheckboxBold] = useState(false);
    const [checkboxItalic, setcheckboxItalic] = useState(false);

    const onChangeTextHandler = (e) =>  {ChangeLayoutItemCtx.setTextSettings(
        { ...ChangeLayoutItemCtx.textSettings, [e.currentTarget.name]: e.currentTarget.value });
    }
    const onChangeNumberHandler = (e) =>  {ChangeLayoutItemCtx.setTextSettings(
        { ...ChangeLayoutItemCtx.textSettings, [e.currentTarget.name]: parseInt(e.currentTarget.value) });
    }
    const styleOnChangeHandler = (e) =>  {
        if(e.currentTarget.checked == true && e.currentTarget.value == 'bold') {
            ChangeLayoutItemCtx.setTextSettings({ ...ChangeLayoutItemCtx.textSettings, "style": e.currentTarget.value });
            setcheckboxBold(true);
            setcheckboxItalic(false);
        }
        else if (e.currentTarget.checked == false && e.currentTarget.value == 'bold') {
            ChangeLayoutItemCtx.setTextSettings({ ...ChangeLayoutItemCtx.textSettings, "style": "" });
            setcheckboxBold(false);
        }
        if(e.currentTarget.checked == true && e.currentTarget.value == 'italic') {
            ChangeLayoutItemCtx.setTextSettings({ ...ChangeLayoutItemCtx.textSettings, "style": e.currentTarget.value });
            setcheckboxBold(false);
            setcheckboxItalic(true);
        }
        else if (e.currentTarget.checked == false && e.currentTarget.value == 'italic') {
            ChangeLayoutItemCtx.setTextSettings({ ...ChangeLayoutItemCtx.textSettings, "style": "" });
            setcheckboxItalic(false);
        }
    }

    return (
        <fieldset id="fieldsetText" className="panelFieldset">
            <legend className="text-white">Lägg till text</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white">Namn</label>
                <input onChange = { onChangeTextHandler } name='id' id='selectImage' placeholder = "Namn på textobjekt"></input>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Text</label>
                <textarea onChange = { onChangeTextHandler } name = "content" type = "text" value={ChangeLayoutItemCtx.textSettings.content} placeholder='Skriv din text här'/>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Typsnitt</label> 
                <select onChange = { onChangeTextHandler } name='font' id='selectFont'>
                <option>Välj typsnitt</option>
                    {fonts.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Textstorlek</label>
                <input onChange = { onChangeNumberHandler } name="fontSize" value = {ChangeLayoutItemCtx.textSettings.fontSize} type="number" placeholder='Textstorlek'/>
            </div>

            <div id="checkboxContainer">
                <input className="checkbox" onChange = { styleOnChangeHandler } value={'bold'} checked={checkboxBold} name="Bold" type="checkbox"/>
                <label className="text-white checkboxLabel" >Bold</label>
                <input className="checkbox" onChange = { styleOnChangeHandler } value={'italic'} checked={checkboxItalic} name="Italic" type="checkbox"/>
                <label className="text-white checkboxLabel" >Italic</label>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Textfärg</label>
                <select onChange = { onChangeTextHandler } name='color' id='selectFont'>
                <option>Välj färg</option>
                    {color.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering horisontellt</label>    
                <input onChange = { onChangeNumberHandler } name="X" value = {ChangeLayoutItemCtx.textSettings.X} type="number" placeholder='Placering horisontellt'/>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { onChangeNumberHandler } name="Y" value = {ChangeLayoutItemCtx.textSettings.Y} type="number" placeholder='Placering vertikalt'/>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>    
                <input onChange = { onChangeNumberHandler } name="order" value = {ChangeLayoutItemCtx.textSettings.order} type="number" placeholder='Ordning'/>
            </div>

            <button onClick = { (e) => ChangeLayoutItemCtx.addItem(ChangeLayoutItemCtx.textSettings) } className="addBtn">Lägg till</button>
        </fieldset>
    );
}

export default CanvasTextPanel;