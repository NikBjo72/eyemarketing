import {BaseElement} from './base-element.js';
import {url} from '../framework/images.js';

export class TitleBar extends BaseElement {
    
    constructor(title) {
        super();
        this.title = title;
        this.links = [];
    }
    
    addLink(title, href) {
        this.links.push({
            title,
            href
        });
    }   
    
    getElementString() {
        let links = '';
        let hamburgerLinks ='';
        for (let link of this.links) {
            links += `  <a class=" nav-link myButtonLinks">
                            <div class="my-btn">${link.title}</div>
                        </a>\n`;
            hamburgerLinks += ` <a class="mdl-navigation__link nav-link">
                                    <div>${link.title}</div>
                                </a>\n`;
        }

        return `
            <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header class="mdl-layout__header">
                    <div class="mdl-layout__header-row">
                    <!-- Title -->
                    <span class="mdl-layout-title"><img id="navEye"src="${url['Eye_small_100x66px']}"/>${this.title}</span>
                    <!-- Add spacer, to align navigation to the right -->
                    <div class="mdl-layout-spacer"></div>
                    <!-- Navigation. We hide it in small screens. -->
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        ${links}
                    </nav>
                    </div>
                </header>
                <div class="mdl-layout__drawer">
                    <span class="mdl-layout-title">${this.title}</span>
                    <nav class="mdl-navigation">
                        ${hamburgerLinks}
                    </nav>
                </div>
                <main class="mdl-layout__content">
                    <div class="page-content"><!-- Your content goes here --></div>
                </main>
            </div>
        `;
    }
}