const readline = require("readline/promises").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const jugar = async () => {
  let ganador = [false];
  let turno = 0;
  const J1 = "o";
  const J2 = "x";
  const matrix = [];
  //Seteo de matríz de juego
  for (let i = 0; i < 3; i++) {
    matrix.push([]);
    for (let j = 0; j < 3; j++) {
      matrix[i].push("");
    }
  }
  console.log("Bienvenido al ultimo TA-TE-TI!");
  console.log("Para jugar necesitarás un amigo");

  while (turno < 9 && !ganador[0]) {
    let coords = {};
    console.table(matrix);
    const jugador = turno % 2 === 0 ? "Jugador 1" : "Jugador 2";
    const figuraJugador = turno % 2 === 0 ? J1 : J2;
    console.log("Turno del ", jugador, ": ", figuraJugador);
    coords = await turnoJugador();

    while (!isPositionValid(coords, matrix)) {
      console.clear();
      console.table(matrix);
      console.log("Esa posicion ya está en uso");
      console.log("Seleccione otra");
      coords = await turnoJugador();
    }
    matrix[coords.y][coords.x] = figuraJugador;
    turno++;
    ganador = checkForWinner(matrix);
  }
  if (ganador[0]) {
    console.clear();
    console.table(matrix);
    console.log(ganador[1]);
  } else {
    console.clear();
    console.table(matrix);
    console.log("Ningun jugador pudo consagrarse! Buen partido");
  }
};
const turnoJugador = async (jugador) => {
  let x =
    (await readline.question(
      "Seleccione en que columna desea jugar su turno: "
    )) - 1;
  let y =
    (await readline.question("Seleccione en que fila desea jugar su turno: ")) -
    1;
  readline.pause();
  return { y, x };
};
const isPositionValid = (coords, matrix) => {
  const { y, x } = coords;
  return !Boolean(matrix[y][x]);
};
const checkForWinner = (matrix) => {
  console.log(matrix.at(-3));
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].at(-3));
    if (matrix[i].every((e) => e === "o")) {
      return [true, "GANADORRR o, jugador 1! Felicitaciones!"];
    } else if (matrix[i].every((e) => e === "x")) {
      return [true, "GANADORRR x, jugador 2! Felicitaciones!"];
    } // Chequeo columnas
    else if (matrix.every((e) => e[i] === "o")) {
      return [true, "GANADORRR o, jugador 1! Felicitaciones!"];
    } else if (matrix.every((e) => e[i] === "x")) {
      console.log("COLUMNA");
      return [true, "GANADORRR x, jugador 2! Felicitaciones!"];
    }
  }
  //////// DIAGONAL IZQ A DERECHA
  if (matrix.every((e, index) => e[index] === "o")) {
    return [true, "GANADORRR o, jugador 1! Felicitaciones!"];
  } else if (matrix.every((e, index) => e[index] === "x")) {
    return [true, "GANADORRR x, jugador 2! Felicitaciones!"];
  } else if (matrix.every((e, index) => e.at((index + 1) * -1) === "o")) {
    return [true, "GANADORRR o, jugador 1! Felicitaciones!"];
  } else if (matrix.every((e, index) => e.at((index + 1) * -1) === "x")) {
    return [true, "GANADORRR x, jugador 2! Felicitaciones!"];
  } else {
    return [false];
  }
};
jugar();
