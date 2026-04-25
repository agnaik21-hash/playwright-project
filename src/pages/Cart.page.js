class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
    const cartButton = this.page.locator('//ul/li[4]/button');
    await cartButton.click();

  }

  async continueShopping() {
    const continuebutton = await page.locator('button[type="button"]');
    await continuebutton.click();
  }
}

module.exports = { CartPage };