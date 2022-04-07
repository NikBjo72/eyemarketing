import { BaseElement } from "./base-element.js";

export class Button extends BaseElement{

    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return`
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                style="${this.styleString}">
                ${this.title}
            </button>
        `;
    }

    setStyleString(style) {
        this.styleString = style;
    }
}
