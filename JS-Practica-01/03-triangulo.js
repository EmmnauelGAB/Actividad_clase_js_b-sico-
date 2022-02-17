/**
 * 3)	Haz un javascript para: Calcular el área de un triángulo. 
 * ¿Qué variables necesitas? Los valores deben de ser capturados con promt y mostrados con alertas.
 */

let base = prompt('Dame la base de el triangulo');
let altura = prompt('Dame la Altura de el triangulo');

let multiplicacion = parseInt(base) * parseInt(altura);
let resultado = multiplicacion / 2;

alert('El area del triangulo: ' + resultado);