var p = 3.14;
var numarH = prompt('Introduceți înălțimea');
var numarR = prompt('Introduceți raza');

var numarR2 = parseInt(numarR) * parseInt(numarR);
var vol = p * numarH * numarR2;
alert("Volumul cilindrului este: " + vol)