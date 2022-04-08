import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
    
    constructor(fileName) {
        super();
        this.fileName = fileName;
        this.id = null;
        this.link = false;
        this.href = '';
        this.target = '_blank';
    }
    
    getElementString() {
        if (this.link)
        {
            return `
                <a href="${this.href}" target="${this.target}"><img id="${this.id}"src="${this.fileName}" style="width: 100%;"/></a>
            `;
        } else {
        return `
            <img id="${this.id}"src="${this.fileName}" style="width: 100%;" />
        `;
        }
    }
}