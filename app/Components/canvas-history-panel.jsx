import React, { useState, useEffect, useRef, useContext } from 'react';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn';
import UpdateComponent from '../Helpers/update-component';

const CanvasHistoryPanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [activeBtn, setActiveBtn] = useState([]);

    const handleEvent = (btnName, btnStatus) => {  
        activeBtn.forEach((b) => {
            if(b.activeBtnName === btnName) {
                if(b.activeBtnStatus === false) {
                    b.activeBtnStatus = true;
                } else {
                    b.activeBtnStatus = false;
                }
            } else {
                b.activeBtnStatus = false;
            }
        });
        UpdateComponent(update, setUpdate);
    }

    useEffect(() => {
        setActiveBtn(
            props.canvasLayoutItems
            .filter(i => i.type !== 'canvas')
            .map(i => {
                return({
                    activeBtnName: i.id,
                    activeBtnStatus: false,
                })
            }));
    },[props.canvasLayoutItems]);

    return (
        <>
            <fieldset id="fieldsetLoad" className="panelFieldset">
                <legend className="text-white">Layoutobjekt</legend>
                {activeBtn.map(id => {
                    return (<button key={id.activeBtnName} id="navBtn"><BlinkingEyeBtn type = 'local-scope' handleEvent = {true} onClick={handleEvent} id="smallBtn" name = {id.activeBtnName} text={id.activeBtnName} setStatus = {id.activeBtnStatus}/></button>)
                })}
            </fieldset>
        </>
    );
}

export default CanvasHistoryPanel;