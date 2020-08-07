import { promises as fs, writeFile } from 'fs';

//init();
writeReadJson();

//Utilizando promises com async await
/*async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\nteste async await');
    const data = await fs.readFile('teste.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}*/

async function writeReadJson() {
  try {
    const arrayCarros = ['Gol', 'Palio', 'Uno'];
    const obj = {
      carros: arrayCarros,
    };
    //Escrita com valores iniciais
    await fs.writeFile('teste.json', JSON.stringify(obj));
    const data = JSON.parse(await fs.readFile('teste.json'));

    console.log(data);
    //Modificamoso conteudo
    data.carros.push('Chevrolet');

    //Sobrescrevemos o arquivo com o conteudo modificado
    await fs.writeFile('teste.json', JSON.stringify(data));
    console.log(data);
    console.log(obj);
  } catch (err) {
    console.log(err);
  }
}
//Realizando a escrita, append e read com promises
/*fs.writeFile('teste.txt', 'bla bla bla')
  .then(() => {
    fs.appendFile('teste.txt', '\nteste promises')
      .then(() => {
        fs.readFile('teste.txt', 'utf-8')
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });*/

// Utilizando com callbacks
/*import fs from 'fs';

//writeFile realiza a escrita e cria o arquivo se não existir.
fs.writeFile('teste.txt', 'bla bla bla', function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Arquivo criado e escrito ou limpo e reescrito com sucesso.');
    fs.appendFile('teste.txt', '\nteste append file', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inclusa informações novas no arquivo com sucesso');
        //readFile realiza a leitura do arquivo e mostra no formato utf-8.
        fs.readFile('teste.txt', 'utf-8', function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log('Mostrando as informações do arquivo \\/');
            console.log(data);
          }
        });
      }
    });
  }
}); */
