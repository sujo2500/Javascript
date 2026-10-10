"use strict";

innheåll:
- när användaren skriver fel
- vad är validering
- validera användarens input
- felhantering och felmeddelande
- hur kan vi spara data
- cookies
- web storage
- konvertera JSON

__________________________________

När Användaren skriver fel:
Tex. epostadress , ålder utan siffror, lösenord för kort, 

Validering:
en användare har skrivit in de data vi förväntar oss.
att information angetts. att den är korrekt. att värdet ligger inom rätt intervall. texten är tillräckligt långt.
Vi kan gör HTML-validering - webbläsaren kontrollerar vanliga regler åt oss.Användaren
Javascript - vi skriver logiken själv.Användaren
kombination av HTML och javascript - vi skriver logiken själv och webbläsaren kontrollerar vanliga regler åt oss.
Genom ATTRIBUT - <input type> "email", "number"(min="18", max="120"), "password" min length="8"></input>

Validering med HTML - popup meddelande, användaren kan inte skicka formuläret förrän alla fält är korrekt ifyllda. 

Validerin med JAVASCRIPT - if (email.value === "") { alert ("måste fylla i en giltlig epostadress.")}
FÖR att kunna validera ett fält behöver vi först hämta det värde som användaren angett ---- CONST EMAILINPUT = document.querySelector("email");
läsa in värdet ----- const email = emailInput.value; -----------


Kontrollera input
- om ett fält är tomt
- hur lång texten är
- värde inom visst intervall
- information följer ett visst mönster/format

ÄR FÄLTET TOMT?
if (email.value === "") {
    alert("du måste fylla i en giltlig epostadress."); OR 
    // OR console.log("epost måste anges");
}


VALIDERING VID SUBMIT
- Vi lägger på en eventlyssnare. // tex lyssna på submit-knappen
!!EVENT!!
event finns inbbyggt. vi kan styra standard beteendet med event.preventDefault(); - hindrar formuläret från att skickas iväg.

några exempel på validering med javascript:
- if (password.length < 8) {
    alert("lösenordet måste vara minst 8 tecken långt");
}
- if (!email.includes("@")) {
    alert("ogiltlig epost-adress")
}
- if(password.length < 8) {
    errorMessage.textContent = //element som heter errorMessage
    "lösenordet måste innehålla minst 8 tecken";
}
__________________________________________

preventDefault = sidan laddar inte om vid inmatning i formulär t.ex. 

input type "email" är ett standard och ger då information vid felinmatning i fältet. 
samma sak på ålder, ange "input type "age"", så reagerar sidan på ett specifikt sätt för validering av fältet. ((((går ej att skriva bokstäver exempelvis))))

man kan lägga min min och max värden i ålder. min="18" max="100".

required i html går att ta bort i konsolen. så i elementet "name" kan man ta bort required i konsolen och submitta. Så den går inte att lita på 100%

DEFER betyder "Ladda ner JavaScript-filen samtidigt som HTML-sidan laddas, men kör JavaScript först när HTML-koden är färdigläst."