import test from '@playwright/test'
test("Myfirst",async({browser})=>{
const context =await browser.newContext()
const page=await context.newPage()
await page.goto("https://www.amazon.in/ref=nav_logo")
})