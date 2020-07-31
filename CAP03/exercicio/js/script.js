// Funções que são iniciadas assim que os elementos são
//renderizados pelo evento load
window.addEventListener('load', start);

let inputRed = document.querySelector('#inputRed');
let inputGreen = document.querySelector('#inputGreen');
let inputBlue = document.querySelector('#inputBlue');

let textRed = document.querySelector('#textRed');
let TtextGreen = document.querySelector('#textGreen');
let textBlue = document.querySelector('#textBlue');

let divSquare = document.querySelector('#square');

function start() {
  console.log('Renderizado');
  //changeColor();
}

inputRed.addEventListener('change', currentRed);
inputGreen.addEventListener('change', currentGreen);
inputBlue.addEventListener('change', currentBlue);

function currentRed(event) {
  textRed.value = event.target.value;
  changeColor();
}
function currentGreen(event) {
  textGreen.value = event.target.value;
  changeColor();
}
function currentBlue(event) {
  textBlue.value = event.target.value;
  changeColor();
}

function changeColor() {
  let color = `rgb(${textRed.value},${textGreen.value},${textBlue.value}`;
  divSquare.style.backgroundColor = color;
}
