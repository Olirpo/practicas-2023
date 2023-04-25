import { describe, it, expect } from "vitest";

describe("asincronismo", () => {
  it("Promesas", () => {
    
    const promise = new Promise((res,err)=>{
      setTimeout(() => {
        res('success')
      }, 3000);
    });

    promise.then((res) => expect(res).toBe("success"));
  });
  it("Async Await", async () => {
    
    const promise = new Promise((res,err)=>{
      setTimeout(() => {
        res('success')
      }, 3000);
    });

    let res = await promise;

    expect(res).toBe("success");
  });
  it("Consumo de API", async () => {
    
    const drink = 'Gin%20And%20Tonic';

    const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`;

    // response
    let res = await fetch(URL);
    // cuerpo de la response. res.json()
    let data = await res.json();
    data = data.drinks[0]
    console.log(data)
    expect(data.idDrink).toBe("11403");
    expect(data.strDrink).toBe("Gin And Tonic");
  });
  it("Manejo de expeciones", async () => {
    /**
     * En caso que la promesa fracase guarde ":(" en la variable res. En caso de exito guarde ":)". Idem en caso de exito. Use Async Await.
     */

    const promise = new Promise((resolve, reject) => {
      Math.random() > 0.5 ? resolve(":)") : reject(":(");
    });

    const res = await promise;

    expect(res == ":)" || res == ":(").toBe(true);
  });
});
