import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class ContactPage extends Page {
    
    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<h2 style="text-align: center;">Kontakt</h2>';
    }
}
