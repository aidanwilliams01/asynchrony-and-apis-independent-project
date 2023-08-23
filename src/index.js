import ExchangeService from './exchange-service';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

async function getExchangeData() {
  const response = await ExchangeService.getData();
  if (response.result === 'success') {
    printData(response);
  } 
  else {
    printError(response);
  }
}

function printData(response) {
  document.querySelector('p').innerText = response.base_code;
}

function printError(response) {
  document.querySelector('p').innerText = response['error-type'];
}

getExchangeData();

// function handleTriangleForm() {
//   event.preventDefault();
// }

// function handleRectangleForm() {
//   event.preventDefault();
// }

// window.addEventListener("load", function() {
//   document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
//   this.document.querySelector("#rectangle-area-form").addEventListener("submit", handleRectangleForm);
// });