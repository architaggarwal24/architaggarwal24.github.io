const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  const pages = [
    'http://localhost:3000/projects.html',
    'http://localhost:3000/experience.html',
    'http://localhost:3000/blog.html',
    'http://localhost:3000/contact.html',
    'http://localhost:3000/projects/project-one.html',
    'http://localhost:3000/projects/project-two.html',
    'http://localhost:3000/projects/project-three.html',
  ];
  for (const url of pages) {
    await page.goto(url, { waitUntil: 'networkidle0' });
    const name = url.split('/').pop().replace('.html','');
    await page.screenshot({ path: `debug-${name}.png`, fullPage: true });
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    console.log('Captured:', name);
  }
  await browser.close();
})();