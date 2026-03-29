const screen = document.querySelector('#screen-numbers');

let currentValue = '0';
let previousValue = '0';
let operator;
let shouldResetScreen = false;

function render() {
  screen.textContent = currentValue;
}
render();

function calculate(previousValue, operator, currentValue) {
  const left = Number(previousValue);
  const right = Number(currentValue);
  let result = 0;
  switch (operator) {
    case '+':
      result = left + right;
      break;
    case '-':
      result = left - right;
      break;
    case '*':
      result = left * right;
      break;
    case '/':
      if (right === 0)
        result = NaN;
      else
        result = left / right;
      break;
    default:
      result = undefined;
  }
  return result.toString();
}

function handleInput(value) {
  // Number or Dot
  if (value >= '0' && value <= '9' || value === '.') {
    handleNumberInput(value);
  }

  // Operator
  else if (value === '+' || value === '-' || value === '*' || value === '/') {
    handleOperatorInput(value);
  }

  // Equals
  else if (value === '=') {
    handleEquals();
  }

  // DEL
  else if (value === 'DEL') {
    if (currentValue.length > 1)
      currentValue = currentValue.substring(0, currentValue.length - 1);
    else
      currentValue = '0';
  }

  // RESET
  else if (value === 'RESET') {
    currentValue = '0';
    previousValue = '0';
    operator = '';
    shouldResetScreen = false;
  }

  render();
}

function handleNumberInput(value) {
  if (value === '.') {
    if (shouldResetScreen) {
      currentValue = '0.';
      shouldResetScreen = false;
      return;
    }

    if (currentValue.includes('.')) {
      return;
    }

    currentValue += '.';
    return;
  }

  if (shouldResetScreen) {
    currentValue = value;
    shouldResetScreen = false;
    return;
  }

  if (currentValue === '0') {
    currentValue = value;
  } else {
    currentValue += value;
  }

  return;
}

function handleOperatorInput(value) {
  if (shouldResetScreen) {
    operator = value;
    return;
  }
  shouldResetScreen = true;
  previousValue = currentValue;
  operator = value;
}

function handleEquals() {
  currentValue = calculate(previousValue, operator, currentValue);
  previousValue = currentValue;
  operator = '';
  shouldResetScreen = true;
}

document.querySelector('.keypad').addEventListener('click', (e) => {
  if (e.target.matches('.key')) {
    handleInput(e.target.textContent)
  }
})

function handleKeyboradInput(e) {
  // console.log(e.key);
  // console.log(typeof e.key);
  handleInput(mapKeyboradInput(e))
}

function mapKeyboradInput(e) {
  const key = e.key;

  if (key >= '0' && key <= '9') {
    return key;
  }

  if (key === '.') {
    return key;
  }

  if (key === '+' || key === '-' || key === '*' || key === '/') {
    return key;
  }

  if (key === "Escape") {
    return 'RESET';
  }

  if (key === 'Enter') {
    return '=';
  }

  if (key === 'Backspace') {
    return 'DEL';
  }

  return undefined;
}

document.addEventListener('keydown', handleKeyboradInput)
