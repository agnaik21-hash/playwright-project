class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = this.page.locator('//ul/li[4]/button');
  }

  async continueShopping() {
    await this.page.click('button[type="button"]');
  }
}

module.exports = { CartPage };