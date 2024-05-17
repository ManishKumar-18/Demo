import test, { chromium } from "@playwright/test";

test("Login test Demo", async () => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    await page.click("text=Login");
    
    //checking the input field

    await page.fill("input[name='email']","Manishkumar123@gmail.com");
    await page.fill("input[name='password']","Man123");
    await page.click("input[value='Login']");

    //wait for 5seconds
    await page.waitForTimeout(5000);

    //creating new browser or new context

    const newContext = await browser.newContext();
    const newPage = await newContext.newPage();
    await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");

    await newPage.waitForTimeout(5000);

})