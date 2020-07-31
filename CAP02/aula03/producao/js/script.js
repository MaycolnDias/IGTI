var a = 5;
var b = 4;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}
var dia = 1;
if (dia === 1) {
  console.log('Segunda');
} else {
  if (dia === 2) {
    console.log('Terça');
  } else {
    if (dia === 3) {
      console.log('Quarta');
    } else {
      if (dia === 4) {
        console.log('Quinta');
      } else {
        if (dia === 5) {
          console.log('Sexta');
        } else {
          if (dia === 6) {
            console.log('Sábado');
          } else {
            if (dia === 7) {
              console.log('Domingo');
            }
          }
        }
      }
    }
  }
}

// Case
var r = '';
switch (dia) {
  case 1:
    r = 'Domingo';
    break;
  case 2:
    r = 'Segunda';
    break;
  case 3:
    r = 'Terça';
    break;
  case 4:
    r = 'Quarta';
    break;
  case 5:
    r = 'Quinta';
    break;
  case 6:
    r = 'Sexta';
    break;
  case 7:
    r = 'Sábado';
    break;
  default:
    r = 'Dia inválido';
}

console.log(r);

// Testando operador ternário
a = 6;
b = 7;
var resposta = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resposta);

var diaSemana =
  dia === 1
    ? 'domingo'
    : dia === 2
    ? 'segunda'
    : dia === 3
    ? 'terça'
    : dia === 4
    ? 'quarta'
    : dia === 5
    ? 'quinta'
    : dia === 6
    ? 'sexta'
    : dia === 7
    ? 'sábado'
    : 'dia inválido';

console.log(diaSemana);

//Somatório com while

var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('A soma é ' + somatorio);

var somatorio = 0;
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}
console.log('A soma é ' + somatorio);
