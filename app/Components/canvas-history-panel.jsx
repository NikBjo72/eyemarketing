import React, { useState, useEffect, useRef, useContext } from 'react';
import BlinkingEyeBtn from './BlinkingEye/blinking-eye-btn'

const CanvasHistoryPanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [activeBtn, setActiveBtn] = useState([]);

    const Update = () => {
        if (update == false) {
            setUpdate(true);
        } else setUpdate(false);
    }

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
        Update();
    }

    useEffect(() => {

        setActiveBtn(
            props.canvasItems
            .filter(i => i.type !== 'canvas')
            .map(i => {
                return({
                    activeBtnName: i.id,
                    activeBtnStatus: false,
                })
            }));
    },[props.canvasItems]);

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