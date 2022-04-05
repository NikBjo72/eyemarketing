import { TitleBar } from "./ui/title-bar.js";
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './Pages/home-page.js'

console.log('Hej från main.js');

export class Main extends ApplicationBase {

    constructor() {
        super("Eye Marketing");

        this.addRoute('Hem', new HomePage(), true);
        this.addRoute('Affärsplan', null);
        this.addRoute('Produktidé', null);
        this.addRoute('Kontakt', null);
        this.addRoute('App', null);
    }
}

export let application = new Main();
application.show($('body'));

// let tb = new TitleBar ('Eye Marketing');
// tb.addLink("Hem", "#");
// tb.addLink("Affärsplan", "#");
// tb.addLink("Produktidé", "#");
// tb.addLink("Kontakt", "#");
// tb.addLink("App", "#");
// tb.appendToElement($('header'));