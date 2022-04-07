import { BaseElement } from "./base-element.js";

export class Footer extends BaseElement{

    constructor() {
        super();
    }

    getElementString() {
        return`
            <footer class="mdl-mini-footer">
                <div class="mdl-mini-footer__left-section">
                  <div class="mdl-logo">Title</div>
                  <ul class="mdl-mini-footer__link-list">
                    <li><a href="#">Help</a></li>
                    <li><a href="#">Privacy & Terms</a></li>
                  </ul>
                </div>
            </footer>
        `;
    }
}
