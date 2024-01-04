let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}


function clearCalculation() {
    calculation = '';
    displayCalculation();
    localStorage.removeItem('calculation');
  }
  
function calculateResult() {
    try {
      calculation = eval(calculation).toString();
      displayCalculation();
      localStorage.setItem('calculation', calculation);
    } catch (error) {
      console.error('Invalid input or calculation error:', error);
    }
  }