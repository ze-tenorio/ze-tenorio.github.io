const inputBox = document.getElementById('carta-texto');
const shownText = document.getElementById('carta-gerada');
const letterBtn = document.getElementById('criar-carta');
let letter = '';

inputBox.addEventListener('change', (event) => {
  letter = event.target.value;
});

const generateLetter = () => {
  const letterWords = letter.split(' ');
  for (let i = 0; i < letterWords.length; i += 1) {
    const createWord = document.createElement('span');
    createWord.innerHTML = letterWords[i];
    shownText.appendChild(createWord);
    shownText.innerHTML += ' ';
  }
};

const checkOnlySpace = () => {
  const letterWords = letter.split(' ');
  let spaces = 0;
  for (let i = 0; i < letterWords.length; i += 1) {
    if (letterWords[i] === '') {
      spaces += 1;
    }
  }
  if (spaces === letterWords.length) {
    return true;
  }
};

// requisito 16
const words = document.getElementsByTagName('span');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

const randomizeStyle = () => {
  for (let i = 0; i < words.length; i += 1) {
    const randomStyle = Math.round(Math.random() * 2);
    const randomMovement = Math.round(Math.random() * 1);
    words[i].classList.add(estilo[randomStyle]);
    words[i].classList.add(tamanho[randomStyle]);
    words[i].classList.add(rotacao[randomMovement]);
    words[i].classList.add(inclinacao[randomMovement]);
  }
};

// frequisito 17

const clearClass = (event) => {
  const classes = event.target.classList;
  for (let c = 0; c <= 5; c += 1) {
    event.target.classList.remove(classes[c]);
  }
};

const clickRandomizeStyle = () => {
  for (let i = 0; i < words.length; i += 1) {
    words[i].addEventListener('click', (event) => {
      clearClass(event);
      randomizeStyle();
    });
  }
};

letterBtn.addEventListener('click', () => {
  shownText.innerHTML = '';
  if (letter === '' || checkOnlySpace()) {
    shownText.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    generateLetter();
    randomizeStyle();
    clickRandomizeStyle();
  }
});
