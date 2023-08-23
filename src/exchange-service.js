export default class ExchangeService {
  static async getData() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    const jsonifiedResponse = await response.json();
    return jsonifiedResponse;
  }
}