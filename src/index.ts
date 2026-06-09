import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.
function calcularTotal(nombre: string, cantidadNum: number, codigoDescuento: string): number { 

  let precio: number = 0;

  if (nombre === "sabrina"){
    precio = 1000 * cantidadNum;
  }
  else if (nombre === "kgatlw"){
    precio = 700 * cantidadNum;
  }
  else if (nombre === "lali"){
    precio = 500 * cantidadNum;
  }
  else if (nombre === "magdalena"){
    precio = 600 * cantidadNum;
  }
  else if (nombre === "viagra"){
    precio = 400 * cantidadNum;
  }
  else if (nombre === "dillom"){
    precio = 350 * cantidadNum;
  }
  else if (nombre === "marilina"){
    precio = 200 * cantidadNum;
  }
  else if (nombre === "mugre"){
    precio = 150 * cantidadNum;
  } 
 
 
 if (codigoDescuento === "TIC10"){
  precio = precio * 10 / 100
 }

 if (codigoDescuento === "TIC20"){
  precio = precio * 20 / 100
 }

 if (codigoDescuento === "DARIO"){
  precio = precio * 50 / 100
 }

return 0;
}

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});


iniciar();
