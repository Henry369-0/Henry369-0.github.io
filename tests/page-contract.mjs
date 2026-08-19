import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile("src/pages/index.astro", "utf8");
const data = await readFile("src/data/site.ts", "utf8");
const layout = await readFile("src/layouts/Base.astro", "utf8");
const robots = await readFile("public/robots.txt", "utf8");

for (const id of ["ai-practice", "selected-thinking", "selected-work", "contact"]) {
  assert.match(page, new RegExp(`id=[\\"']${id}[\\"']`));
}

for (const forbidden of ["内部系统", "SQL原文", "简历下载", "二维码"]) {
  assert.doesNotMatch(data, new RegExp(forbidden));
}

assert.match(data, /status:\s*["']building["']/);
assert.match(data, /caseNotes:/);
assert.match(data, /统一口径/);
assert.match(data, /人工复核/);
assert.match(data, /education:/);
assert.match(data, /郑州大学/);
assert.match(data, /复旦大学/);
assert.match(data, /国际经济与贸易/);
assert.match(data, /国际商务/);
assert.match(data, /educationThemes:/);
assert.match(data, /证据/);
assert.match(data, /privacyBoundary:/);
assert.match(page, /id=["']case-notes["']/);
assert.match(page, /id=["']education["']/);
assert.match(page, /id=["']education-themes["']/);
assert.match(page, /id=["']privacy-boundary["']/);
assert.match(layout, /og:title/);
assert.match(layout, /og:image/);
assert.match(robots, /Sitemap/);

const component = await readFile("src/components/ProjectCard.astro", "utf8");
assert.match(component, /href\.length > 0/);
assert.match(component, /持续构建中/);

console.log("page contract passed");
