const puppeteer = require('puppeteer-extra');
const randomName = require('random-name');
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

puppeteer.launch({
    headless: false,
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", //ganti sesuai punya nt
    userDataDir: "C:/Users/LENOVO/AppData/Local/Google/Chrome/User", //ganti sesuai punya nt
}).then( async browser => {
    for (let i = 1; i <= 400; i++) {
        console.log(`run ke-${i}`);
        const context = await browser.createIncognitoBrowserContext();
        const page = await context.newPage();
        await page.goto('https://form.waitlistpanda.com/go/yfuwKIAgXGDlB8A8oirR?ref=3r6NDCMT9OA2Ax6aDOtD');
        await page.click('div > div > label > input')
        page.keyboard.type(`${randomName.first()}${randomName.last()}@gmail.com`)
        await page.waitForTimeout(1000);
        await page.click('div.sc-35d848be-2.hMDocC > div');
        await page.click('div.sc-ea90bab6-3.fMIZpx')
        await page.waitForSelector('div.sc-cf971242-0.hyoUeF > h1')
        await page.close()
        console.log(`done ${i}`);
    }
        await browser.close()
})