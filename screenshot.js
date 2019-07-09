const puppeteer = require('puppeteer');
const { credentials: { username, password } } = require('./config');

module.exports.urlToImage = async function (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    // await page.authenticate({ username, password });
    await page.goto(url);
    const image = await page.screenshot({ fullPage: true });
    await browser.close();
    return image;
}