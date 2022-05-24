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
                    let objectId = ChangeLayoutItemCtx.canvasLayoutItems
                        .filter(o => o.id == buttonName)
                        .map(k => k.id)
                    ;
                    ChangeLayoutItemCtx.setIdOfItemToChange(objectId[0]);
                } else {
                    newButtons
                        .filter(k => k.btnName === buttonName)
                        .map(i => i.btnStatus = false)
                    ;
                    ChangeLayoutItemCtx.setIdOfItemToChange(undefined);
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
            ChangeLayoutItemCtx.canvasLayoutItems
            .filter(i => i.type !== 'canvas')
            .map(i => {
                return({
                    btnName: i.id,
                    btnStatus: false,
                })
            }));
    },[ChangeLayoutItemCtx.canvasLayoutItems]);

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