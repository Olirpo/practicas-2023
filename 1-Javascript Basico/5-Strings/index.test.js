import { describe, it, expect } from "vitest";

describe("Strings", () => {
  // Obtener la letra a de la palabra "Hola" y guardarla en "char"
  it("Caracter", () => {
    let str = "Hola";
    let char = str.at(-1);

    expect(char).toBe("a");
  });

  //Comparar dos string, si son iguales sumarlos en una variable, sino la variable esta vacia ""
  it("Comparar strings", () => {
    let str1 = 'perro';
    let str2 = 'perro';
    let suma = str1 == str2 ? str1 + str2 : '';

    expect(suma).toBe("perroperro");

    let str3 = "cosa";

    suma = str1 == str3 ? str1 + str3 : '';

    expect(suma).toBe("");
  });

  //Dado un string cualquiera, poner en mayuscula todos sus caracteres
  it("Mayuscula", () => {
    let str = 'gritando ando';
    str = str.toUpperCase()
    expect(str).toBe("GRITANDO ANDO");
  });
  //Poner en mayuscula solo la primera letra del string
  it("CamelCase", () => {
    let str = 'perro'
    str = str.toLocaleLowerCase()
    str = str.charAt(0).toLocaleUpperCase() + str.slice(1)
    
    expect(str).toBe("Perro");
  });

  //Verificar si un string comienza con la palabra "Hola" o si termina con la palabra "Adios"
  it("Inico o Fin", () => {
    let str = 'Hola mundo';
    let strByWords = str.split(' ')
    let firstWord = strByWords.at(0)
    let lastWord = strByWords.at(-1)
    let result = firstWord == 'Hola' || lastWord == 'Adios';

    expect(result).toBe(true);
  });
  //Verificar que un string contenga la palabra "Mitad"
  it("Inlcuye", () => {
    let str = 'Esta palabra a la mitad debería ser detectada';
    let result = str.includes('mitad');

    expect(result).toBe(true);
  });
  //Reemplazar todas las las ocurrencias de la palabra "cosa" en un string y reemplazarla por "hola"
  it("Reemplazo", () => {
    let strWithCosa = 'Me dijo cosa y yo tambien le dije cosa';
    let str = strWithCosa.replaceAll('cosa','hola')

    expect(str.includes("hola")).toBe(true);
  });
  //Dado un string, obtener del mismo la subcadena que comienza en el caracter 5 hasta el 10
  it("SubCadena", () => {
    let str = 'Hola Mundo';
    let subStr = str.slice(5,10);

    expect(subStr.length).toBe(5);
  });
  //Dado un string, obtener un nuevo array con todas sus palabras(Separadas por espacio)
  it("String en Array", () => {
    let str = 'Hola mundo como estan';
    let arr = str.split(' ');
    expect(arr.length).toBeGreaterThan(0);
  });
});
