class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    await this.page.waitForSelector('button', { state: 'visible' });
    await this.page.locator('button:has(i.fa-shopping-cart)').click();
  }

  async continueShopping() {
    await this.page.click('[type=button]');
  }
}

module.exports = { CartPage };