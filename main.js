const calculator = document.querySelector('.calculator')
const keys = document.querySelector('.calculator-buttons')
const display = document.querySelector('.display')

keys.addEventListener('click', event => {
   let key

   if (event.target.matches('button')) {
      key = event.target
   } else {
      return
   }

   const keyValue = key.innerText
   const type = key.dataset.type
   const previousKeyType = calculator.dataset.previousKeyType
   const displayValue = display.innerText

   if (displayValue.length >= 10) {
      if (keyValue === 'AC') {
         display.innerText = 0
      }
      return
   }

   if (displayValue.includes('.')) {
      if (keyValue === '.') {
         return
      }
   }

   if (type === 'number') {
      if (displayValue === '0') {
         display.innerText = keyValue
      } else if (previousKeyType === 'operator') {
         display.innerText = keyValue
      } else {
         display.innerText += keyValue
      }
   }

   if (type === 'operator') {
      calculator.dataset.firstNumber = displayValue
      calculator.dataset.operator = key.innerText
   }

   if (type === 'equal') {
      const firstNumber = Number(calculator.dataset.firstNumber)
      const operator = calculator.dataset.operator
      const secondNumber = Number(displayValue)
      compute(firstNumber, secondNumber, operator)
   }

   if (keyValue === 'AC') {
      display.innerText = 0
   }

   calculator.dataset.previousKeyType = type
   console.log(keyValue)
})

function compute(firstNumber, secondNumber, operator) {
   if (operator === '+') {
      total = firstNumber + secondNumber
      display.innerText = total
   } else if (operator === '-') {
      total = firstNumber - secondNumber
      display.innerText = total
   } else if (operator === '÷') {
      total = firstNumber / secondNumber
      display.innerText = total
   } else if (operator === '×') {
      total = firstNumber * secondNumber
      display.innerText = total
   }

   if (total.toString().length >= 10) {
      display.innerText = Number(total.toFixed(9))
   }
}

// allow calculations between more than 2 numbers