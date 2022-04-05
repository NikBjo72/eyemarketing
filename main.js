import { Button } from "./ui/button.js";
import { TitleBar } from "./ui/title-bar.js";

console.log('Hej från main.js');

let tb = new TitleBar ('Eye Marketing');
tb.addLink("Hem", "#");
tb.addLink("Affärsplan", "#");
tb.addLink("Produktidé", "#");
tb.addLink("Kontakt", "#");
tb.addLink("App", "#");
tb.appendToElement($('header'));




