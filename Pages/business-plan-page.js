import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class BusinessPlanPage extends Page {
    
    constructor() {
        super('Affärsplan');
    }

    createElement() {
        super.createElement();
        let p = new Page('Eye Marketing - Affärsplan');
    }

    getElementString() {
        return `
            <div>
                <h2 style="text-align: center;">Affärsplan</h2>
            </div>
            `;
    }
}
