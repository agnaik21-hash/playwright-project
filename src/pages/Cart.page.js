class CartPage {
  constructor(page) {
    this.page = page;
  }

  async clickCart() {
     const cartBtn = await this.page.click('[routerlink="/dashboard/cart"]');
    
  }

  async continueShopping() {
    const continuebutton = await this.page.click('button[type="button"]');
  
  }
}

module.exports = { CartPage };