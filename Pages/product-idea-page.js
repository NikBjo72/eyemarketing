import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';
import { TextContent } from '../ui/text-content.js';

export class ProductIdeaPage extends Page {
    
    constructor() {
        super('Produktidé');
    }

    createElement() {
        super.createElement();
        let p = new Page('Eye Marketing - Produktidé');

        let c1 = new TextContent('h5');
        c1.content = `Eye Marketing är en webbapplikation som hanterar, sammanställer och visualiserar företagets marknadsmaterial.
            Skapar förutsättningar för marknadsansvarig, marknadsavdeling eller reklambyrå att dela
            med sig av både material och kunskap till hela organisationen. Eye Marketing ger också alla på företaget
            möjlighet att skapa eget informations- eller marknadsmaterial, utan att kunna Adobes alla grafiska
            verktyg eller använda Word, Excel eller PowerPoint som inte är skapade för det syftet, då plattformen
            innehåller ett layoutverktyg som skapats med tanke på att många ska kunna använda det utan experkunskap,
            men ändå kunna skapa professionellt, säljande och organisationsrepresenterande visuellt material.
            Webbapplikationen;</br>
            • lagrar och visar företagets bilder,</br>
            • lagrar och visar logotyper och varianter av logotypen, produktspecifika logotyper, märken,</br>
            taglines m.m.
            • lagrar och visar allt skapat marknadsmaterial,</br>
            • hanterar layoutmallar för olika sorters medier, som tidningsannonser, Facebook, Instagram,
            Linked In, offermallar, produkblad m.fl.,</br>
            • lättanvänt men proffisionellt layoutverktyg där mallar, bilder, logotyper, färger, typsnitt m.m.
            är lättillgängligt och visuellt tydligt för användaren,</br>
            • exportfunktion av färdigt material beroende på användningsområde,</br>
            • möjlighet att lägga in den lokala printbutiken för offertförfrågan, samt skicka originalet med
            ett klick om avtal redan finns,</br>
            • flera leverantörer med avtalspriser för produktion av grafiskat material. T.ex. banderoller,
            visitkort, profilmaterial, dekaler, flyers, foldrar, kuvert och mycket annat.</br>
            • användarbehörigheter baserade på företagsspecifika roller,</br>
            • granskningsfunktion av material innan användning/produktion (ex. som git pull request),</br>
            • användarspecifikt, bild och layoutbibliotek. D.v.s. användaren kan återanvända sina tidigare
            layouter, sparade egna bilder och texter,</br>
            • dela layouter inom viss grupp, t.ex. offerter och produktblad bland säljare,</br>
            • samt många andra funktioner.`;
        c1.classString = 'test'
        c1.appendToElement(this.element);

        let img1 = new Image();
        img1.fileName = '../images/WBS_1800x620px.png';
        img1.id = 'imageDistrEM';
        img1.appendToElement(this.element);
    }

    getElementString() {
        return `
            <div id="ProductIdeaPage" class="pageConatiner">
                <h1  id="headerProducttIdeaPage" class="pageHeader">PRODUKTIDÉ</h1>
            </div>
            `;;
    }
}
