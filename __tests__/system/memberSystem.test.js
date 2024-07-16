import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Member System Tests', function() {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    // Code à exécuter avant chaque test individuel
  });

  afterEach(async () => {
    // Code à exécuter après chaque test individuel
  });

  it('should register a new member via the form', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');

    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.tagName('button')).click();

    const confirmationMessage = await driver.wait(until.elementLocated(By.id('confirmationMessage')), 10000).getText();
    expect(confirmationMessage).to.equal('Inscription réussie');
  });
});
