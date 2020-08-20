import { promises as fs } from 'fs';
q;
init();

const times = [];

async function init() {
  try {
    const data = JSON.parse(await fs.readFile('2003.json'));

    // inicializando array de times
    data[0].partidas.forEach((partida) => {
      times.push({ time: partida.mandante, pontuacao: 0 });
      times.push({ time: partida.visitante, pontuacao: 0 });
    });
    //preenchendo a pontuacao dos times no array de times
    data.forEach((rodada) => {
      rodada.partidas.forEach((partida) => {
        const timeMandante = times.find(
          (item) => item.time === partida.mandante
        );
        const timeVisitante = times.find(
          (item) => item.time === partida.visitante
        );
        if (partida.placar_mandante > partida.placar_visitante) {
          timeMandante.pontuacao += 3;
        } else if (partida.placar_mandante < partida.placar_visitante) {
          timeVisitante.pontuacao += 3;
        } else {
          timeMandante.pontuacao += 1;
          timeVisitante.pontuacao += 1;
        }
      });
    });
    times.sort((a, b) => {
      return b.pontuacao - a.pontuacao;
    });
    await salvaTimes();
  } catch (err) {
    console.log(err);
  }
}

async function salvaTimes() {
  await fs.writeFile('times.json', JSON.stringify(times, null, 2));
}
