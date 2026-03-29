const screen = document.querySelector('#screen-numbers');
const keypad = document.querySelector('.keypad');

let currentValue = '0'
let previousValue = '0'
let operator
let shouleResetScreen = false

function render() {
  screen.textContent = currentValue
}

render()

keypad.addEventListener('click', (e) => {
  // console.log(e.target.matches('.key'))
  if (e.target.matches('.key')) {
    // console.log(e.target.textContent)
    const value = e.target.textContent.trim()
    if (value === 'RESET') {
      currentValue = '0'
    }
    else if (value === 'DEL') {
      if (currentValue.length > 1) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
      }
      else {
        currentValue = '0'
      }
    }
    else if (value === '.') {
      const hasDot = currentValue.includes('.')
      if (!hasDot) currentValue += '.'
    }
    else if ('0' <= value && value <= '9') {
      if (currentValue === '0') {
        currentValue = value
      }
      else {
        currentValue += value
      }
    }
    else if (value === '+') {
      operator = '+'
      previousValue = currentValue
      shouleResetScreen = true
    }
    else if (value === '-') {

    }
    else if (value === 'x') {

    }
    else if (value === '/') {

    }
    else {

    }
    render()
  }
});
