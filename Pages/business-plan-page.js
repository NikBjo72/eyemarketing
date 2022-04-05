import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class BusinessPlanPage extends Page {
    
    constructor() {
        super('Affärsplan');
    }

    createElement() {
        super.createElement();
    }

    getElementString() {
        return '<h2 style="text-align: center;">Affärsplan</h2>';
    }
}
