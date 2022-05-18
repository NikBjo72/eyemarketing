import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';
import CanvasTextPanel from '../Components/canvas-text-panel';
import CanvasLoadPanel from '../Components/canvas-load-panel';
import SyncStateToLocalStorage from '../Model/sync-state-to-local-storage';

const LayoutPanel = () => {

    const [canvasRef, setcanvasRef] = useState(useRef(null));
    const [loadState, setLoadState] = useState(true);
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
    //const [savedItems, setsavedItems] = useState();
    //const [canvasItems, setCanvasItems] = useState([]); // old otan LS
    const [canvasItems, setCanvasItems] = SyncStateToLocalStorage('canvasItems', []);

    updateState = () => {
        if (loadState === true){
            setLoadState(false);
        } else {setLoadState(true)};
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

    const onClickHandler = (buttonName, chosenLayoutSettings) => {

        if (buttonName == 'deleteLayoutBtn' ||
            buttonName == 'deleteImageBtn' ||
            buttonName == 'deleteTextBtn')
        {
            window.alert("Denna funktion är under utveckling");
            return
        }

        if( buttonName == 'addLayoutBtn' ) {
            if(chosenLayoutSettings[0] == undefined) {
                setCanvasItems([]);
            } else
            setCanvasItems(chosenLayoutSettings[0].layoutContent);
            // console.log('=> layout i layoutdelen efter klick');
            // console.log(chosenLayoutSettings[0].layoutContent);
        } else
        setCanvasItems(canvasImages => [...canvasImages, chosenLayoutSettings]);
    }

    useEffect(async () => {

        console.log(canvasItems);

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

    function Text(ctx) {
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        ctx.font = `bold 48px "verdana"`;
        ctx.fillText('Hello World', 200, 400);
    }

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
                <CanvasImagePanel onClick = {onClickHandler} />
                <CanvasTextPanel onClick = {onClickHandler} />
        </div>
        </div>
    );
}

export default LayoutPanel;