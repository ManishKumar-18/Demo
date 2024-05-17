import test, { expect } from "@playwright/test";

test("Interaction with inputs",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    // await page.getByPlaceholder('Please enter your Message').hover;
    const messageInput = page.locator("input#user-message");
    console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder","Please enter your Message");
    console.log(await messageInput.inputValue());
    await messageInput.type("Hello Manish")
    await page.waitForTimeout(5000);
})

test("Checkbox",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const singleCheckbox = page.locator("id=isAgeSelected");
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();
})

test("handling alerts",async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on('dialog',async (alert) => {
        const text = alert.message();
        console.log(text);
        await alert.accept()
    })
    await page.locator("button:has-text('Click Me')").nth(0).click();
})


// test("handling dropdown",async({page}) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/javascript-select-dropdown-demo");
//     await page.selectOption("#select-demo",{
//         label:'Tuesday'
//     })
// })