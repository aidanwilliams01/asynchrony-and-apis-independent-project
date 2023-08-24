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

async function convert(currency) {
  const response = await getExchangeData();
  printData(response, currency);
}

function printData(response) {
  document.querySelector('p').innerText = response.base_code;
}

function printError(response) {
  document.querySelector('p').innerText = `Error: ${response}`;
}

function handleForm(event) {
  event.preventDefault();
  const currency = document.querySelector('#currency').value;
  convert(currency);
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});