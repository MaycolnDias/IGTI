let tabUsers = null;
let tabResults = null;

let allUsers = [];
let resultUser = [];

let countUsers = 0;
let countMan = 0;
let countWoman = 0;
let sumAge = 0;
let avgAge = 0;

let buttonSearch = null;

window.addEventListener('load', () => {
  let inputName = null;
  tabUsers = document.querySelector('#tabUsers');
  tabResults = document.querySelector('#tabResults');
  countUsers = document.querySelector('#countUsers');
  countMan = document.querySelector('#countMan');
  countWoman = document.querySelector('#countWoman');
  inputName = document.querySelector('#inputName');
  buttonSearch = document.querySelector('#buttonSearch');

  sumAge = document.querySelector('#sumAge');
  avgAge = document.querySelector('#avgAge');

  fetchUsers();
});

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  allUsers = json.results.map((user) => {
    const {
      name: { first, last },
      picture: { medium },
      dob: { age },
      gender,
    } = user;
    return {
      name: first + ' ' + last,
      picture: medium,
      age,
      gender,
    };
  });
  render();
}
function render() {
  renderStatistic();
  renderUsers();
}
inputName.addEventListener('keyup', handleTyping);

function handleTyping(event) {
  if (event.key === 'Enter' && event.target.value.trim() !== '') {
    searchList(event.target.value);
  }
}

function searchList(search) {
  resultUser = allUsers.filter((result) => result.name.match(search));
  console.log(resultUser);
  render();
}
function renderStatistic() {
  let sexMan = resultUser.reduce((acc, cur) => {
    return acc + (cur.gender === 'male');
  }, 0);

  let sexWoman = resultUser.reduce((acc, cur) => {
    return acc + (cur.gender === 'female');
  }, 0);

  let ageSum = resultUser.reduce((acc, cur) => {
    return acc + cur.age;
  }, 0);

  let ageAvg =
    resultUser.reduce((acc, cur) => {
      return acc + cur.age;
    }, 0) / resultUser.length;

  countMan.textContent = sexMan;
  countWoman.textContent = sexWoman;
  sumAge.textContent = ageSum;
  avgAge.textContent = ageAvg.toFixed(2);
  countUsers.textContent = resultUser.length;
}

function renderUsers() {
  let usersHTML = '<div>';
  resultUser.forEach((result) => {
    const { name, picture, age } = result;
    const peoplesHTML = `
    <div class='user'>
      <div>
        <img src="${picture}" alt="${name}">
        <label>${name}, ${age} anos
      </div>
    </div>
    `;
    usersHTML += peoplesHTML;
  });
  usersHTML += '</div>';

  tabUsers.innerHTML = usersHTML;
}
