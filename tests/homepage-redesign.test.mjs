import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

assert.match(html, /--paper:\s*#/u, '页面应定义米色工作笔记板的基础色');
assert.match(html, /class="panel hero paper-hero"/u, '首页应使用新版纸张式主视觉');
assert.match(html, /华创证券 · 行业研究/u, '首页应直接展示华创证券行业研究经历');
assert.match(html, /得物 · 数据分析/u, '首页应直接展示得物数据分析经历');
assert.match(html, /字节跳动 · 国际电商运营/u, '首页应直接展示字节跳动国际电商运营经历');
assert.match(html, /京东秒送 · 商业分析/u, '首页应直接展示京东秒送商业分析经历');
assert.match(html, /zhengzhou-university-emblem-clean\.png/u, '教育页应引用郑大校徽');
assert.match(html, /fudan-university-emblem-clean\.png/u, '教育页应引用复旦校徽');
assert.match(html, /由北京大学牵头的中小微企业调查（ESSIC）/u, '本科教育页应保留已确认的项目背景');
assert.doesNotMatch(html, /<button[^>]+data-detail=/u, '所有核心内容应直接展示，不要求访客额外展开');
assert.match(html, /AI 是我的<br>工作台/u, 'AI 页应使用直接、克制的标题');
assert.match(html, /https:\/\/github\.com\/Henry369-0\/dataready/u, 'AI 页应链接到公开的数据质量项目');
assert.match(html, /https:\/\/github\.com\/Henry369-0\/say2build/u, 'AI 页应链接到公开的项目工作台');
assert.match(html, /https:\/\/github\.com\/Henry369-0\/style-dna/u, 'AI 页应链接到公开的视觉方法项目');
assert.doesNotMatch(html, /operations-workbench\.png/u, 'AI 页不应保留不协调的右侧配图');
assert.equal((html.match(/class="case-item"/gu) ?? []).length, 6, '代表案例页应直接展示六个案例');
assert.match(html, /object-fit:contain/u, '联系页词云应完整包含在展示区域内');
assert.match(html, /LBYprc0610/u, '联系页应展示已授权的微信号');
assert.match(html, /liuboyang-word-cloud\.png/u, '联系页应使用生成的词云图');
assert.doesNotMatch(html, /class="drawer-backdrop" type="button" aria-label="关闭详情"/u, '遮罩与关闭按钮不应使用同一个无障碍名称');

console.log('homepage redesign content checks passed');
