import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';
import CanvasTextPanel from '../Components/canvas-text-panel';
import CanvasLoadPanel from '../Components/canvas-load-panel';

const LayoutPanel = () => {

    const [loadState, setLoadState] = useState(true);
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
    const [savedItems, setsavedItems] = useState();

    const [canvasItems, setCanvasItems] = useState(
        [   
            {
                "type": "img",
                "order": 0,
                "imageName": "bild1",
                "imageX": 50,
                "imageY": 50,
                "imageWidth": 200,
            }, 
            {   
                "type": "img",
                "order": 0,
                "imageName": "bild2",
                "imageX": 300,
                "imageY": 50,
                "imageWidth": 200,
            }
        ]
    );

    updateState = () => {
        if (loadState === true){
            setLoadState(false);
        } else {setLoadState(true)};
    }

    const widthOnChangeHandler = (e) => {
        setWidth(e.target.value);
    }

    const heightOnChangeHandler = (e) => {
        setHeight(e.target.value);
    }

    const onClickHandler = (buttonName, imageSettings) => {

        setCanvasItems(canvasImages => [...canvasImages, imageSettings]);

        if( buttonName == 'addLayoutBtn') {
            setCanvasItems(imageSettings[0].layoutContent);
            console.log(canvasItems);
        }
    }

    const canvasRef = useRef(null);

    useEffect(() => {
        console.log('canvasItems i use effect');
        console.log(canvasItems);

        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        // ctx.beginPath();
        // ctx.fillStyle = 'red';
        // ctx.ellipse(200, 300, 150, 150, 0, 0, 2 * Math.PI);
        // ctx.fill();

        Text(ctx);

        for(i=0; i < canvasItems.length; ++i) {

            if(canvasItems[i].type == 'img') {
                const img = new CanvasImage(canvasItems[i]);
                img.src = url[canvasItems[i].imageName];
                img.imageHeight = img.getImageHeight();
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
                <fieldset id="fieldsetStorlek">
                    <legend className="text-white">Storlek layout</legend>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Bredd</label>
                        <input onChange = { widthOnChangeHandler } value = {`${width}`} name="width" type="text" placeholder='Layout bredd'/>
                    </div>
                    <div className='inputHolder'>
                        <label className="inputlabel text-white">Höjd</label>
                        <input onChange = { heightOnChangeHandler } value = {`${height}`} name="height" type="text" placeholder='Layout höjd'/>
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