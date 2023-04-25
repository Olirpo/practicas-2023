import { describe, it, expect } from "vitest";
import { sum, pot, isMultiple, fibonacci, removeSpaces, mayusMinus, oldDate } from "../answer";

describe("Funciones", () => {
  it("Matematicas", () => {
    
    const sum = (int1,int2) => {
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
      let fibonacci = [1, 1]
      while (fibonacci.at(-1) < maxN){
        const prev1 = fibonacci.at(-1)
        const prev2 = fibonacci.at(-2)
        if(prev1+prev2 > maxN){break}
        fibonacci.push(prev1 + prev2)
      }
      return fibonacci;
    }

    expect(fibonacci(21)).toStrictEqual([ 1, 1, 2, 3, 5, 8, 13, 21]);
  });

  it("Strings", () => {

    const removeSpaces = (string)=>{
      return string.replaceAll(" ", "")
    }

    expect(removeSpaces("Hola soy una cadena de caracteres")).toBe("Holasoyunacadenadecaracteres");

    const mayusMinus = (string) => {
      let palabras = string.split(' ')
      return palabras.map((word, i, arr)=>{
        if( i % 2 == 0){
          return word.charAt(0).toLowerCase() + word.slice(1, word.lenght).toUpperCase()
        }
          return word.charAt(0).toUpperCase() + word.slice(1, word.lenght).toLowerCase()
      })
        .join(' ')

      }
    expect(mayusMinus("Hola soy una cadena de caracteres")).toBe("hOLA Soy uNA Cadena dE Caracteres");
  });
  it("Fechas", () => {
const isBefore = (date1,date2)=> {
  return date1 < date2
}
const oldDate = (date1,date2)=>{
  const newer = new Date(date1)
  const older = new Date(date2)
  return isBefore(older,newer)
}

    expect(oldDate("2022-01-01", "2020-01-01")).toBe(true);
    expect(oldDate("2022-01-01", "2023-01-01")).toBe(false);
  });
});
