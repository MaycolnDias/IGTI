// Realizar importação de outro js em Node nomeando o objeto de operacoes para op
import op from './operacoes.js';
// Realizar importação de outro js de funções específicas
import { resto, multiplicacao } from './operacoes2.js';

console.log('SOMA: ' + op.soma(2, 3));
console.log('SUBTRACAO: ' + op.subtracao(5, 3));
console.log('MULTIPLICACAO: ' + multiplicacao(10, 2));
console.log('RESTO: ' + resto(10, 2));
