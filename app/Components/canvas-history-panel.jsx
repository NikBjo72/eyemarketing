import React, { useState, useEffect, useRef, useContext } from 'react';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn';
import UpdateComponent from '../Helpers/update-component';
import ChangeLayoutItemContext from './ContextAndHooks/change-layout-item-context';
import CollapsableFieldset from './collapsable-fieldset';
import './canvas-history-panel.css';

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

    const handleDeleteEvent = ((e) => {
        ChangeLayoutItemCtx.deleteItem(e.target.name)
    })

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
    },[ChangeLayoutItemCtx.canvasLayoutItems, ChangeLayoutItemCtx.updateHistoryOnDelete]);

    return (
        <CollapsableFieldset legend='Layoutobjekt' className='panelFieldset' classNameLegend='text-white'>
            {buttons.map(id => {
                return (
                    <div key={id.btnName}>
                        <button id="historyBtn">
                            <BlinkingEyeBtn type = 'local-scope' handleEvent = {true} onClick={handleEvent} id="smallBtn" name = {id.btnName} text={id.btnName} setStatus = {id.btnStatus} />
                        </button>
                        <button onClick={(e) => {handleDeleteEvent(e)} } id="historyDeleteBtn" name = {id.btnName}>X</button>
                    </div>
                )
            })}
        </CollapsableFieldset>
    );
}

export default CanvasHistoryPanel;