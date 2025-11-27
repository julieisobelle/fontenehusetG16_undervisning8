console.log("Hello World!", 1234, true);

/*  
Datatyper:
- String = Tekst " "
- Number = Tall
- Boolean = True/False = Sant/Usant
*/

/*
Variabler:
- const = konstant variabel som ikke kan bytte verdi
- let = variabel som kan bytte verdi
- var = utdatert variabel som kan bytte verdi men som IKKE skal brukes
*/
const greeting = "God morgen";
//greeting = "God ettermiddag";
console.log(greeting);
const userName = "Julie";
console.log(userName);
const time = 1044;
console.log(time);
const isPresent = true;
console.log(isPresent);

function userProfile() {
  const name = "Julie";
  const age = 28;
  const title = "Veileder Kodeloftet";
  const isOnline = true;

  console.log(
    `Jeg heter ${name}, og jeg er ${age} år gammel. Jeg er ${title}. Er jeg online? ${isOnline}`
  );

  const text = document.querySelector("h1");
  text.textContent = `Jeg heter ${name}, og jeg er ${age} år gammel. Jeg er ${title}. Er jeg online? ${isOnline}`;
}
userProfile();
