const screen = document.querySelector('#screen-numbers');
const keypad = document.querySelector('.keypad');

let currentValue = '0';
let previousValue = '0';
let operator;
let shouleResetScreen = false;

function render() {
  screen.textContent = currentValue;
}

function save(value) {
  operator = value;
  previousValue = currentValue;
  shouleResetScreen = true;
}

function calculate(previousValue, operator, currentValue) {
  const left = Number(previousValue);
  const right = Number(currentValue);
}

render();

keypad.addEventListener('click', (e) => {
  // console.log(e.target.matches('.key'))
  if (e.target.matches('.key')) {
    // console.log(e.target.textContent)
    const value = e.target.textContent.trim();
    if (value === 'RESET') {
      currentValue = '0';
    } else if (value === 'DEL') {
      if (currentValue.length > 1) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
      } else {
        currentValue = '0';
      }
    } else if (value === '.') {
      const hasDot = currentValue.includes('.');
      if (!hasDot) currentValue += '.';
    }
    // ---- Number ----
    else if ('0' <= value && value <= '9') {
      if (shouleResetScreen) {
        shouleResetScreen = false;
        currentValue = '0';
      }
      if (currentValue === '0') {
        currentValue = value;
      } else {
        currentValue += value;
      }
    }
    else if (value === '=') {

    } else {
      save(value);
    }
    render();
  }
});
