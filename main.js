import { TitleBar } from "./ui/title-bar.js";
import { ApplicationBase } from './framework/application-base.js';
import { HomePage } from './Pages/home-page.js';
import { BusinessPlanPage } from './Pages/business-plan-page.js';
import { ProductIdeaPage } from "./Pages/product-idea-page.js";
import { ContactPage } from "./Pages/contact-page.js";
import { AppPage } from "./Pages/app-page.js";
import $ from "./node_modules/jquery/dist/jquery.js";

export class Main extends ApplicationBase {

    constructor() {
        super("Eye Marketing");

        this.addRoute('Hem', new HomePage(), true);
        this.addRoute('Affärsplan', new BusinessPlanPage());
        this.addRoute('Produktidé', new ProductIdeaPage());
        this.addRoute('Kontakt', new ContactPage());
        this.addRoute('App', new AppPage(), false, 'app.html');
    }
}

export let application = new Main();
application.show($('body'));