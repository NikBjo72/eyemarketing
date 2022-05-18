import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';
import CanvasTextPanel from '../Components/canvas-text-panel';
import CanvasLoadPanel from '../Components/canvas-load-panel';
import CanvasSavePanel from '../Components/canvas-save-panel';
import SyncStateToLocalStorage from '../Model/sync-state-to-local-storage';
import postMyModelData from '../Model/post-my-model-data';
import urls from '../Model/fetch-url';

const LayoutPanel = () => {

    const didMount = useRef(false);
    const [canvasRef, setcanvasRef] = useState(useRef(null));
    const [saveState, setSaveState] = useState(true);
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
    const [saveLayout, setSaveLayout] = useState({
        id: undefined,
        name: undefined,
        layoutContent: undefined
    });
    //const [canvasItems, setCanvasItems] = useState([]); // old otan LS
    const [canvasItems, setCanvasItems] = SyncStateToLocalStorage('canvasItems', []);

    updateState = (state, setState) => {
        if (state === true){
            setState(false);
        } else {setState(true)};
    }

    const canvasOnChangeHandler = (e) => {

        const setItems = (target, value) => {
            var newCanvasItems = [...canvasItems];
            newCanvasItems.find((i) => i.type)[value] = parseInt(target);
            setCanvasItems(newCanvasItems);
        }

        if(e.target.name == 'width') {

            setWidth(e.target.value);
            setItems(e.target.value, e.target.name);
        }
        else if(e.target.name == 'height') {

            setHeight(e.target.value);
            setItems(e.target.value, e.target.name);
        }
    }

    const onClickHandler = (buttonName, object) => {

        if (buttonName == 'deleteLayoutBtn' ||
            buttonName == 'deleteImageBtn' ||
            buttonName == 'deleteTextBtn')
        {
            window.alert("Denna funktion är under utveckling");
            return
        }

        if(buttonName == 'addLayoutBtn') {
            if(object[0] == undefined) {
                setCanvasItems([]);
            } else
            setCanvasItems(object[0].layoutContent);
        }
        else if (buttonName == 'addImageBtn') {
            setCanvasItems(canvasImages => [...canvasImages, object]);
        }
        else if (buttonName == 'saveLayoutBtn') {
            setSaveLayout({
                ...saveLayout,
                name: object,
                layoutContent: canvasItems
            });
            updateState(saveState, setSaveState);
        }
    }

    useEffect(async () => {
        if ( !didMount.current ) {
            return didMount.current = true;
        }
        await postMyModelData(urls.savedLayouts, saveLayout);
    },[saveLayout]);

    useEffect(async () => {

        console.log('efter saveBtn: ', saveLayout);

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);

        for(i=0; i < canvasItems.length; ++i) {

            if(canvasItems[i].type == 'canvas') {

                setWidth(canvasItems[i].width);
                setHeight(canvasItems[i].height);
            }
            else if(canvasItems[i].type == 'img') {
                const img = new CanvasImage(canvasItems[i]);
                img.src = url[canvasItems[i].imageName];
                img.imageHeight = await img.getImageHeight();
                ctx.drawImage(img.image, img.imageX, img.imageY, img.imageWidth, img.imageHeight);
            }
            else if(canvasItems[i].type == 'text') {

                ctx.fillStyle = `${canvasItems[i].color}`;
                ctx.font = `${canvasItems[i].style} ${canvasItems[i].fontSize}px "${canvasItems[i].font}"`;
                ctx.fillText(`${canvasItems[i].text}`, canvasItems[i].textX, canvasItems[i].textY);
            }  
        }
    });

    // function Text(ctx) {
    //     ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
    //     ctx.font = `bold 48px "verdana"`;
    //     ctx.fillText('Hello World', 200, 400);
    // }

    return (
        <div id="container" className={"row"}>
        <div id="canvasContainer">

        <canvas id="canvas" ref={canvasRef} height={height} width={width}>   
        </canvas>

        </div>
        <div id="panelContainer" className={"colOne"}>
                <fieldset id="fieldsetStorlek" className='panelFieldset'>
                    <legend className="text-white">Storlek layout</legend>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Bredd</label>
                        <input onChange = { canvasOnChangeHandler } value = {`${width}`} name="width" type="number"/>
                    </div>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Höjd</label>
                        <input onChange = { canvasOnChangeHandler } value = {`${height}`} name="height" type="number"/>
                    </div>
                </fieldset>
                <CanvasLoadPanel onClick = {onClickHandler} />
                <CanvasSavePanel onClick = {onClickHandler} />
                <CanvasImagePanel onClick = {onClickHandler} />
                <CanvasTextPanel onClick = {onClickHandler} />
        </div>
        </div>
    );
}

export default LayoutPanel;