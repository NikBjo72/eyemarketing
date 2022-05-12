# eyemarketing  
Pitchsida för Eye Marketing samt en MVC applikation av eyemarketing.se  

## Förbered dator 
1. Börja med att installera npm globalt genom att öppna ett terminalfönster och skriv:  
npm install -g npm  
2. Installera sedan node genom att ladda hem rätt version från nodes hemsida:  
https://nodejs.org/en/  
3. Kolla version genom att skriva: node -v  
Versonen måste vara minst v14.18.1  

## Förbered applikationen
1. Ladda ner källkoden genom att, på GitHub clicka på knappen Code och välja Download Zip.  
2. Packa upp Zipfilen.  
2. Öppna/gå in i mappen /eyemarketing-main via en terninal (i kodeditorn eller separat) och skriv: npm ci  
3. Vill du se koden, så öppna mappen /eyemarketing-main i valfri kodeditor.  

## Starta applikationen 
1. För att starta applikationen gå in i mappen /eyemarketing i en terminal och skriv: npm start  
2. En server startas med Parsel på http://localhost:5000/ samt en api-server med json-server på http://localhost:3000/.
3. För att öppna appkikationen i en webbrowser, kopiera adressen: http://localhost:5000/ och klistra in i valfri webbrowser.
4. För att besöka prototyp-applikationen klicka på app i top-menyn, längst upp till höger.  
5. Applikationen öppnas i ett nytt fönster.  
6. Inloggningsuppgifter för appen:  
E-post: test@eyemarketing.se  
Lösenord: Hej123! 

## Övrig information
Jag har fortfarande en bugg i appen som gör att layouterna på canvasen inte uppdateras vid varje knapptryckning. Man kan byta till en anna sida och gå tillbaka, eller trycka på knappen flera gånger så funkar det. Det är någon kombo med React och canvas som är problemet, men jag har inte hittat vart eftersom det inte ger något felmeddelande. Hoppas kunna lösa det snart.

##  Byggsystem och transpilering 
Applikationen körs med hjälp av Parcel som byggsystem.  
Parcel innehåler också Babel som traspilerar koden till ES5.

## Etrerna bibliotek -- index.html
**jquery** --> används bara på landningssidan inte i prototypapplikationen.  
**material-design-lite** --> används bara på landningssidan inte i prototypapplikationen.   

## Etrerna bibliotek -- app.html
**parcel** --> byggsystem och transpilering.
**json-server** --> används för att simulera ett REST-API från en json-fil. Körs på port 3000.   
**concurrently** --> används för att kunna starta två servrar (parcel och json-server) med ett kommando.   
Gör det enklare för dem som ska utvärdera applikationen.  
**react-router-dom** --> används för att kunna spara url:er vid navigering mellan sidorna. Gör också så att det går att använda pilarna i browsern för att bläddra mellan besökta sidor.

## Tjänster
API http://localhost:3000/ (lokal json-server). Informationen i apiets databas hittar du i [app/Model/Data/db.json].
Api:et är ett simulerat REST-api med hjälp av json-server. För att titta på api:et så kan du använda ovan adress i en webbläsare. API:et används i filerna:  
**• get-my-model-data.js** --> anropar API:et (http://localhost:3000/api/graphicContent) med fetch. Denna modul är separead fån UI-filer och återanvänds i nedan filer för att hämta data från api:et.  
**• content-browser.js** --> avänder funktionen i get-my-model-data.js för att hämta filnamn och taggar på marknadsmaterial (logo, bilder och färger) som sedan renderas ut som kort vid knappval av kategori.  
**• canvas-load-panel.jsx** --> avänder funktionen i [get-my-model-data.js] för att hämta sparade layouter.
    
**God utvärdering!**