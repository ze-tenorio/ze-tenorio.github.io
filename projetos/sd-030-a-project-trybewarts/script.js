// PR do Jose Tenorio

const btnLogin = document.getElementById('btn-login');
const inputEmail = document.getElementById('email-login');
const inputPassword = document.getElementById('password-login');
const submitButton = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');

const formData = document.getElementById('form-data');

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const house = document.getElementById('house-value');
const family = document.getElementById('family');
const subjects = document.getElementById('subjects');
const evaluator = document.getElementById('evaluator');
const observations = document.getElementById('observations');

const nameValue = document.getElementById('input-name');
const lastNameValue = document.getElementById('input-lastname');
const emailValue = document.getElementById('input-email');
const houseValue = document.getElementById('house');
const familyValue = document.getElementsByName('family');
const subjectsValue = document.getElementsByClassName('subject');
const evaluationValue = document.getElementsByName('rate');
const observationValue = document.getElementById('textarea');

function validateLogin() {
  const emailInputValue = inputEmail.value;
  const password = inputPassword.value;

  if (emailInputValue === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validateLogin);

// requisito 18

checkBox.addEventListener('change', () => {
  if (checkBox.checked === true) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

// requisito 20

textArea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textArea.value.length;
});

// requisito 21

const getFamily = () => {
  for (let i = 0; i < familyValue.length; i += 1) {
    if (familyValue[i].checked) {
      family.innerHTML = `Família: ${familyValue[i].value}`;
    }
  }
};

const getSubjects = () => {
  const selectedSubjects = [];
  for (let i = 0; i < subjectsValue.length; i += 1) {
    if (subjectsValue[i].checked) {
      selectedSubjects.push(subjectsValue[i].value);
    }
  }
  subjects.innerHTML = `Matérias: ${selectedSubjects.join(', ')}`;
};

const getEvaluation = () => {
  for (let i = 0; i < evaluationValue.length; i += 1) {
    if (evaluationValue[i].checked) {
      evaluator.innerHTML = `Avaliação: ${evaluationValue[i].value}`;
    }
  }
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  formData.style.display = 'block';
  fullName.innerHTML = `Nome: ${nameValue.value} ${lastNameValue.value}`;
  email.innerHTML = `Email: ${emailValue.value}`;
  house.innerHTML = `Casa: ${houseValue.value}`;
  getFamily();
  getSubjects();
  getEvaluation();
  observations.innerHTML = `Observações: ${observationValue.value}`;
});

window.onload = () => {
  submitButton.disabled = true;
};
