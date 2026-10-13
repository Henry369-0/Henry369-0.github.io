async function verifyHomepageNavigation(page) {
  await page.setViewportSize({ width: 1280, height: 600 });
  await page.goto(new URL('#ai', page.url()).href);
  await page.reload();
  await page.evaluate(() => document.querySelector('#ai').scrollIntoView({ behavior: 'instant', block: 'start' }));
  const before = await page.evaluate(() => scrollY);
  await page.mouse.wheel(0, 180);
  await page.waitForTimeout(800);
  const reading = await page.evaluate(() => ({
    delta: scrollY,
    lastProject: document.querySelectorAll('.github-project')[3].getBoundingClientRect().toJSON(),
    labels: [...document.querySelectorAll('.page-indicator a')].map(a => a.getAttribute('aria-label')),
    closedDrawerInert: document.querySelector('.detail-drawer').inert,
  }));
  if (reading.delta - before > 300 || reading.lastProject.bottom > 600 || reading.lastProject.bottom < 0) throw new Error('Scrolling skips unread projects.');
  if (reading.labels.some(label => !label) || !reading.closedDrawerInert) throw new Error('Navigation names or closed drawer focus handling are missing.');
  const widths = [];
  for (const width of [320, 375, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    const actual = await page.evaluate(() => document.documentElement.scrollWidth);
    if (actual > width) throw new Error(`Horizontal overflow at ${width}px.`);
    widths.push({ width, scrollWidth: actual });
  }
  await page.emulateMedia({ reducedMotion: 'reduce' });
  if (await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior) !== 'auto') throw new Error('Reduced motion still animates scroll.');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  return { continuousReading: true, labels: reading.labels, closedDrawerInert: true, widths, reducedMotion: true };
}
