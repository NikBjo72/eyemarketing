import React from 'react';
import './layout-panel.css';

const LayoutPanel = () => {

    const canvas = React.useRef();
    console.log(canvas);

    React.useEffect(() => {
        const ctx = canvas.current.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.ellipse(300, 200, 150, 150, 0, 0, 2*Math.PI);
        ctx.fill();
        
        //Text();

    });

    const Text = () => {
        ctx.beginPath();
        ctx.font = 'bold 48px serif';
        ctx.fillText('Hello World', 50, 200);
    }

    return (
        <div id="container" className={"row"}>
        <div id="canvasContainer">

        <canvas id="canvas" ref={canvas} height={"500px"} width={"1000px"}>
            
        </canvas>

        </div>
        <div id="panelContainer" className={"colOne"}>
            <ul>
                
            </ul>
        </div>
        </div>
    );
}

export default LayoutPanel;