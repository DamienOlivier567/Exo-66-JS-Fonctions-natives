let entier = document.getElementById('entier');
let nombre1 = 32;
let nombre2 = 10;
nombre1 *= nombre2;
console.log(nombre1 * nombre2);


let flottant = document.getElementById("flottant");
let nb1 = 54.85;
let nb2 = 18.83;
nb1 *= nb2;
console.log(nb1 * nb2);



let nonNumerique = document.getElementById("non-numerique");



let random = document.getElementById("random");
for(let i=0; i < 0; i++){
    random = Math.random();
    console.log(random)
}

let trunc = document.getElementById("trunc");
let x = 54.988;
let truncX = Math.trunc(x);
console.log(x);
console.log(truncX);

let hello = "Hello World";
let newHello = hello.replace('Hello', "Olivier" );

console.log(hello);
console.log(newHello);