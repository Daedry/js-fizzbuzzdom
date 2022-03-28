//Scrivi un programma che stampi in console i numeri da 1 a 100.

/* 
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*/

for (var i = 1; i <= 100; i++) {

  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    document.getElementById('grid').innerHTML += `
    <div class="cell">
    FizzBuzz
    </div>`;
  
  } else if (i % 5 == 0) {
    console.log("Buzz");
    document.getElementById('grid').innerHTML += `
    <div class="cell">
    Buzz
    </div>`;
  
  } else if (i % 3 == 0) {
    console.log("Fizz");
    document.getElementById('grid').innerHTML += `
    <div class="cell">
    Fizz
    </div>`;
  
  } else {
    console.log(i);
    document.getElementById('grid').innerHTML += `
    <div class="cell">
    ${i}
    </div>`;
  }
}