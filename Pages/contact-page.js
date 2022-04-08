import {Page} from '../framework/page.js';
import {Image} from '../ui/image.js';
import {application} from '../main.js';
import { TextContent } from '../ui/text-content.js';

export class ContactPage extends Page {
    
    constructor() {
        super('Kontakt');
    }

    createElement() {
        super.createElement();
        let p = new Page('Eye Marketing - Kontakt');

        let img1 = new Image();
        img1.fileName = '../images/Avatar-Niklas_398x398px.png';
        img1.id = 'imageAvatarNiklas';
        img1.appendToElement(this.element);

        let c2 = new TextContent('h5');
        c2.content = `
            Det är jag som är Niklas Björk och har denna idén. </br>
            Tycker du det verkar vara ett spännande projekt så kontakta gärna mig. </br>
            Är du nyfiken på vem jag är, har gjort tidigare i livet eller vad jag pysslar med nu, </br>
            titta då in på mitt digitala cv eller besök min profil på LinkedIn. </br>
            Allt gott!  //Niklas </br>
        `;
        c2.id = 'niklasText';
        c2.appendToElement(this.element);

        let img2 = new Image();
        img2.fileName = '../images/LinkedIn-black-blue_295x75px.png';
        img2.id = 'imgLinkedIn';
        img2.link = true;
        img2.href = 'https://www.linkedin.com/in/nbjork/';
        img2.appendToElement(this.element);

        let img3 = new Image();
        img3.fileName = '../images/Icon-niklas-CV_300x209px.png';
        img3.id = 'imgCV';
        img3.link = true;
        img3.href = 'https://nikbjo72.github.io/CV/';
        img3.appendToElement(this.element);

        let c1 = new TextContent('div');
        c1.content = `
            <div class="contactContainer">
                <span class="contactIcons material-icons">home</span>
                <h5 class="contactText">Vinkelvägen 9, 590 45 Brokind</h5>
            </div>
            <div class="contactContainer">
                <span class="contactIcons material-icons">email</span>
                <h5 class="contactText">info@eyemarketing.se</h5>
            </div>
            <div class="contactContainer">
                <span class="contactIcons material-icons">call</span>
                <h5 class="contactText">076 398 17 88</h5>
            </div>
            `;
        c1.appendToElement(this.element);
    }

    getElementString() {
        return `
            <div id="contactPage" class="pageConatiner">
                <h1 id="headerContactPage" class="pageHeader"">KONTAKT</h1>
            </div>
            `;
    }
}
