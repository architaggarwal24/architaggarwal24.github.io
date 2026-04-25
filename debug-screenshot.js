const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const pages = [
    { url: 'http://localhost:3000/index.html', name: 'home' },
    { url: 'http://localhost:3000/projects.html', name: 'projects' },
    { url: 'http://localhost:3000/experience.html', name: 'experience' },
    { url: 'http://localhost:3000/blog.html', name: 'blog' },
    { url: 'http://localhost:3000/contact.html', name: 'contact' },
  ];

  for (const p of pages) {
    await page.goto(p.url, { waitUntil: 'networkidle0' });
    await page.screenshot({
      path: `debug-${p.name}.png`,
      fullPage: true
    });
    console.log(`Captured ${p.name}`);
  }

  await browser.close();
})();
