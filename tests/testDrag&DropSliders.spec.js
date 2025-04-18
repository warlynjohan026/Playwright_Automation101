import { test, expect, chromium } from "@playwright/test";

const capabilities = {
  browserName: "pw-webkit",
  browserVersion: "latest",
  "LT:Options": {
    platform: "Windows 11",
    build: "Playwright Lambda Automation 101",
    name: "Test Scenario 2",
    user: "warlynjohan0126",
    accessKey: "LT_TBE09S3A74Gz0jgzWA73ioEkTdX6XzzAGZa3BIbKpx7SgcG",
    network: true,
    video: true,
    console: true,
  },
};

test("Mouse drag slider to exactly 95", async () => {
  test.setTimeout(500000);
  const browser = await chromium.connect({
    wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
      JSON.stringify(capabilities)
    )}`,
  });

  const page = await browser.newPage();

  await page.goto("https://www.lambdatest.com/selenium-playground");
  await page.getByRole("link", { name: "Drag & Drop Sliders" }).click();

  const slider = page.locator("#slider3 input");
  await slider.waitFor({ state: "visible" });

  const boundingBox = await slider.boundingBox();
  if (!boundingBox) throw new Error("Slider bounding box not found");

  const target = 95;
  const output = page.locator("#rangeSuccess");

  const totalWidth = boundingBox.width;
  const startX = boundingBox.x;
  const y = boundingBox.y + boundingBox.height / 2;

  for (let i = 0; i <= totalWidth; i += 2) {
    const x = startX + i;
    await page.mouse.move(x, y);
    await page.mouse.down();
    await page.mouse.move(x + 1, y);
    await page.mouse.up();

    const currentValue = parseInt(await output.textContent());
    if (currentValue === target) {
      expect(currentValue).toBe(target);
      await browser.close();
      return;
    }
  }

  throw new Error(`Failed to reach slider value ${target}`);
});
