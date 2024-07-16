/**
 * Couverture de Tests :
 * - Automatisation du processus de commande complet
 * - Vérification de l'affichage des détails de la commande confirmée
 */
import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('Order System Tests', function() {
  this.timeout(30000);
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should complete the order process', async () => {
    // Step 1: Register a new member
    await driver.get('http://localhost:3000/memberRegistration.html');

    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.tagName('button')).click();

    // Step 2: Select products
    await driver.get('http://localhost:3000/productSelection.html');

    await driver.findElement(By.id('headwear')).sendKeys('Chapeau');
    await driver.findElement(By.id('tops')).sendKeys('T-shirt');
    await driver.findElement(By.id('bottoms')).sendKeys('Pantalon');
    await driver.findElement(By.id('shoes')).sendKeys('Sneakers');
    await driver.findElement(By.tagName('button')).click();

    // Step 3: Review the order
    const orderSummary = await driver.wait(until.elementLocated(By.id('orderSummary')), 10000).getText();
    expect(orderSummary).to.include('Chapeau');
    expect(orderSummary).to.include('T-shirt');
    expect(orderSummary).to.include('Pantalon');
    expect(orderSummary).to.include('Sneakers');

    // Step 4: Confirm the order
    await driver.findElement(By.id('confirmOrder')).click();

    const confirmationDetails = await driver.wait(until.elementLocated(By.id('confirmationDetails')), 10000).getText();
    expect(confirmationDetails).to.include('Commande confirmée');
  });
});
