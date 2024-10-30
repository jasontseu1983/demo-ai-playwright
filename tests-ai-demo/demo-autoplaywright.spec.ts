import { expect, test } from "@playwright/test";
import { auto } from "auto-playwright";


const options = undefined;


test("Landing to google page successfully", async ({ page }) => {
  await page.goto("https://www.google.com/");

  const headerText = await auto("get the page title", { page, test }, options);

  expect(headerText).toBe("Google");
})

const searchTerm = 'software testing'

test('search and verify the first organic search result', async ({ page }) => {
  await page.goto('https://www.google.com')

  await auto("Search for '${searchTerm}'", { page, test })
  await page.keyboard.press('Enter')

  await page.waitForURL('https://www.google.com/search**')

  const title = await auto("What is the title of the first organic search result?", { page, test })

  console.log('First organic search result is: ', title)
})
