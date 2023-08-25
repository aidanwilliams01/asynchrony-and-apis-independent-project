import ExchangeService from './exchange-service';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function getExchangeData() {
  const response = await ExchangeService.getData();
  if (response.result === 'success') {
    return response;
  } 
  else {
    printError(response);
  }
}

async function convert(amount, currency) {
  const response = await getExchangeData();
  if (!response.conversion_rates[`${currency}`]) {
    const errorMessage = 'Currency does not exist.';
    printError(errorMessage);
  }
  else {
    let result = amount * response.conversion_rates[`${currency}`];
    result = result.toFixed('2');
    printData(amount, currency, result);
  }
}

function printData(amount, currency, result) {
  document.querySelector('p').innerText = `$${amount} is ${result} ${currency}.`;
}

function printError(response) {
  document.querySelector('p').innerText = `Error: ${response}`;
}

function handleForm(event) {
  event.preventDefault();
  const amount = document.querySelector('#amount').value;
  const currency = document.querySelector('#currency').value.toUpperCase();
  convert(amount, currency);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});