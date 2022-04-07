import {BaseElement} from '../ui/base-element.js';
import { Footer } from '../ui/Footer.js';

export class Page extends BaseElement {
    constructor(pageTitle) {
        super();
        this.changePageTitle(pageTitle);
    }

    changePageTitle(pageTitle) {
        let content = document.querySelector('title');
        content.innerText = pageTitle;
    }

    createElement() {
        super.createElement();

        let f = new Footer();
        f.appendToElement(this.element);
    }
}