const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://br123.tribalwars.com.br/game.php?village=21706&screen=am_farm');
    await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    /* await driver.quit(); */
  }
})();