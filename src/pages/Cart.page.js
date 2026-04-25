class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    await this.page.click('button i.fa-shopping-cart');
  }

  async continueShopping() {
    await this.page.click('[type=button]');
  }
}

module.exports = { CartPage };