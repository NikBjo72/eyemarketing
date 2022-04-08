import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';

export class ContactPage extends Page {
    
    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
        let p = new Page('Eye Marketing - Kontakt');
    }

    getElementString() {
        return `
            <div id="contactPage" class="pageConatiner">
                <h1 id="headerContaktPage" class="pageHeader"">KONTAKT</h1>
                <span class="material-icons">home</span>
                <span class="material-icons">email</span>
            </div>
            `;
    }
}
