import React from 'react';
import { BlinkingEyeBtn } from './blinking-eye-btn';
import { Card } from './card';

export class ContentBrowser extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id="contentContainer" class="row">
                <div id="browser" class="colTwo">
                 <Card url = 'bild1' tags = {['foto', 'glada', 'människor', 'kontor', 'skissa', 'presentation']}/>
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