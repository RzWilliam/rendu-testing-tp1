import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome.js";

// Fonction pour ajouter un délai
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  let driver;

  try {
    const options = new chrome.Options();

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    // Step 1: Register a new member
    await driver.get("http://localhost:3000/memberRegistration.html");
    await driver.findElement(By.id("firstName")).sendKeys("John");
    await driver.findElement(By.id("lastName")).sendKeys("Doe");
    await driver.findElement(By.id("email")).sendKeys("john.doe@example.com");
    await driver.findElement(By.id("password")).sendKeys("password123");
    await driver.findElement(By.tagName("button")).click();
    await sleep(2000); // Pause de 2 secondes

    const confirmationMessage = await driver
      .wait(until.elementLocated(By.id("confirmationMessage")), 10000)
      .getText();
    console.log(`Confirmation Message: ${confirmationMessage}`);
    await sleep(1000); // Pause de 1 seconde

    // Step 2: Select products
    await driver.get("http://localhost:3000/productSelection.html");
    await driver.findElement(By.id("headwear")).sendKeys("Chapeau");
    await driver.findElement(By.id("tops")).sendKeys("T-shirt");
    await driver.findElement(By.id("bottoms")).sendKeys("Pantalon");
    await driver.findElement(By.id("shoes")).sendKeys("Sneakers");
    await driver.findElement(By.tagName("button")).click();
    await sleep(2000); // Pause de 2 secondes

    // Step 3: Review the order
    const orderSummary = await driver
      .wait(until.elementLocated(By.id("orderSummary")), 10000)
      .getText();
    console.log(`Order Summary: ${orderSummary}`);
    await sleep(1000); // Pause de 1 seconde

    // Step 4: Confirm the order
    await driver.findElement(By.id("confirmOrder")).click();
    await sleep(2000); // Pause de 2 secondes

    const confirmationDetails = await driver
      .wait(until.elementLocated(By.id("confirmationDetails")), 10000)
      .getText();
    console.log(`Confirmation Details: ${confirmationDetails}`);
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

main().catch(console.error);
