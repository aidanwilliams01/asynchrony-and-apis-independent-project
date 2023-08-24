export default class ExchangeService {
  static async getData() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    const jsonifiedResponse = await response.json();
    if (!response.ok) {
      // if (jsonifiedResponse['error-type'] === 'unsupported-code') {
      //   const errorMessage = `${response.status}: This currency does not exist.`;
      //   return errorMessage;
      // }
      const errorMessage = `${response.status} ${jsonifiedResponse['error-type']}`;
      return errorMessage;
    }
    return jsonifiedResponse;
  }
}