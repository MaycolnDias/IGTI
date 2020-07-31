window.addEventListener('load', () => {
  // Utilizando o map
  doMap();
  //Utilizando o filter
  doFilter();
  //Incluir nova propriedade no objeto do vetor
  doForEach();
  // Parece um for para fazer somatória de algum objeto do vetor
  doReduce();
  // Tras o primeiro resultado que preenche o find.
  doFind();
  // Retorna verdade ou falso para o resultado da busca
  doSome();
  // Retorna verdadeiro ou falso caso todos os objetos de um determinado campo do vetor preencham a busca
  doEvery();
  // Retorna a ordenação
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log('----Resultado map----');
  console.log(nameEmailArray);
  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log('----Resultado filter----');
  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log('----Resultado forEach----');
  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log('----Resultado reduce----');
  console.log(totalAges);
}

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log('----Resultado find----');
  console.log(found);
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log('----Resultado some----');
  console.log(found);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log('----Resultado every----');
  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  console.log(mappedNames);
}
