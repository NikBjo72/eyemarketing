import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class HomePage extends Page {
    
    constructor() {
        super();
    }

    createElement() {
        super.createElement();


    }

    getElementString() {
        return '<div style="text-align: center;"> Hej!</div>';
    }
}
