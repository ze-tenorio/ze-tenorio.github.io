// requisitos 2 e 3

const colorPalette = document.getElementById('color-palette');

for (let i = 1; i <= 4; i += 1) {
  const colorsOfPalette = document.createElement('div');
  colorsOfPalette.className = 'color';
  colorPalette.appendChild(colorsOfPalette);
}

// Precisava de uma função que gerasse cores aleatórias, achei essa solução no site educative.io
function generateRandomColor() {
  const maxVal = 0xFFFFFF; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  const randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}

const colorsOfColorPalette = document.getElementsByClassName('color');
const firstColorOfColorPalette = document.querySelector('.color');
firstColorOfColorPalette.id = 'black';

const generateColorPalette = () => {
  for (let c = 0; c <= colorsOfColorPalette.length - 1; c += 1) {
    if (colorsOfColorPalette[c].id !== 'black') {
      colorsOfColorPalette[c].style.backgroundColor = generateRandomColor();
    } else {
      colorsOfColorPalette[c].style.backgroundColor = 'black';
    }
  }
};

// requisito 4

const generateRandomColorPaletteBtn = document.getElementById('button-random-color');

// requisito 5

const colorPaletteToStorage = () => {
  generateColorPalette();
  const myColorPalette = [];
  for (let i = 0; i <= colorsOfColorPalette.length - 1; i += 1) {
    const storagedColor = colorsOfColorPalette[i].style.backgroundColor;
    myColorPalette.push(storagedColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(myColorPalette));
};

const initialColorPalette = () => {
  const myColorPalette = JSON.parse(localStorage.getItem('colorPalette'));
  if (myColorPalette === null) {
    colorPaletteToStorage();
  } else {
    for (let c = 0; c <= colorsOfColorPalette.length - 1; c += 1) {
      colorsOfColorPalette[c].style.backgroundColor = myColorPalette[c];
    }
  }
};

generateRandomColorPaletteBtn.addEventListener('click', colorPaletteToStorage);

// requisitos 6 e 7

const pixelBoard = document.getElementById('pixel-board');

const defaultPixelBoardSize = () => {
  for (let p = 1; p <= 25; p += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    createPixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(createPixel);
  }
};

// requisito 8 no window.onload

// requisito 9

const selectColor = (event) => {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
};

for (let c = 0; c <= colorsOfColorPalette.length - 1; c += 1) {
  colorsOfColorPalette[c].addEventListener('click', selectColor);
}

// requisito 10

const allPixels = document.getElementsByClassName('pixel');

const paintPixel = (event) => {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor;
};

// requisito 11

const clearBoardBtn = document.getElementById('clear-board');

const clearBoard = () => {
  const myPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  for (let p = 0; p <= allPixels.length - 1; p += 1) {
    const currentPixel = allPixels[p];
    currentPixel.style.backgroundColor = 'white';
    myPixelBoard[p] = 'white';
  }
  localStorage.setItem('pixelBoard', JSON.stringify(myPixelBoard));
};

clearBoardBtn.addEventListener('click', clearBoard);

// requisito 12

const initialPixelBoard = () => {
  const myPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  if (myPixelBoard === null) {
    localStorage.setItem('pixelBoard', JSON.stringify({}));
  } else {
    for (let p = 0; p <= allPixels.length - 1; p += 1) {
      const currentPixel = allPixels[p];
      currentPixel.style.backgroundColor = myPixelBoard[p];
    }
  }
};

// achei essa funcao que retorna o index de um elemento no stack overflow, precisava dela pra executar minha solução de montar um objeto com chaves equivalentes aos indices dos pixels e valores de suas respectivas cores
function getElementIndex(el) {
  return [...el.parentElement.children].indexOf(el);
}

const pixelBoardToStorage = (event) => {
  paintPixel(event);
  const selectedPixel = event.target;
  const selectedPixelIndex = getElementIndex(event.target);
  const myPixelBoard = JSON.parse(localStorage.getItem('pixelBoard'));
  myPixelBoard[selectedPixelIndex] = selectedPixel.style.backgroundColor;
  localStorage.setItem('pixelBoard', JSON.stringify(myPixelBoard));
};

const clickPaint = () => {
  for (let p = 0; p <= allPixels.length - 1; p += 1) {
    allPixels[p].addEventListener('click', pixelBoardToStorage);
  }
};

// requisito 13

const input = document.getElementById('board-size');
let valueOfN;
let boardSize;
const boardSizeBtn = document.getElementById('generate-board');

function deleteChild() {
  const e = document.querySelector('#pixel-board');
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
}

const generateNewBoard = () => {
  if (valueOfN === undefined || valueOfN === 0) {
    alert('Board inválido!');
  } else {
    deleteChild();
    for (let p = 1; p <= boardSize; p += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      createPixel.style.backgroundColor = 'white';
      pixelBoard.appendChild(createPixel);
    }
    pixelBoard.style.gridTemplateColumns = `repeat(${valueOfN}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${valueOfN}, 40px)`;
    localStorage.setItem('pixelBoard', JSON.stringify({}));
    clickPaint();
  }
};

// requisito 14

input.addEventListener('change', (event) => {
  valueOfN = Number(event.target.value);
  if (valueOfN < 5 && valueOfN > 0) {
    valueOfN = 5;
  } else if (valueOfN > 50) {
    valueOfN = 50;
  }
  boardSize = valueOfN * valueOfN;
});

// requisito 15

const boardSizeToLocalStorage = () => {
  generateNewBoard();
  localStorage.setItem('boardSize', JSON.stringify(boardSize));
};

// precisava obter a raiz quadrada do tamanho do board para estipular a sua altura e ficar um quadrado perfeito, para isso utilizei o método Math.sqrt aprendido no MDN Web Docs

const initialPixelBoardSize = () => {
  const myPixelBoardSize = JSON.parse(localStorage.getItem('boardSize'));
  const nValue = Math.sqrt(myPixelBoardSize);
  if (myPixelBoardSize === null) {
    defaultPixelBoardSize();
  } else {
    for (let p = 1; p <= myPixelBoardSize; p += 1) {
      const createPixel = document.createElement('div');
      createPixel.className = 'pixel';
      createPixel.style.backgroundColor = 'white';
      pixelBoard.appendChild(createPixel);
    }
    pixelBoard.style.gridTemplateColumns = `repeat(${nValue}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${nValue}, 40px)`;
  }
};

boardSizeBtn.addEventListener('click', boardSizeToLocalStorage);

// o que fazer ao carregar a página

window.onload = () => {
  initialColorPalette();
  initialPixelBoardSize();
  initialPixelBoard();
  clickPaint();
  firstColorOfColorPalette.classList.add('selected');
};
