import $ from "../node_modules/jquery/dist/jquery.js";

export class BaseElement {
    
    constructor() {
        this.element = null;  // jQuery object
    }
    
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }
    
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }
    
    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }
    
    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}