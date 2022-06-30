export class Ressource {

  constructor (path, username, password) {
    this.path = path
    this.username = username
    this.password = password
  }

  get user () { return await this.get('/user'); }

  get categories () { return await this.get('/categories'); }

  async getProducts (category) { return await this.get('/products/' + category); }

  get payments () { return await this.get('/payments'); }

  async sendPayment (payment) { return await this.post('/payments', payment); }

  async get (path) {
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
      },
    };
    return await fetch(this.path + path, init);
  }

  async post (path, data) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(this.username + ':' + this.password)
      },
      body: JSON.stringify(data)
    };
    return await this.fetch(path, init);
  }

  async fetch (path, init) {
    const json = await fetch(this.path + path, init);
    try { return await json.json(); }
    catch (e) {
      console.error(e);
      return null;
    }
  }
}