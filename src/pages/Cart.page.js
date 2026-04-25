class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = this.page.click('//ul/li[4]/button');

  }

  async continueShopping() {
    const continuebutton = await this.page.click('button[type="button"]');
  }
}

module.exports = { CartPage };