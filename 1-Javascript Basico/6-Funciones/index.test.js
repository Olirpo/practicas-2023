import { describe, it, expect } from "vitest";
// import { sum, pot, isMultiple, fibonacci, removeSpaces, mayusMinus, oldDate } from "../answer";

describe("Funciones", () => {
  it("Matematicas", () => {
<<<<<<< HEAD
    
    const sum = (int1,int2) => {
      return int1 + int2
    }
=======
    /**
     * Programar una funcion que reciba 2 numeros enteros y devuelva la suma de los mismos
     */
    const sum = (a, b) => a + b;
    const pot = (a, b) => a ** b;
    const isMultiple = (n, arr) => {
      let multiple = true;
      arr.forEach((e) => {
        multiple = multiple && n % e == 0;
      });
      return multiple;
    };
    // f(n) = f(n-1) + f(n-2)
    const fibonacci = (n) => {
      // console.log(n);
      // if (n <= 1) return [1];

      // return [...(fibonacci(n - 1) + fibonacci(n - 2))];
      const arr = [1, 1];
      while (arr.at(-1) < n) {
        arr.push(arr.at(-1) + arr.at(-2));
      }

      return arr;
    };
>>>>>>> 014e1fb7375a001894ea671d7200b8ba787e743e

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

<<<<<<< HEAD
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
=======
    const mayusMinus = (str) => {
      return str
        .split(" ")
        .map((word, i) => {
          if (i % 2 == 0) return word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase();
          return word.charAt(0).toLowerCase() + word.slice(1, word.length).toUpperCase();
        })
        .join(" ");
    };

    /**
     * Programar una funcion que reciba un String str
     * Esta funcion debe hacer que todas las palabras pares comiencen con mayuscula y tengan el resto en minuscula
     * y las palabras inpares deben comenzar con minuscula y tener el resto en mayuscula
     */
>>>>>>> 014e1fb7375a001894ea671d7200b8ba787e743e
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
