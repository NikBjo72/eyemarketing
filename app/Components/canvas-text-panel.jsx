import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { fonts, color } from '../Helpers/presets';
import './canvas-text-panel.css'

const CanvasTextPanel = (props) => {

    const [consoleLog, setConsoleLog] = useState(true);
    const [checkboxBold, setcheckboxBold] = useState(false);
    const [checkboxItalic, setcheckboxItalic] = useState(false);
    const [textSettings, setTextSettings] = useState(
        {
            "type": "text",
            "text": "",
            "font": "",
            "fontSize": 0,
            "style": "",
            "color": "",
            "textX": 0,
            "textY": 0,
            "order": 0
        }
    );

    const textOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "text": e.currentTarget.value });
    }
    const selectFontOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "font": e.currentTarget.value });
    }
    const sizeOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "fontSize": parseInt(e.currentTarget.value) });
    }
    const styleOnChangeHandler = (e) =>  {
        if(e.currentTarget.checked == true && e.currentTarget.value == 'bold') {
            setTextSettings({ ...textSettings, "style": e.currentTarget.value });
            setcheckboxBold(true);
            setcheckboxItalic(false);
        }
        else if (e.currentTarget.checked == false && e.currentTarget.value == 'bold') {
            setTextSettings({ ...textSettings, "style": "" });
            setcheckboxBold(false);
        }
        if(e.currentTarget.checked == true && e.currentTarget.value == 'italic') {
            setTextSettings({ ...textSettings, "style": e.currentTarget.value });
            setcheckboxBold(false);
            setcheckboxItalic(true);
        }
        else if (e.currentTarget.checked == false && e.currentTarget.value == 'italic') {
            setTextSettings({ ...textSettings, "style": "" });
            setcheckboxItalic(false);
        }
    }
    const selectColorOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "color": e.currentTarget.value });
    }
    const xOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "textX": parseInt(e.currentTarget.value) });
    }
    const yOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "textY": parseInt(e.currentTarget.value) });
    }
    const orderOnChangeHandler = (e) =>  { setTextSettings(
        { ...textSettings, "order": parseInt(e.currentTarget.value) });
    }
    
    useEffect(() => {
        console.log(textSettings);
    });

    return (
        <fieldset id="fieldsetImage">
            <legend className="text-white">Lägg till text</legend>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Text</label>
                <textarea onChange = { textOnChangeHandler } name = "content" type = "text" value={textSettings.text} placeholder='Skriv din text här'/>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Typsnitt</label> 
                <select onChange = { selectFontOnChangeHandler } name='font' id='selectFont'>
                <option>Välj typsnitt</option>
                    {fonts.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>
            <div className='inputHolder'>
                <label className="inputlabel text-white" >Textstorlek</label>
                <input onChange = { sizeOnChangeHandler } value = {textSettings.fontSize} type="number" placeholder='Textstorlek'/>
            </div>

            <div id="checkboxContainer">
                <input className="checkbox" onChange = { styleOnChangeHandler } value={'bold'} checked={checkboxBold} name="Bold" type="checkbox"/>
                <label className="text-white checkboxLabel" for="Bold">Bold</label>
                <input className="checkbox" onChange = { styleOnChangeHandler } value={'italic'} checked={checkboxItalic} name="Italic" type="checkbox"/>
                <label className="text-white checkboxLabel" for="Italic">Italic</label>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Textfärg</label>
                <select onChange = { selectColorOnChangeHandler } name='color' id='selectFont'>
                <option>Välj färg</option>
                    {color.map((i) => {
                        return (<option key={i} value={i}>{i}</option>)
                    })}
                </select>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering horisontellt</label>    
                <input onChange = { xOnChangeHandler } value = {textSettings.textX} type="number" placeholder='Placering horisontellt'/>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Placering vertikalt</label>
                <input onChange = { yOnChangeHandler } value = {textSettings.textY} type="number" placeholder='Placering vertikalt'/>
            </div>

            <div className='inputHolder'>
                <label className="inputlabel text-white" >Lager</label>    
                <input onChange = { orderOnChangeHandler } value = {textSettings.order} type="number" placeholder='Ordning'/>
            </div>

            <button onClick = {(e) => props.onClick("addTextBtn", textSettings)} id="addImageBtn">Lägg till</button>
            <button onClick = {(e) => props.onClick("deleteTextBtn")} id="deleteImageBtn">Ta bort</button>
        </fieldset>
    );
}

export default CanvasTextPanel;