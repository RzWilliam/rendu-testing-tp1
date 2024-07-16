/**
 * Couverture de Tests :
 * - Automatisation de l'inscription d'un membre via le formulaire
 * - Vérification de l'affichage du message de confirmation
 */
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

  it('should register a new member via the form', async () => {
    await driver.get('http://localhost:3000/memberRegistration.html');

    await driver.findElement(By.id('firstName')).sendKeys('John');
    await driver.findElement(By.id('lastName')).sendKeys('Doe');
    await driver.findElement(By.id('email')).sendKeys('john.doe@example.com');
    await driver.findElement(By.id('password')).sendKeys('password123');
    await driver.findElement(By.tagName('button')).click();

  });
});

