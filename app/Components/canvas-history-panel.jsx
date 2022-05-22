import React, { useState, useEffect, useRef, useContext } from 'react';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn';
import UpdateComponent from '../Helpers/update-component';
import ChangeLayoutItemContext from './change-layout-item-context';

const CanvasHistoryPanel = (props) => {

    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [update, setUpdate] = useState(false);
    const [buttons, setButtons] = useState([]);

    const handleEvent = (buttonName, btnStatus) => { 

        let newButtons = [...buttons]
        for (i=0; newButtons.length > i; i++) {
            if(newButtons[i].btnName === buttonName) {
                if(newButtons[i].btnStatus === false) {
                    newButtons
                        .filter(k => k.btnName === buttonName)
                        .map(i => i.btnStatus = true)
                    ;
                    let object = props.canvasLayoutItems.filter(k => k.id == buttonName);
                    ChangeLayoutItemCtx.setItemObject(object);
                } else {
                    newButtons
                        .filter(k => k.btnName === buttonName)
                        .map(i => i.btnStatus = false)
                    ;
                    ChangeLayoutItemCtx.setItemObject(undefined);
                }
            }
            else {
                newButtons
                    .filter(k => k.btnName !== buttonName)
                    .map(i => i.btnStatus = false)
                ;
            }
        };
        setButtons(newButtons);
        UpdateComponent(update, setUpdate);
    }

    useEffect(() => {
        setButtons(
            props.canvasLayoutItems
            .filter(i => i.type !== 'canvas')
            .map(i => {
                return({
                    btnName: i.id,
                    btnStatus: false,
                })
            }));
    },[props.canvasLayoutItems]);

    useEffect(() => {
        console.log('ChangeLayoutItemCtx: ',ChangeLayoutItemCtx.itemObject);
    },[update])

    return (
        <>
            <fieldset id="fieldsetLoad" className="panelFieldset">
                <legend className="text-white">Layoutobjekt</legend>
                {buttons.map(id => {
                    return (<button key={id.btnName} id="navBtn"><BlinkingEyeBtn type = 'local-scope' handleEvent = {true} onClick={handleEvent} id="smallBtn" name = {id.btnName} text={id.btnName} setStatus = {id.btnStatus}/></button>)
                })}
            </fieldset>
        </>
    );
}

export default CanvasHistoryPanel;