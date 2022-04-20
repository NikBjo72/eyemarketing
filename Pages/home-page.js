import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';

export class HomePage extends Page {
    
    constructor() {
        super('Hem');
    }

    createElement() {
        super.createElement();

        let img = new Image();
        img.fileName = 'Eye_Marketing_800x386px';
        img.id = 'logoHomepage';
        img.appendToElement(this.element);


        new Page('Eye Marketing - Hem')
    }

    getElementString() {
        return `
            <div id="homePage" class="pageConatiner">
                <h5 id="initialSummaryHomePage">Har du någon gång suttit med Word eller Excel och försökt göra presentationsmaterial för till
                exempel en produkt som du vill ha med dig till ett kundmöte?
                Innan mötet suttit vid datorn och slitit ditt hår eller skägg när du inte kan hitta logotyper eller
                bilder som ligger utspridda på någon lagringsserver. När texter och bilder beter sig som deltagarna
                i leken ”hela havet stormar”, så fort du försöker ändra eller flytta ett objekt i Word?</br></br>
                I denna affärsplan presenterar jag en lösning som kommer kunna förändra en hel organisations
                arbetssätt när det gäller att hantera och ta fram kommunikationsmaterial, Eye Marketing!
                Eye Marketing är ett molnbaserat webbverktyg som hjälper dig och dina kollegor att samla företagets
                marknadsmaterial på ett ställe, så att du tydligt ser dina resurser och enkelt kan använda
                dem. Det ger dig möjlighet att skapa professionellt material för både tidningsmedier, produktblad,
                digitala och sociala medier. Spara, skriva ut och exportera.
                Företaget kommer spara tid, uppfattas som professionella och framför allt öka antalet affärer!</h5>
                <h1 id="headerHomePage" class="pageHeader">KEEP YOUR BRAND STRONG</h1>
            </div>
            `;
    }
}
