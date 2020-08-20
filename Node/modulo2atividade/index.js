import { promises as fs } from 'fs';

init();

async function init() {
  await createFiles();
  await getStatesWithMoreOrLessCities(true);
  await getStatesWithMoreOrLessCities(false);
  await getBiggerOrSmallerNameCities(true);
  await getBiggerOrSmallerNameCities(false);
  await getBiggerOrSmallerCityName(true);
  await getBiggerOrSmallerCityName(false);
}
// Criando um json para cada Estado.
async function createFiles() {
  let data = await fs.readFile('Estados.json');
  const states = JSON.parse(data);

  data = await fs.readFile('Cidades.json');
  const cities = JSON.parse(data);
  /* Criando um for para percorrer todos os estados 
 e armazenas a cidades em cada json de estado.*/
  for (let state of states) {
    const stateCities = cities.filter((city) => city.Estado === state.ID);
    await fs.writeFile(
      `./states/${state.Sigla}.json`,
      JSON.stringify(stateCities, null, 2)
    );
  }
}
// Criando um contador de cidades para cada Estado.
async function getCitiesCount(uf) {
  const data = await fs.readFile(`./states/${uf}.json`);
  const cities = JSON.parse(data);
  return cities.length;
}
// Função que valida os Estados com mais e menos cidades.
async function getStatesWithMoreOrLessCities(more) {
  let data = await fs.readFile('Estados.json');
  const states = JSON.parse(data);
  const list = [];

  for (let state of states) {
    /* Inserindo em uma lista a Sigla do Estado e quantas cidades
    cada Estado possui. */
    const count = await getCitiesCount(state.Sigla);
    list.push({ uf: state.Sigla, count });
  }
  //Ordenando os Estados pela quantidade de Cidades.
  list.sort((a, b) => {
    return b.count - a.count;
  });
  const result = [];
  //Criando IF para separar os 5 Estados com + e - Estados.
  if (more) {
    list
      .slice(0, 5)
      .forEach((item) => result.push(item.uf + ' - ' + item.count));
  } else {
    list.slice(-5).forEach((item) => result.push(item.uf + ' - ' + item.count));
  }
  console.log(result);
}

async function getBiggerOrSmallerNameCities(bigger) {
  const states = JSON.parse(await fs.readFile('Estados.json'));
  const result = [];
  for (let state of states) {
    let city;
    if (bigger) {
      city = await getBiggerName(state.Sigla);
    } else {
      city = await getSmallerName(state.Sigla);
    }
    result.push(city.Nome + ' - ' + state.Sigla);
  }
  console.log(result);
}

/*Função que retorna a Cidade com maior quantidade de letras,
e caso exista outra do mesmo tamanho, diferencia por ordem alfabética.*/
async function getBiggerName(uf) {
  const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));

  let result;

  cities.forEach((city) => {
    if (!result) {
      result = city;
    } else if (city.Nome.length > result.Nome.length) {
      result = city;
    } else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.toLowerCase() < result.Nome.toLowerCase()
    ) {
      result = city;
    }
  });
  return result;
}

async function getSmallerName(uf) {
  const cities = JSON.parse(await fs.readFile(`./states/${uf}.json`));
  let result;

  cities.forEach((city) => {
    if (!result) {
      result = city;
    } else if (city.Nome.length < result.Nome.length) {
      result = city;
    } else if (
      city.Nome.length === result.Nome.length &&
      city.Nome.toLowerCase() < result.Nome.toLowerCase()
    ) {
      result = city;
    }
  });
  return result;
}

async function getBiggerOrSmallerCityName(bigger) {
  const states = JSON.parse(await fs.readFile('Estados.json'));
  const list = [];
  for (let state of states) {
    let city;
    if (bigger) {
      city = await getBiggerName(state.Sigla);
    } else {
      city = await getSmallerName(state.Sigla);
    }
    list.push({ name: city.Nome, uf: state.Sigla });
  }

  const result = list.reduce((prev, current) => {
    if (bigger) {
      if (prev.name.length > current.name.length) return prev;
      else if (prev.name.length < current.name.length) return current;
      else
        return prev.name.toLowerCase() < current.name.toLowerCase()
          ? prev
          : current;
    } else {
      if (prev.name.length < current.name.length) return prev;
      else if (prev.name.length > current.name.length) return current;
      else
        return prev.name.toLowerCase() < current.name.toLowerCase()
          ? prev
          : current;
    }
  });
  console.log(result);
}
