// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => (param1 && param2);

// Desafio 2 - Crie a função splitSentence

const splitSentence = (string) => string.split(' ');

// Desafio 3 - Crie a função concatName

const concatName = (arrayStrings) => `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 5 - Crie a função highestCount

const greaterNumber = (values) => {
  let greaterNum = values[0];
  for (number of values) {
    if (number > greaterNum) {
      greaterNum = number;
    }
  }
  return greaterNum;
};

const highestCount = (arrayOfValues) => {
  let greater = greaterNumber(arrayOfValues);
  let counter = 0;
  for (number of arrayOfValues) {
    if (greater === number) {
      counter += 1;
    }
  }
  return counter;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => base * height;

// const calcAllAreas = (base, height, geoform) => {
//     if (geoform === 'triângulo') {
//         return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
//     } else if (geoform === 'retângulo') {
//         return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
//     } else {
//         return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
//     }
// }

const calcAllAreas = (base, height, geoform) => {
  if (geoform === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (geoform === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

// Desafio 7 - Crie a função catAndMouse

// Precisava considerar que o resultado de uma subtração pudesse dar um valor negativo mas que isso não afetasse minha condição de distância. Dessa forma, utilizei o Math.abs method, aprendido no mdn web docs, que transforma qualquer valor no seu absoluto, ou seja, desconsidera qualquer sinal precedente ao número.

// const catAndMouse = (mouse, cat1, cat2) => {
//     if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
//         return 'cat2'
//     } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
//         return 'cat1'
//     } else {
//         return 'os gatos trombam e o rato foge'
//     }
// }

const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } return 'os gatos trombam e o rato foge';
};

// Desafio 8 - Crie a função fizzBuzz

const conditionalsFizzBuzz = (arrayOfStrings, number) => {
  if (number % 15 === 0) {
    arrayOfStrings.push('fizzBuzz');
  } else if (number % 3 === 0) {
    arrayOfStrings.push('fizz');
  } else if (number % 5 === 0) {
    arrayOfStrings.push('buzz');
  } else {
    arrayOfStrings.push('bug!');
  }
};

const fizzBuzz = (arrayOfNumbers) => {
  let arrayOfStrings = [];
  for (number of arrayOfNumbers) {
    conditionalsFizzBuzz(arrayOfStrings, number);
  }
  return arrayOfStrings;
};

// Desafio 9 - Crie a função encode e a função decode

// const encode = (string) => {
//     let newString = '';
//     let stringLetterList = string.split('');
//     for (letter of stringLetterList) {
//         if (letter === 'a') {
//             newString += '1';
//         } else if (letter === 'e') {
//             newString += '2';
//         } else if (letter === 'i') {
//             newString += '3';
//         } else if (letter === 'o') {
//             newString += '4';
//         } else if (letter === 'u') {
//             newString += '5';
//         } else {
//             newString += letter;
//         }
//     }
//     return newString;
// }

// Havia feito da forma acima primeiro, no entanto, a função estava muito grande e complexa e além do ESLint estar incomodado, eu também estava, então comecei a buscar alternativas... Mudei, então, para o método de usar um objeto para armazenar os valores que seriam trocados e o método .replace consultando a documentação do w3schools na condicional de haver aquela letra no meu objeto encodeTable

const encode = (string) => {
  let newString = '';
  const encodeTable = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (letter of string) {
    if (!(letter in encodeTable)) {
      newString += letter;
    } else {
      newString += letter.replace(letter, encodeTable[letter]);
    }
  }
  return newString;
};

const decode = (string) => {
  let newString = '';
  const decodeTable = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (letter of string) {
    if (!(letter in decodeTable)) {
      newString += letter;
    } else {
      newString += letter.replace(letter, decodeTable[letter]);
    }
  }
  return newString;
};

// Desafio 10 - Crie a função techList

// Utilizado método .sort retirado do mdn web docs para ordenar o array recebido como parâmetro antes de formular o novo array

const techList = (array, string) => {
  let arrayOfObjects = [];
  array.sort();
  for (let i = 0; i <= array.length - 1; i += 1) {
    arrayOfObjects.push({ tech: array[i], name: string });
  }
  return arrayOfObjects;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
