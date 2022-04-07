import { BaseElement } from "./base-element.js";

export class NavButton extends BaseElement{

    constructor(title) {
        super();
        this.title = title;
    }

    getElementString() {
        return`
        <a href="#">
            <div class="my-btn">${this.title}</div>
        </a>
        `;
    }
}
