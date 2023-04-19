import { describe, it, expect } from "vitest";
import { sum, pot, isMultiple, fibonacci, removeSpaces, mayusMinus, oldDate } from "../answer";

describe("Funciones", () => {
  it("Matematicas", () => {
    
    const sum =  (int1,int2) => {
      return int1 + int2
    }

    expect(sum(2, 2)).toBe(4);

    const pot = (a,b) => {
      return a**b
    }
    expect(pot(2, 4)).toBe(16);

    const isMultiple = (num,arrDiv) => {
      return arrDiv.every(e => (num%e)==0)
    }

    expect(isMultiple(8, [2, 4])).toBe(true);
    expect(isMultiple(8, [2, 3])).toBe(false);

    const fibonacci = (maxN) => {
      let fibonacci = [1]
      while (fibonacci.at(-1) <= maxN){
        const prev1 = fibonacci.at(-1)
        const prev2 = fibonacci.at(-2) ? fibonacci.at(-2) : 0
        fibonacci.push(prev1 + prev2)
      }
      return fibonacci.slice(0,-1)
    }

    expect(fibonacci(21)).toStrictEqual([ 1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("Strings", () => {

    const removeSpaces = (string)=>{
      return string.replaceAll(" ", "")
    }

    expect(removeSpaces("Hola soy una cadena de caracteres")).toBe("Holasoyunacadenadecaracteres");

    const mayusMinus = (string) => {
      const palabrasSeparadas = string.split(' ')
      const cantidadPalabras = palabrasSeparadas.lenght;
      for(let i = 0; i<cantidadPalabras-1; i++){
        
      }

      }
    }
    expect(mayusMinus("Hola soy una cadena de caracteres")).toBe("hOLA Soy uNA Cadena dE Caracteres");
  });
  it("Fechas", () => {
    /**
     * Programar una funcion que reciba 2 fechas en formato string, date1 y date2
     * Esta funcion debe retornar true si date1 es mas vieja que date2
     * Ademas debe retornar error si el formato de la fecha es erroneo
     *  Nota: debe usar la clase Date() de JS
     */
    expect(oldDate("2022-01-01", "2020-01-01")).toBe(true);
    expect(oldDate("2022-01-01", "2023-01-01")).toBe(false);
  });
});
