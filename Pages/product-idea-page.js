import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class ProductIdeaPage extends Page {
    
    constructor() {
        super('Produktidé');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<h2 style="text-align: center;">Produktidé</h2>';
    }
}
