import { Builder, By, Key } from "selenium-webdriver";
import chrome from "chromedriver";

export const googleSearch = () => {
  return new Promise(async (resolve, reject) => {
    const searchString = "Selenium Test";

    try {
      const driver = await new Builder().forBrowser("chrome").build();
      driver.get("http://google.com");
      await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);
      let title = await driver.getTitle();
      console.log(`The Title is: ${title}`);
      resolve(`The Title is: ${title}`);
      await driver.quit();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
