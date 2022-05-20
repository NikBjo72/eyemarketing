import React from 'react';
import { useState, useEffect, useRef, useContext } from 'react';
import { url } from '../../Helpers/images';
import { CanvasImage } from '../canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../canvas-image-panel';
import CanvasTextPanel from '../canvas-text-panel';
import CanvasLoadPanel from '../canvas-load-panel';
import CanvasSavePanel from '../canvas-save-panel';
import SyncStateToLocalStorage from '../../Model/sync-state-to-local-storage';
import postMyModelData from '../../Model/post-my-model-data';
import urls from '../../Model/fetch-url';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import LayoutDatabaseContext from '../layout-database-context';

const LayoutPanel = () => {

    const layoutDatabaseCtx = useContext(LayoutDatabaseContext);
    const didMount = useRef(false);
    const [canvasRef, setcanvasRef] = useState(useRef(null));
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
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

    const onClickHandler = async (buttonName, object) => {

        if (buttonName === 'deleteImageBtn' ||
            buttonName === 'deleteTextBtn')
        {
            window.alert("Denna funktion är under utveckling");
            return
        }

        if(buttonName === 'addLayoutBtn') {
            if(object[0] === undefined) {
                setCanvasItems([]);
            } else
            setCanvasItems(object[0].layoutContent);
        }

        else if (buttonName === 'addImageBtn') {
            setCanvasItems(canvasImages => [...canvasImages, object]);
        }
        
        else if (buttonName === 'saveLayoutBtn') {
            let saveLayout = {
                id: undefined,
                name: object,
                layoutContent: canvasItems
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

        for(i=0; i < canvasItems.length; ++i) {

            if(canvasItems[i].type === 'canvas') {

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
                ctx.fillText(`${canvasItems[i].content}`, canvasItems[i].X, canvasItems[i].Y);
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
                <canvas id="canvas" ref={canvasRef} height={height} width={width}></canvas>
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
                    <NotificationContainer />
            </div>
            
        </div>
    );
}

export default LayoutPanel;