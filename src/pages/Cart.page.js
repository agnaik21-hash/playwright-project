class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    await this.page.click('button:has(i.fa-shopping-cart)');
  }

  async continueShopping() {
    await this.page.click('[type=button]');
  }
}

module.exports = { CartPage };