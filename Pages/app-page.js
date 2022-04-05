import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class AppPage extends Page {
    
    constructor() {
        super('App');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<h2 style="text-align: center;">App</h2>';
    }
}
