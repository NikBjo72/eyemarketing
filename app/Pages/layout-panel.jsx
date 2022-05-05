import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';

const LayoutPanel = () => {

    const [loadState, setLoadState] = useState(true);
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
    const [canvasImages, setCanvasImages] = useState(
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

        setCanvasImages(canvasImages => [...canvasImages, imageSettings]);
    }

    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.ellipse(200, 300, 150, 150, 0, 0, 2 * Math.PI);
        ctx.fill();

        Text(ctx);

        for(i=0; i < canvasImages.length; ++i) {
            const img = new CanvasImage(canvasImages[i]);
            img.src = url[canvasImages[i].imageName];
            img.imageHeight = img.getImageHeight();
            ctx.drawImage(img.image, img.imageX, img.imageY, img.imageWidth, img.imageHeight);
        }
    });

    function Text(ctx) {
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        ctx.beginPath();
        ctx.font = 'bold 48px serif';
        ctx.fillText('Hello World', 200, 400);
    }

    return (
        <div id="container" className={"row"}>
        <div id="canvasContainer">

        <canvas id="canvas" ref={canvasRef} height={height} width={width}>   
        </canvas>

        </div>
        <div id="panelContainer" className={"colOne"}>
            <label></label>
                <fieldset id="fieldsetStorlek">
                    <legend className="text-white">Storlek layout</legend>
                    <input onChange = { widthOnChangeHandler } value = {`${width}`} type="text" placeholder='Layout bredd'/>
                    <input onChange = { heightOnChangeHandler } value = {`${height}`} type="text" placeholder='Layout höjd'/>
                </fieldset>
                <CanvasImagePanel onClick = {onClickHandler}/>
        </div>
        </div>
    );
}

export default LayoutPanel;