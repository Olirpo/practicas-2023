import { describe, it, expect } from "vitest";
import {
  numberSpiral,
  numberSpiralConditional,
  primeNumber,
  fibonacciNumber,
} from "../answers";

describe("Juegos con arreglos", () => {
  it("Espiral de numeros", () => {
    /**
     * Dada una funcion numberSpiral(n) donde n es un numero entero
     * La funcion debe retornar una matriz que simule una espiral de numeros desde 1 hasta n
     */
    const numberSpiral = (n) => {
      const matrix = [];
      const qOfArrays = Math.ceil(Math.sqrt(n));
      const mid = Math.floor(qOfArrays / 2);
      let numeroAImprimir = 1;

      for (let i = 0; i < qOfArrays; i++) {
        matrix.push([]);
      }
      let x = mid;
      let y = mid;
      let nivelActual = 0;
      matrix[y][x] = numeroAImprimir;
      console.log("x:", x, "   y:", y);
      while (nivelActual < qOfArrays) {
        //Derecha
        for (let i = 1; i <= nivelActual * 2 + 1; i++) {
          x++;
          if(matrix.at(-1).length === qOfArrays){
            return matrix
          }
          if (numeroAImprimir >= n) {
            matrix[y][x] = -1
          } else {
            numeroAImprimir++;
            matrix[y][x] = numeroAImprimir;
          }
          
          //console.log("x:", x, "   y:", y, '   numero:',matrix[y][x], matrix);
        }
        //Arriba
        for (let i = 1; i <= nivelActual * 2 + 1; i++) {
          y--
          if (numeroAImprimir >= n) {
            matrix[y][x] = -1
          } else {
            numeroAImprimir++;
            matrix[y][x] = numeroAImprimir;
          }
          //console.log("x:", x, "   y:", y, '   numero:',matrix[y][x], matrix);
        }
        //Izquierda
        for (let i = 1; i <= nivelActual * 2 + 2; i++) {
          x--
          if (numeroAImprimir >= n) {
            matrix[y][x] = -1
          } else {
            numeroAImprimir++;
            matrix[y][x] = numeroAImprimir;
          }
          //console.log("x:", x, "   y:", y, '   numero:',matrix[y][x], matrix);
        }
        //Abajo
        for (let i = 1; i <= nivelActual * 2 + 2; i++) {
          y++
          if (numeroAImprimir >= n) {
            matrix[y][x] = -1
          } else {
            numeroAImprimir++;
            matrix[y][x] = numeroAImprimir;
          }
          //console.log("x:", x, "   y:", y, '   numero:',matrix[y][x], matrix);
        }
        nivelActual++;
      }
      return matrix;
    };

    expect(numberSpiral(9)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, 8, 9],
    ]);

    expect(numberSpiral(25)).toStrictEqual([
      [17, 16, 15, 14, 13],
      [18, 5, 4, 3, 12],
      [19, 6, 1, 2, 11],
      [20, 7, 8, 9, 10],
      [21, 22, 23, 24, 25],
    ]);
    expect(numberSpiral(7)).toStrictEqual([
      [5, 4, 3],
      [6, 1, 2],
      [7, -1, -1],
    ]);
  });

  it("Espiral de numeros con condiciones", () => {
    /**
     * Editar la funcion del ejercicio anterior para que acepte una funcion que decida que numero agregar
     * Ademas completar las siguientes funciones:
     * primeNumber(n): devuelve true si el numero es primo
     * fibonacciNumber(n): devuelve true si el numero pertenece a la sucesion de Fibonacci
     */

    // ejemplo, una espiral de solo numeros pares
    expect(numberSpiralConditional(9, (n) => n % 2 == 0)).toStrictEqual([
      [-1, 4, -1],
      [6, -1, 2],
      [-1, 8, -1],
    ]);

    // espiral de numeros primos
    expect(numberSpiralConditional(9, primeNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [7, -1, -1],
    ]);

    // espiral de fibonacci
    expect(numberSpiralConditional(9, fibonacciNumber)).toStrictEqual([
      [5, -1, 3],
      [-1, 1, 2],
      [-1, 8, -1],
    ]);
  });
});
