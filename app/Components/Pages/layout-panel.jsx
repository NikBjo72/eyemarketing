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
import SyncStateToLocalStorage from '../../Model/sync-state-to-local-storage';
import postMyModelData from '../../Model/post-my-model-data';
import urls from '../../Model/fetch-url';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LayoutDatabaseContext from '../layout-database-context';
import FilterAndMap from '../../Helpers/filter-and-map';
import ChangeLayoutItemContext from '../change-layout-item-context';
import { ChangeLayoutItemContextProvider } from '../change-layout-item-context';

const LayoutPanel = () => {

    const layoutDatabaseCtx = useContext(LayoutDatabaseContext);
    const [canvasRef, setcanvasRef] = useState(useRef(null));
    const [canvasLayoutItems, setCanvasLayoutItems] = SyncStateToLocalStorage('canvasItems', []);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    const setCanvasSize = (value, target) => {
        if(canvasLayoutItems.length === 0) {
            var newCanvasSize = [
                {
                id: "canvas",
                type: "canvas",
                width: 800,
                height: 500
                }
            ];
        } else {
            var newCanvasSize = [...canvasLayoutItems]
        }
        newCanvasSize.find((i) => i.type)[target] = parseInt(value);
        setCanvasLayoutItems(newCanvasSize);
    }

    useEffect(() => {
        setWidth(FilterAndMap(canvasLayoutItems, 'canvas', 'width'));
        setHeight(FilterAndMap(canvasLayoutItems, 'canvas', 'height'));
    }, [canvasLayoutItems])

    useEffect(() => {
        setCanvasSize();
    }, [])

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

    const onClickHandler = async (buttonName, object) => {

        if (buttonName === 'deleteImageBtn' ||
            buttonName === 'deleteTextBtn')
        {
            window.alert("Denna funktion är under utveckling");
            return
        }

        if(buttonName === 'addLayoutBtn') {
            if(object[0] === undefined) {
                setCanvasLayoutItems([]);
            } else
            setCanvasLayoutItems(object[0].layoutContent);

            if(object.length === 0) {
                setCanvasSize();
            }
        }

        else if (buttonName === 'addImageBtn') {
            setCanvasLayoutItems([...canvasLayoutItems, object]);
        }

        else if (buttonName === 'addTextBtn') {
            setCanvasLayoutItems([...canvasLayoutItems, object]);
        }
        
        else if (buttonName === 'saveLayoutBtn') {
            let saveLayout = {
                id: undefined,
                name: object,
                removable: true,
                layoutContent: canvasLayoutItems
            }
            let response = await postMyModelData(urls.savedLayouts, saveLayout);
            if(response === 201) {
                NotificationManager.success('Layout sparad');
                layoutDatabaseCtx.updateDatabase();
            }
            else {
                NotificationManager.error('Prova att uppdatera sidan och försök igen.', 'Gick inte spara!', 5000);
            }
        }
    }

    useEffect(async () => {

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);

        for(i=0; i < canvasLayoutItems.length; ++i) {

            if(canvasLayoutItems[i].type == 'img') {
                const img = new CanvasImage(canvasLayoutItems[i]);
                img.src = url[canvasLayoutItems[i].id];
                img.imageHeight = await img.getImageHeight();
                ctx.drawImage(img.image, img.X, img.Y, img.imageWidth, img.imageHeight);
            }
            else if(canvasLayoutItems[i].type == 'text') {

                ctx.fillStyle = `${canvasLayoutItems[i].color}`;
                ctx.font = `${canvasLayoutItems[i].style} ${canvasLayoutItems[i].fontSize}px "${canvasLayoutItems[i].font}"`;
                ctx.fillText(`${canvasLayoutItems[i].content}`, canvasLayoutItems[i].X, canvasLayoutItems[i].Y);
            }  
        }
    });

    return (
        <ChangeLayoutItemContextProvider>
            <div id="container" className={"row"}>
                <div id="canvasContainer">
                    <canvas id="canvas" ref={canvasRef} height={height} width={width}></canvas>
                </div>

                <div id="panelContainer" className={"colOne"}>
                        <fieldset id="fieldsetStorlek" className='panelFieldset'>
                            <legend className="text-white">Storlek layout</legend>
                            <div className='inputHolder'>
                                <label className="inputlabel text-white">Bredd</label>
                                <input onChange = { canvasOnChangeHandler } value={width} name="width" type="number"/>
                            </div>
                            <div className='inputHolder'>
                                <label className="inputlabel text-white">Höjd</label>
                                <input onChange = { canvasOnChangeHandler } value={height} name="height" type="number"/>
                            </div>
                        </fieldset>
                        <CanvasHistoryPanel canvasLayoutItems = {canvasLayoutItems} />
                        <CanvasLoadPanel onClick = {onClickHandler} />
                        <CanvasSavePanel onClick = {onClickHandler} />
                        <CanvasImagePanel onClick = {onClickHandler} />
                        <CanvasTextPanel onClick = {onClickHandler} />
                        <NotificationContainer />
                </div> 
            </div>
        </ChangeLayoutItemContextProvider>
    );
}

export default LayoutPanel;