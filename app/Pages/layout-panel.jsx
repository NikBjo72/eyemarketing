import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { url } from '../Helpers/images';
import { CanvasImage } from '../Components/canvas-image';
import './layout-panel.css';
import CanvasImagePanel from '../Components/canvas-image-panel';

const LayoutPanel = () => {

    const [width, setWidth] = useState('800');
    const [height, setHeight] = useState('500');

    const widthOnChangeHandler = (e) => {
        setWidth(e.target.value);
    }

    const heightOnChangeHandler = (e) => {
        setHeight(e.target.value);
    }

    const canvasRef = useRef(null);
    console.log(canvasRef);

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
        //CanvasImage(ctx, 'bild1', 200);
        let newImage = new CanvasImage(ctx);
        newImage.load();
    }, []);

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
                <CanvasImagePanel />
        </div>
        </div>
    );
}

export default LayoutPanel;