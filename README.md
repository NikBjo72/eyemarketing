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
2. Öppna/gå in i mappen /eyemarketing via en terninal (i kodeditorn eller separat) och skriv: npm install  
3. Vill du se koden, så öppna mappen /eyemarketing i valfri kodeditor.  

## Starta applikationen 
1. För att starta applikationen gå in i mappen /eyemarketing i en terminal och skriv: npm start  
2. En server startas med Parsel på http://localhost:5000/ samt en api-server med json-server på http://localhost:3000/.
3. För att öppna appkikationen i en webbrowser, kopiera adressen: http://localhost:5000/ och klistra in i valfri webbrowser.
4. För att besöka prototyp-applikationen klicka på app i top-menyn, längst till höger.  
5. Applikationen öppnas i ett nytt fönster.  
6. Inloggningsuppgifter för appen:  
E-post: test@eyemarketing.se  
Lösenord: Hej123!   

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
**react-browser** --> används för att kunna spara url:er vid navigering mellan sidorna. Gör också så att det går att använda pilarna i browsern för att bläddra mellan besökta sidor.

## Tjänster
API http://localhost:3000/ (lokal json-server) används i filerna:  
**content-browser.jsx** --> (http://localhost:3000/api/graphicContent) för att hämta filnamn och taggar på marknadsmaterial (logo, bilder och färger) som sedan renderas ut som kort vid knappval av kategori.
    
**God utvärdering!**

