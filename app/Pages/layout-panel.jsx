import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';

const LayoutPanel = () => {

    const [loadImage, setLoadImage] = useState(true);
    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');
    const [canvasImages, setCanvasImages] = useState(
        [   
            {
                "imageName": "bild1",
                "imageX": 50,
                "imageY": 50,
                "imageWidth": 200,
                "imageHeight": 140
            }, 
            {
                "imageName": "bild2",
                "imageX": 300,
                "imageY": 300,
                "imageWidth": 200,
                "imageHeight": 140
            }
        ]
    );
    const [canvasImagesObjects, setCanvasImagesObjects] = useState({"newState": []});

    const widthOnChangeHandler = (e) => {
        setWidth(e.target.value);
    }

    const heightOnChangeHandler = (e) => {
        setHeight(e.target.value);
    }

    const onClickHandler = (buttonName, imageSettings) => {

        const ctx = canvasRef.current.getContext('2d');

        var newState = [];

        for(i=0; i < canvasImages.length; ++i) {
            canvasImages[i].imageName = new CanvasImage(ctx, canvasImages[i]);
            var newImage = canvasImages[i].imageName;

            newState.push(newImage);
        }

        setCanvasImagesObjects({ newState });

        if(loadImage) {
            setLoadImage(false);
        } else {
            setLoadImage(true);
        }

    }

    const canvasRef = useRef(null);
    //console.log(canvasRef);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.ellipse(200, 300, 150, 150, 0, 0, 2 * Math.PI);
        ctx.fill();
    }, []);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        Text();

        if(canvasImagesObjects.newState.length != 0) {
            console.log('Kör for-loop');

        for(i = 0; i < canvasImagesObjects.newState.length; i++) {
            console.log(`Bild: ${i}`);
            console.log(canvasImagesObjects.newState[i]);
            canvasImagesObjects.newState[i].load();
        }
        } else { console.log('Kör inte for-loop'); }

    },[loadImage]);

    function Text() {
        const ctx = canvasRef.current.getContext('2d');
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