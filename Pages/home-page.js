import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class HomePage extends Page {
    
    constructor() {
        super('Hem');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<h2 style="text-align: center;">Startsida</h2>';
    }
}
