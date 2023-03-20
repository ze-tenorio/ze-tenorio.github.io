// Desafio 11 - Crie a função generatePhoneNumber
const counterMan = (arrayOfNumbers) => {
  let counter = 0;
  for (numberRep of arrayOfNumbers) {
    if (numberRep === number) {
      counter += 1;
    }
  }
  return counter;
};

const counterRecord = (arrayOfNumbers) => {
  let greaterCount = 0;
  for (number of arrayOfNumbers) {
    let counter = counterMan(arrayOfNumbers);
    if (counter > greaterCount) {
      greaterCount = counter;
    }
  }
  return greaterCount;
};

const validNumber = (arrayOfNumbers) => {
  let isValid = true;
  for (number of arrayOfNumbers) {
    if (number > 9 || number < 0) {
      isValid = false;
    }
  }
  return isValid;
};

const generateNumber = (arrayOfNumbers) => {
  let pNumber = '';
  for (number of arrayOfNumbers) {
    pNumber += number;
  }
  return pNumber;
};

const generatePhoneNumber = (arrayOfNumbers) => {
  let pNumber = generateNumber(arrayOfNumbers);
  let isValid = validNumber(arrayOfNumbers);
  let counter = counterRecord(arrayOfNumbers);
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (isValid === false || counter >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${pNumber.slice(0, 2)}) ${pNumber.slice(2, 7)}-${pNumber.slice(7, 11)}`;
};

// Desafio 12 -  Crie a função triangleCheck

// const triangleCheck = (lineA, lineB, lineC) => (((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) || (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) || (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))) || (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA - lineB));

const firstPossibility = (a, b, c) => a < b + c && a > Math.abs(b - c);

const secondPossibility = (a, b, c) => a < b + c && b < a + c && c < a - b;

triangleCheck = (a, b, c) => firstPossibility(a, b, c) || secondPossibility(a, b, c);

// Desafio 13 - Crie a função hydrate

// Regular expression /\d+/g retirada do stackoverflow e método + para transformar uma string em número retirado do site freeCodeCamp

const hydrate = (string) => {
  let r = /\d+/g;
  let stringArray = string.match(r);
  let sum = 0;
  for (number of stringArray) {
    sum += +number;
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return '1 copo de água';
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
