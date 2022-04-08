import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';
import { TextContent } from '../ui/text-content.js';

export class BusinessPlanPage extends Page {
    
    constructor() {
        super('Affärsplan');
    }

    createElement() {
        super.createElement();
        let p = new Page('Eye Marketing - Affärsplan');
        let c1 = new TextContent('h5');
        c1.content = `Tänk nu att vi skapar en plattformsoberoende webbapplikation där den erfarne marknadsföraren kan
            förmedla sina kunskaper, skapa mallar och samla allt marknadsmaterial på ett ställe. Medarbetarna som
            har andra expertområden kan lätt hitta material, återanvända, ta till sig av marknadsavdelningens kunskaper
            genom att använda mallar, typsnitt, rätt färger och inspireras av tidigare gjort material. Spara sitt
            eget material och dela med kollegor, be om granskning från marknadsavdelningen och även producera
            sitt egna material snyggt enkelt och till bra priser.
            Applikationen är kopplad till de professionella verktyg som finns för grafisk produktion, men fungerar
            som en brygga mellan verksamheten i stort och marknadsavdelningen eller kanske den anlitade reklambyrån.`;
        c1.classString = 'test'
        c1.appendToElement(this.element);

        let img1 = new Image();
        img1.fileName = '../images/EM-brygga_1549x906px.png';
        img1.id = 'imageDistrEM';
        img1.appendToElement(this.element);

        let c2 = new TextContent('h5');
        c2.content = `Varför är nu detta en bra affärsidé? Jo, tittar vi på PENG-analysen nedan som är gjord på en
            potentiell kund kan vi se vilket värde produkten kommer skapa och jämförelsevis hur liten kostanden är.
            Kan vi få kunder att förstå detta värde kommer i princip produkten att sälja sig själv.`;
        c2.appendToElement(this.element);

        let img2 = new Image();
        img2.fileName = '../images/PENG_1800x621px.png';
        img2.id = 'imagePENG';
        img2.appendToElement(this.element);

        let c3 = new TextContent('h5');
        c3.content = `Som du ser så överstiger nyttorna med enormt med den faktiska kostnaderna för att använda produkten.
        Kan man få kunden att förstå värdet med produkten kan den växa enormt på marknaden.`;
        c3.appendToElement(this.element);

        let c4 = new TextContent('h1');
        c4.content = `BUDGET`;
        c4.setClassString('pageHeader');
        c4.appendToElement(this.element);

        let c5 = new TextContent('h5');
        c5.content = `Bygger man ett hyreshus så är det en stor investering. Det kommer ta många år innan hyresintäkterna
        överstiger kostnaderna för bygget. Även när huset är fullt av hyresgäster och det
        är färdigbyggt kommer hyreshuset att årligen kosta pengar på grund av att saker går sönder,
        trapphus måste rengöras och huset underhållas. Men sakta men säkert betar intäkterna av den
        stora utgiften och till slut kommer även huset ha betalat sig och genererar vinst.
        På samma sätt kommer det vara med denna produkten. Eye Marketing är en investering i
        framtiden och det kommer ta ett antal år för produkten att etablera sig.
        Första året kommer projektet alltså gå med minusresultat på 1,8 mkr. Men redan året efter
        kommer projektet att generera vinst. Räknar vi dock in resultatet från föregående år ligger projektet
        fortfarande med ett minusresultat på 1,5 mkr. År tre däremot så generera projektet så pass
        mycket vinst att den tidigare förlusten försvinner och 1,5 mkr återstår som vinst.`;
        c5.appendToElement(this.element);

        let img3 = new Image();
        img3.fileName = '../images/Budget-tre-år_1800x653px.png';
        img3.id = 'imagePENG';
        img3.appendToElement(this.element);
    }

    getElementString() {
        return `
            <div id="businessPlanPage" class="pageConatiner">
                <h1  id="headerBusinessPlanPage" class="pageHeader">AFFÄRSPLAN</h1>
                <h5 id="textBusinessPlan">
                </h5>
            </div>
            `;
    }
}
