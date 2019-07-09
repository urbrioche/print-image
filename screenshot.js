const puppeteer = require('puppeteer');
const { credentials: { username, password } } = require('./config');

module.exports.urlToImage = async function (url) {
    console.log('1');
    const browser = await puppeteer.launch({
        headless: true, 
        args: ['--no-sandbox', '--disable-setuid-sandbox','--disable-dev-shm-usage'],
        ignoreDefaultArgs: ['--disable-extensions'],
    });
    console.log('2');
    // const browser = await puppeteer.launch({ignoreDefaultArgs: ['--disable-extensions']});
    const page = await browser.newPage();
    console.log('3');

        //****************************
    // Additional this code(start)
    //****************************
      page.on('error', msg => {
        throw msg ;
      });
    //****************************
    // Additional this code(end)
    //****************************
    // await page.authenticate({ username, password });
    await page.goto(url);
    console.log('4');
    const image = await page.screenshot({ fullPage: true });
    console.log('5');
    await browser.close();
    console.log('6');
    return image;
}