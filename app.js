/*ejercicio 1*/
let num1 = parseInt(prompt('ingrese el primer valor'));
let num2 = parseInt(prompt('ingrese el segundo valor'));
document.write('Ejercicio 1 <br/>');
document.write('La resta de sus dos numeros (' + num1 + ') y (' + num2 + ') es: ' + (num1 - num2) + '<br/>');
document.write('El producto de sus dos numeros (' + num1 + ') y (' + num2 + ') es: ' + (num1 * num2) + '<br/>');
/*ejercicio 2*/
let nombre = prompt('ingrese su nombre');
let apellido = prompt('ingrese su apellido');
document.write('Ejercicio 2 <br/>');
document.write('buenos dias ' +  nombre.trim() + ' ' + apellido.trim() + '<br/>');
document.write('su nombre y apellido ' + ((((nombre + apellido).indexOf('a') != -1) && ((nombre + apellido).indexOf('m') != -1))? 'si':'no') + ' contiene las letras m y a' + '<br/>');
console.log('su nombre y apellido ' + ((((nombre + apellido).indexOf('a') != -1) && ((nombre + apellido).indexOf('m') != -1))? 'si':'no') + ' contiene las letras m y a');
/*ejercicio 3*/
let var1 = 'Pablito-clavo-un-clavito';
document.write('Ejercicio 3 <br/>');
document.write(var1.replaceAll('-',' ') + '<br/>');