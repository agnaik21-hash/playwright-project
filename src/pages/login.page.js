class LoginPage {
  constructor(page) {
    this.page = page;
  }
  async navigate() { await this.page.goto(process.env.URL); }
  async login(username, password) {
    await this.page.fill('[type=email]',username);
    await this.page.fill('#userPassword',password);
    await this.page.click('#login');
  }
}
module.exports = { LoginPage };