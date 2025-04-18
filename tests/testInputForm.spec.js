import { test, expect, chromium } from "@playwright/test";
import InputForm from "../pages/inputForm";

const capabilities = {
  browserName: "chrome",
  browserVersion: "135.0",
  "LT:Options": {
    platform: "Windows 11",
    build: "Playwright Lambda Automation 101",
    name: "Test Scenario 3",
    user: "warlynjohan0126",
    accessKey: "LT_TBE09S3A74Gz0jgzWA73ioEkTdX6XzzAGZa3BIbKpx7SgcG",
    network: true,
    video: true,
    console: true,
    screenshot: true,
  },
};

test.describe("Form Demo", async () => {
  test("Fill up input validation form and validate success message", async () => {
    test.setTimeout(500000);

    const browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`,
    });
    const page = await browser.newPage();

    const inputForm = new InputForm(page);
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.getByText("Input Form Submit").click();
    await inputForm.submit();
    const nameInput = page.locator("#name");
    const browserName = process.env.BROWSER_NAME;
    const validationMessage = await nameInput.evaluate(
      (e) => e.validationMessage
    );
    if (browserName === "chromium") {
      expect(validationMessage).toContain("Please fill out this field.");
    } else if (browserName === "firefox") {
      expect(validationMessage).toContain("Please fill out this field.");
    }
    await inputForm.enterName("Warlyn");
    await inputForm.enterEmail("warlyn@test.com");
    await inputForm.enterPassword("JohanP0126");
    await inputForm.enterCompany("ABC testing");
    await inputForm.enterWebsite("TEsting.com");
    await inputForm.selectCountry();
    await inputForm.enterCity("Dever");
    await inputForm.enterAddress1("45 main road");
    await inputForm.enterAddress2("Appartment 2");
    await inputForm.enterState("Colorado");
    await inputForm.enterZipCode("00000");
    await inputForm.submit();
    await expect(
      page.locator('//*[@id="__next"]/div/section[2]/div/div/div/div/p')
    ).toHaveText("Thanks for contacting us, we will get back to you shortly.");
    await browser.close();
  });
});
