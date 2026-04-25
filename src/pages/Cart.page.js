class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = this.page.locator('button:has(i.fa-shopping-cart)');
    await cartButton.waitFor({ state: 'visible', timeout: 60000 });
    await cartButton.click();
  }

  async continueShopping() {
    await this.page.click('[type=button]');
  }
}

module.exports = { CartPage };