
const resultElement = document.querySelector('.result span');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
const historyList = document.querySelector('#history-list');

// Variable para almacenar el historial
let history = [];

// Función para actualizar el historial
function updateHistory(operation, result) {
  history.push({ operation, result });
  const listItem = document.createElement('li');
  listItem.textContent = `${operation} = ${result}`;
  historyList.appendChild(listItem);
}


function clearHistory() {
  history = [];
  historyList.innerHTML = '';
}

function evaluateOperation() {
  const operation = resultElement.textContent;
  try {
    const result = eval(operation); 
    resultElement.textContent = result;
    updateHistory(operation, result);
  } catch (error) {
    resultElement.textContent = 'Error';
  }
}


clearButton.addEventListener('click', () => {
  resultElement.textContent = '0';
  clearHistory();
});


equalsButton.addEventListener('click', evaluateOperation);

const buttons = document.querySelectorAll('.numbers, .sign, .comma');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('value');
    const currentValue = resultElement.textContent;
    if (currentValue === '0') {
      resultElement.textContent = value;
    } else {
      resultElement.textContent += value;
    }
  });
});
