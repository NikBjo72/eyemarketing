import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
    
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    activateRoute(route) {
        let content = this.titleBar.element.find('.page-content');
        content.empty();
        
        this.routeMap[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false, href = '') {
        this.titleBar.addLink(id, href);

        this.routeMap[id] = pageObject;

        if (defaultRoute) {
            this.defaultRoute = id;
        }
    }

    show(element) {
        this.titleBar.appendToElement(element);

        this.titleBar.element.find('.nav-link').click((event) => {

            let route = '';
            let href = this.titleBar.links.find(e => e.title == event.target.innerHTML);
            if (href.href != "") {
                route = href.href;
                window.open(route, '_blank');
            } else {
            route = event.target.innerHTML;
            this.activateRoute(route.trim());
            }
            
        });

        if (this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
}