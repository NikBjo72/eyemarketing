import { Button } from "./ui/button.js";

console.log('Hej från main.js');

let b = new Button ('Min nya knapp!');
b.appendToElement($('body'));