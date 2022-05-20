import React, { useState, useEffect, useRef, useContext } from 'react';

const CanvasHistoryPanel = (props) => {

    const [update, setUpdate] = useState(false);
    const [objectNameList, setObjectNameList] = useState([]);

    const Update = () => {
        if (update == false) {
            setUpdate(true);
        } else setUpdate(false);
    }

    useEffect(() => {
        console.log(props.canvasItems);
        //props.canvasItems.map()
    });

    return (
        <fieldset id="fieldsetLoad" className="panelFieldset">
            <legend className="text-white">Layoutobjekt</legend>
        </fieldset>
        
    );
}

export default CanvasHistoryPanel;