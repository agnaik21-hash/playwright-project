class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = await this.page.getByRole('button', { name: 'Cart' });
    await cartButton.click();

  }

  async continueShopping() {
    const continuebutton = await this.page.locator('button[type="button"]');
    await continuebutton.click();
  }
}

module.exports = { CartPage };