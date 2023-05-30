const readline = require("readline/promises").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const jugar = async () => {
  let turno = 0;
  const J1 = "o";
  const J2 = "x";
  const matrix = [];
  //Seteo de matríz de juego
  for (let i = 0; i < 3; i++) {
    matrix.push([]);
    for (let j = 0; j < 3; j++) {
      matrix[i].push([]);
    }
  }
  console.log("Bienvenido al ultimo TA-TE-TI!");
  console.log("Para jugar necesitarás un amigo");

  while (turno < 9) {
    const jugador = turno % 2 === 0 ? "Jugador 1" : "Jugador 2";
    const figuraJugador = turno % 2 === 0 ? J1 : J2;
    console.log("Turno del ", jugador);
    const { y, x } = await turnoJugador();
    if (!isPositionValid({ y, x }, matrix)) {
      console.log("Posicion en uso");
    }
    matrix[y][x] = figuraJugador;
    turno++;
  }
};

const turnoJugador = async (jugador) => {
  let y =
    (await readline.question(
      "Seleccione en que columna desea jugar su turno: "
    )) - 1;
  let x =
    (await readline.question("Seleccione en que fila desea jugar su turno: ")) -
    1;
  readline.pause();
  return { y, x };
};
const isPositionValid = (coords, matrix) => {
  const { y, x } = coords;
  return Boolean(matrix[y][x]);
};
jugar();
