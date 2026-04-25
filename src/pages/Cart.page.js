class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = await this.page.locator('//ul/li[4]/button');
    await cartButton.click();

  }

  async continueShopping() {
    const continuebutton = await this.page.locator('button[type="button"]');
    await continuebutton.click();
  }
}

module.exports = { CartPage };