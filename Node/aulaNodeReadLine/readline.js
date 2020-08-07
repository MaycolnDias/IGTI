import readline from 'readline';

// Cria a interface para leitura no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
pergunta();
function pergunta() {
  rl.question('Digite um número(Exit digite sair): ', (numero) => {
    const multiplo = [];
    if (numero === 'sair' || numero === 'Sair') {
      rl.close();
    } else {
      for (let i = 3; i < parseInt(numero); i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          multiplo.push(i);
        }
      }
      console.log(multiplo);
      pergunta();
    }
  });
}
