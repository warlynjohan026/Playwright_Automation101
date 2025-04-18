import { test, expect, chromium } from "@playwright/test";
import FormDemo from "../pages/formDemo.js";

const capabilities = {
  browserName: "MicrosoftEdge",
  browserVersion: "135.0",
  "LT:Options": {
    platform: "MacOS Sequoia",
    build: "Playwright Lambda Automation 101",
    name: "Test Scenario 1",
    user: "warlynjohan0126",
    accessKey: "LT_TBE09S3A74Gz0jgzWA73ioEkTdX6XzzAGZa3BIbKpx7SgcG",
    network: true,
    video: true,
    console: true,
  },
};

test.describe("Simple Form", async () => {
  test("Enter Message in Input Box and validate message", async () => {
    test.setTimeout(500000);
    const browser = await chromium.connect({
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
        JSON.stringify(capabilities)
      )}`,
    });
    const page = await browser.newPage();

    const formDemo = new FormDemo(page);
    const inputText = "Welcome to LambdaTest";
    await page.goto("https://www.lambdatest.com/selenium-playground/");
    await page.getByText("Simple Form Demo").click();
    await expect(page.url()).toContain("simple-form-demo");
    await formDemo.enterMessage(inputText);
    await formDemo.getValue();
    await expect(page.locator("#message")).toContainText(inputText);
    await browser.close();
  });
});
