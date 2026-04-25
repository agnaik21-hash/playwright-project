class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
     const cartBtn = this.page.getByRole('button', { name: /cart/i });

    await cartBtn.waitFor({ state: 'visible', timeout: 60000 });
    await cartBtn.click();

  }

  async continueShopping() {
    const continuebutton = await this.page.locator('button[type="button"]');
    await continuebutton.click();
  }
}

module.exports = { CartPage };