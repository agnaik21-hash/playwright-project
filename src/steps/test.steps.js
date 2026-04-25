const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, request } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page');
const{CartPage} =require('../pages/Cart.page');
const {getPage } = require('../fixtures/testContext');

let loginPage; 
let cartPage;

// Login page

Given('I am on the login page',{ timeout: 15000 }, async function () {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});


When('I enter valid credentials', async function () {

  await loginPage.login(
    process.env.USER,
    process.env.PASS
  );
});

Then('I should see the home page', async function (){
    await this.page.waitForLoadState('networkidle');
});



//Cart Dashboard page
When('I click on the Cart button', async function () {

  cartPage = new CartPage(this.page);
  await cartPage.clickCart();
});

Then('click on continue shopping button', async function () {
  await cartPage.continueShopping();
});



//Dashboard 2nd page
//When('I click on the Cart button', async function () {
 //await this.page.click('button:has-text("Cart")');
//});
//Then('click on continue shopping button', async function () {
  //await this.page.click('[type=button]');});

