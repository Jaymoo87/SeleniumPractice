import { Builder, By, Key } from "selenium-webdriver";
import chrome from "chromedriver";

export const googleSearch = () => {
  return new Promise(async (resolve, reject) => {
    // const searchString = "Selenium Test";

    try {
      const driver = await new Builder().forBrowser("chrome").build();
      driver.get("https://lastremnant.fandom.com/wiki/The_Last_Remnant_Wiki_-_The_Last_Remnant_Guide");
      await driver.findElement(By.css("td.top")).takeScreenshot();
      //   let title = await driver.getTitle();
      //   console.log(`The Title is: ${title}`);
      await driver.quit();
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
