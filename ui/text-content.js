import { BaseElement } from "./base-element.js";

export class TextContent extends BaseElement{

    constructor(style) {
        super();
        this.id = '';
        this.content = '';
        this.style = style;
    }

    getElementString() {
        return`
            <${this.style} id="${this.id}"class="${this.classString}">
            ${this.content}
            </${this.style}>
        `;
    }
    setClassString(classes) {
        this.classString = classes;
    }
}
