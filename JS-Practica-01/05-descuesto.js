/**
 * 5)	Te han contratado en una empresa de venta de ropa. Se llegó el buen fin y una de tus tareas es que calcules 
 * 
 * a)   ¿Cuál tendría que ser el precio final de un saco super padrísimo que cuesta 1560 que tiene un descuento de 18%?
 * 
 * b)	¿Cuáles tendrían que ser las modificaciones que tendrías que hacer en caso de que el descuento sea 10%.
 */

let producto = prompt('Ingresa el precio de tu articulo super padrisimo: ');

let resultadoConDescuento = parseInt(producto) * 0.10;//Valor a cambiar por 10%
let descuento = parseInt(producto) - resultadoConDescuento;

alert('El precio final con el -10% incluido es: ' + descuento + ' pesos');