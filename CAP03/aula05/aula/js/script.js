// Funções que são iniciadas assim que os elementos são
//renderizados pelo evento load
window.addEventListener('load', start);
var globalNames = ['UM', 'DOIS', 'TRES', 'QUATRO'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

// Funções que são iniciadas assim que os elementos são
//renderizados pelo evento load
function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
  render();
}

// Evitar que o form seja recarregado quando inserir um dado
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

// Armazenar o valor digitado dentro do array
function activateInput() {
  function insertName(newName) {
    globalNames.push(newName);
    console.log(globalNames);
    render();
  }
  //Atualiza um dado já incluso
  function updateName(newName) {
    //Acessa a posição que foi criado o valor que deseja alterar
    globalNames[currentIndex] = newName;
    console.log(globalNames);
    render();
  }

  function handleTyping(event) {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      if (isEditing) {
        updateName(event.target.value);
      } else {
        insertName(event.target.value);
      }
      isEditing = false;
    }
  }
  inputName.addEventListener('keyup', handleTyping);
  //Quando iniciada a página o cursor inicia no textbox
  inputName.focus();
}

// Cria uma ul dentro da DIV e cria seus li's com os valores digitados
function render() {
  //Criar botão para deletar os elementos.
  function createDeleteButton(index) {
    //Função que deleta o elemento
    function deleteName() {
      //Splice remove um valor de um array (posição), quantidade de elementos
      globalNames.splice(index, 1);
      render();
    }
    var button = document.createElement('button');
    //Insere um CSS do tipo class no elemento
    button.classList.add('deleteButton');
    //Insere um texto dentro do botão criado
    button.textContent = 'x';

    button.addEventListener('click', deleteName);
    return button;
  }
  function createSpan(name, index) {
    function editItem() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }
    //criando um span para armazenar o valor do array
    var span = document.createElement('span');
    span.classList.add('clickable');
    span.textContent = name;
    span.addEventListener('click', editItem);
    return span;
  }
  var divNames = document.querySelector('#nomes');
  divNames.innerHTML = '';

  var ul = document.createElement('ul');
  for (var i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i];
    var li = document.createElement('li');
    //Cria um botão com os parametros da function
    var button = createDeleteButton(i);
    var span = createSpan(currentName, i);
    // Insere os valores do li
    li.appendChild(button);
    li.appendChild(span);
    ul.appendChild(li);
  }
  divNames.appendChild(ul);
  clearInput();
}
//Limpa o campo do inputName após inserir algo.
function clearInput() {
  inputName.value = '';
  inputName.focus();
}
