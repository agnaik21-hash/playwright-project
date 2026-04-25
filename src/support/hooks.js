const { setDefaultTimeout, Before, BeforeAll, After } = require('@cucumber/cucumber');
const { chromium, request } = require('playwright');
const dotenv = require('dotenv');
const { setPage } = require('../fixtures/testContext');
const { expect } = require('@playwright/test');
dotenv.config();
setDefaultTimeout(60 * 1000);

Before({ tags: '@auth' }, async function () {
  this.browser = await chromium.launch({ headless: true });

  // 1. Create API context (correct usage)
  const apiContext = await request.newContext();

  // 2. Call REAL API (backend, not UI)
  const response = await apiContext.post(
    'https://rahulshettyacademy.com/api/ecom/auth/login',
    {
      data: {
        userEmail: process.env.USER,
        userPassword: process.env.PASS
      }});

  // 🔍 Debug (remove later)
  const text = await response.text();
  console.log("API RESPONSE:", text);

  const body = JSON.parse(text);
  token = body.token; // ✅ use global variable

  // 3. Create browser context
  this.context = await this.browser.newContext();

  // 4. Inject token BEFORE page loads
  await this.context.addInitScript((value) => {
    window.localStorage.setItem('token', value);
  }, token);

  this.page = await this.context.newPage();

  await this.page.goto(process.env.DASHURL);

  setPage(this.page);
});

Before({ tags: '@noauth' }, async function () {
  this.browser = await chromium.launch({ headless: false });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  await this.page.goto(process.env.URL);

  setPage(this.page); // keep this if you're still using testContext
});

/**
 * 4. Cleanup after each scenario
 */
After(async function () {
  try {
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  } catch (err) {
    console.log('Cleanup error:', err);
  }
});