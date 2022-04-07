import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';
import { Button } from '../ui/button.js';

export class HomePage extends Page {
    
    constructor() {
        super('Hem');
    }

    createElement() {
        super.createElement();

        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Eye Marketing layout app');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => window.open('app.html', '_blank'));

        new Page('Eye Marketing - Hem')
    }

    getElementString() {
        return `
            <div>
                <h2 style="text-align: center;">Startsida</h2>
            </div>
            `;
    }
}
