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
            props.canvasItems.map(i => {
                return({
                    activeBtnName: i.id,
                    activeBtnStatus: false,
                })
        }));

        if(activeBtn.length > 0) {
        console.log('find: ',activeBtn.find(b => b.activeBtnName == 'bild2').activeBtnStatus);
        }
    },[props.canvasItems]);

    return (
        <>
            <fieldset id="fieldsetLoad" className="panelFieldset">
                <legend className="text-white">Layoutobjekt</legend>
                {activeBtn.map(id => {
                    return (<button id="navBtn"><BlinkingEyeBtn key={id.activeBtnName} type = 'local-scope' handleEvent = {true} onClick={handleEvent} id="smallBtn" name = {id.activeBtnName} text={id.activeBtnName} setStatus = {id.activeBtnStatus}/></button>)
                })}
            </fieldset>
        </>
    );
}

export default CanvasHistoryPanel;