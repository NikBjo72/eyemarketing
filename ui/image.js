import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
    
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.id = null;
    }
    
    getElementString() {
        return `
            <img id="${this.id}"src="${this.fileName}" style="width: 100%;" />
        `;
    }
}