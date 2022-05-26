import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { url } from '../../Helpers/images';
import { CanvasImage } from '../canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../canvas-image-panel';
import CanvasTextPanel from '../canvas-text-panel';
import CanvasLoadPanel from '../canvas-load-panel';
import CanvasSavePanel from '../canvas-save-panel';
import CanvasHistoryPanel from '../canvas-history-panel';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import FilterAndMap from '../../Helpers/filter-and-map';
import ChangeLayoutItemContext from '../ContextAndHooks/change-layout-item-context';
import useDatabase from '../ContextAndHooks/layout-database-context';
import CollapsableFieldset from '../collapsable-fieldset';

const LayoutPanel = () => {

    const ChangeLayoutItemCtx = useContext(ChangeLayoutItemContext);
    const [canvasRef, setcanvasRef] = useState(useRef(null));
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const { layoutDatabase, layoutNames, updateDatabase } = useDatabase();

    const setCanvasSize = (value, target) => {
        if(ChangeLayoutItemCtx.canvasLayoutItems.length === 0) {
            var newCanvasSize = [
                {
                id: "canvas",
                type: "canvas",
                width: 800,
                height: 500
                }
            ];
        } else {
            var newCanvasSize = [...ChangeLayoutItemCtx.canvasLayoutItems]
        }
        newCanvasSize.find((i) => i.type)[target] = parseInt(value);
        ChangeLayoutItemCtx.setCanvasLayoutItems(newCanvasSize);
    }

    useEffect(() => {
        setWidth(FilterAndMap(ChangeLayoutItemCtx.canvasLayoutItems, 'canvas', 'width'));
        setHeight(FilterAndMap(ChangeLayoutItemCtx.canvasLayoutItems, 'canvas', 'height'));
    }, [ChangeLayoutItemCtx.canvasLayoutItems])

    useEffect(() => {
        setCanvasSize();
    }, [])

    useEffect(() => {
        if (ChangeLayoutItemCtx.dublicatedIdError) {
            NotificationManager.error('Byt namn och försök igen.', 'Ej unikt namn!', 5000);
            ChangeLayoutItemCtx.setDublicatedIdError(false);
        }

    },[ChangeLayoutItemCtx.dublicatedIdError])

    updateState = (state, setState) => {
        if (state === true){
            setState(false);
        } else {setState(true)};
    }

    const canvasOnChangeHandler = (e) => {

        if(e.target.name == 'width') {
            setCanvasSize(e.target.value, e.target.name);
        }
        else if(e.target.name == 'height') {
            setCanvasSize(e.target.value, e.target.name);
        }
    }

    useEffect(async () => {
        console.log('canvasLayoutItems: ',ChangeLayoutItemCtx.canvasLayoutItems);

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);

        for(i=0; i < ChangeLayoutItemCtx.canvasLayoutItems.length; ++i) {

            if(ChangeLayoutItemCtx.canvasLayoutItems[i].type == 'img') {
                const img = new CanvasImage(ChangeLayoutItemCtx.canvasLayoutItems[i]);
                img.src = url[ChangeLayoutItemCtx.canvasLayoutItems[i].imageName];
                img.imageHeight = await img.getImageHeight();
                ctx.drawImage(img.image, img.X, img.Y, img.imageWidth, img.imageHeight);
            }
            else if(ChangeLayoutItemCtx.canvasLayoutItems[i].type == 'text') {

                ctx.fillStyle = `${ChangeLayoutItemCtx.canvasLayoutItems[i].color}`;
                ctx.font = `${ChangeLayoutItemCtx.canvasLayoutItems[i].style} ${ChangeLayoutItemCtx.canvasLayoutItems[i].fontSize}px "${ChangeLayoutItemCtx.canvasLayoutItems[i].font}"`;
                ctx.fillText(`${ChangeLayoutItemCtx.canvasLayoutItems[i].content}`, ChangeLayoutItemCtx.canvasLayoutItems[i].X, ChangeLayoutItemCtx.canvasLayoutItems[i].Y);
            }  
        }
    });

    return (
        <div id="container" className={"row"}>
            <div id="canvasContainer">
                <canvas id="canvas" ref={canvasRef} height={height} width={width}></canvas>
            </div>
            <div id="panelContainer" className={"colOne"}>
                <CollapsableFieldset legend='Storlek layout' className='panelFieldset'classNameLegend='text-white'>
                    <legend className="text-white">Storlek layout</legend>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Bredd</label>
                        <input onChange = { canvasOnChangeHandler } value={width} name="width" type="number"/>
                    </div>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Höjd</label>
                        <input onChange = { canvasOnChangeHandler } value={height} name="height" type="number"/>
                    </div>
                </CollapsableFieldset>
                <CanvasHistoryPanel />
                <CanvasLoadPanel />
                <CanvasSavePanel />
                <CanvasImagePanel />
                <CanvasTextPanel />
                <NotificationContainer />
            </div> 
        </div>
    );
}

export default LayoutPanel;