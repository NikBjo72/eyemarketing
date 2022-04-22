import React from 'react';
import { BlinkingEyeBtn } from './blinking-eye-btn';
import { Card } from './card';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: ['bild1', 'bild2', 'bild3'],
            logos: ['logo1', 'logo2', 'logo3'],
            colors: ['color1', 'color2', 'color3']
        }
        console.log(this.state.images);
    }
    
    render() {
        return (
            <div id="contentContainer" class="row">
                <div id="browser" class="colTwo">

                        {this.state.images.map((image) => (
                            <Card url = {image} tags = {['foto', 'glada', 'människor', 'kontor', 'skissa', 'presentation']}/>
                        ))}
                </div>
                <div id="menu" class="colOne">
                    <ul>
                        <BlinkingEyeBtn text = 'LOGO'/>
                        <BlinkingEyeBtn text = 'BILDER'/>
                        <BlinkingEyeBtn text = 'FÄRGER'/>
                    </ul>
                </div>
            </div>
        );
    }
}