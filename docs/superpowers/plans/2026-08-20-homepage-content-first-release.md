# Homepage Content First Release Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the current five-screen personal homepage into the first public version of the nine-part, job-oriented content architecture.

**Architecture:** Keep the static HTML approach. `index.html` remains the public entry page, while a private working directory outside `portfolio` holds the source-to-public copy decisions. Public case details are introduced only after each claim has passed source, attribution, and sensitivity checks.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, local Markdown source material, GitHub Pages.

## Global Constraints

- Use natural Chinese that sounds like a person speaking. Avoid generic AI or consulting jargon.
- Career focus is business analysis, strategy operations, and business operations analysis. AI is a working method, not a job-title substitute.
- Keep company names for Huachuang Securities, Dewu, ByteDance TikTok Shop, and JD.com; remove internal data and sensitive operational details.
- Every public number must have a verified source, unit, scope, time range, and ownership label.
- Preserve the static single-page stack and current lightweight hero asset.
- Do not publish diary content, credentials, internal source files, code, screenshots, Tokens, or raw company data.

---

### Task 1: Build a private public-copy ledger

**Files:**
- Create: `C:\Users\123\Desktop\秋招简历-0814\个人主页内容工作台\公开内容台账.md`
- Read: `C:\Users\123\Desktop\实习经历蒸馏后汇总\2504-2508_华创证券有限责任公司_机械行业研究实习生\华创证券行研实习_经历档案.md`
- Read: `C:\Users\123\Desktop\实习经历蒸馏后汇总\2508-2510_上海得物信息集团有限公司_数据分析实习生\得物数据分析实习_经历档案.md`
- Read: `C:\Users\123\Desktop\实习经历蒸馏后汇总\2601-2607_字节跳动TikTokShop_策略运营实习生\字节跳动_TikTokShop策略运营实习_完整经历档案.md`
- Read: `C:\Users\123\Desktop\实习经历蒸馏后汇总\2607-2609_京东_商业分析实习生\京东秒送商业分析实习_完整经历档案.md`

**Interfaces:**
- Consumes: verified local material and the public-boundary rules in the design spec.
- Produces: one line per candidate claim with source path, claim type, public wording, sensitivity level, and decision.

- [ ] **Step 1: Create the ledger heading and decision table**

```markdown
# 个人主页公开内容台账

| 页面 | 候选表述 | 来源 | 归属 | 敏感等级 | 公开决定 |
|---|---|---|---|---|---|
```

- [ ] **Step 2: Add only claims that can be attributed**

For each claim, write one of `个人完成`、`个人参与`、`团队背景`、`待核对` in the 归属 column. Write `可公开`、`脱敏后可公开` or `不公开` in the 公开决定 column.

- [ ] **Step 3: Reject unsupported metrics before copywriting**

Do not carry any row marked `待核对` or `不公开` into `portfolio/index.html`.

- [ ] **Step 4: Verify the ledger has all four companies and no secrets**

Run: `rg -n "华创|得物|字节|京东|Token|密码|密钥|账号" "C:\Users\123\Desktop\秋招简历-0814\个人主页内容工作台\公开内容台账.md"`

Expected: all four company names are present; the secret-keyword search has no matches.

### Task 2: Draft public copy for the education and training pages

**Files:**
- Modify: `C:\Users\123\Desktop\秋招简历-0814\portfolio\index.html`
- Read: `C:\Users\123\Desktop\蒸馏本科内容\00_项目说明与进度`
- Read: `C:\Users\123\Desktop\蒸馏研究生内容\我的研究生第一年——实习之外的学校与生活.md`

**Interfaces:**
- Consumes: the approved architecture and only material that can be stated publicly.
- Produces: two distinct full-screen sections, one for education path and one for transferable training.

- [ ] **Step 1: Replace generic education copy with source-backed copy**

Keep the school names and degree names. Write no more than 70 Chinese characters for each school. The Zhengzhou University paragraph must describe research and real-problem training; the Fudan University paragraph must describe international business, data methods, and current study context.

- [ ] **Step 2: Add a separate training section**

Use the heading `把材料做实，再把判断说清楚。` and three short items: research and evidence, data and structure, expression and coordination. Each item must use an observable verb and avoid abstract labels such as `能力提升`.

- [ ] **Step 3: Add school marks only after verifying permitted source files**

Store two small, web-optimized assets under `portfolio/assets/education/`. Add meaningful `alt` text. Do not use degree certificates, transcripts, or scans of personal documents.

- [ ] **Step 4: Verify text and accessibility**

Run: `rg -n "郑州大学|复旦大学|把材料做实" portfolio/index.html`

Expected: each phrase appears exactly once in the intended section.

### Task 3: Build the public internship overview

**Files:**
- Modify: `C:\Users\123\Desktop\秋招简历-0814\portfolio\index.html`
- Read: `C:\Users\123\Desktop\秋招简历-0814\个人主页内容工作台\公开内容台账.md`

**Interfaces:**
- Consumes: only ledger rows marked `可公开` or `脱敏后可公开`.
- Produces: a four-entry internship overview that names the companies and describes the work context without exposing sensitive business detail.

- [ ] **Step 1: Replace the three generic experience cards with four company entries**

Use this display order: 华创证券、得物、字节跳动 TikTok Shop、京东。 Each entry contains company name, role direction, and one 20 to 32 Chinese-character description from the ledger.

- [ ] **Step 2: Add attribution-safe wording**

Use verbs such as `参与梳理`、`负责分析`、`协助搭建` only when the ledger says the personal role supports them. Do not write business results as personal results unless the ledger has a verified `个人完成` row.

- [ ] **Step 3: Verify no sensitive markers enter the public file**

Run: `rg -n "密码|账号|Token|内部|保密|GMV|订单量|成本率" portfolio/index.html`

Expected: no matches unless a metric has been explicitly cleared in the ledger with its public wording and attribution.

### Task 4: Add the AI workbench and restrained skill tags

**Files:**
- Modify: `C:\Users\123\Desktop\秋招简历-0814\portfolio\index.html`
- Read: `C:\Users\123\Desktop\秋招简历-0814\portfolio\README.md`

**Interfaces:**
- Consumes: public GitHub repositories and public workflow artifacts.
- Produces: a concise AI-workbench page and at most five source-backed skills on the hero.

- [ ] **Step 1: Add no more than five hero skill tags**

Each tag must be linked conceptually to a visible case, workbench item, or repository. Do not add proficiency percentages or star ratings.

- [ ] **Step 2: Rewrite the AI page around work, not tools**

Use three blocks: `读材料`、`查证据`、`做成可复用的东西`. Each block gives one plain-language example of the outcome and avoids mentioning models or prompts unless the artifact itself is public.

- [ ] **Step 3: Add GitHub as the single external proof link**

Keep the existing GitHub profile link. Do not expose private repositories or local paths.

- [ ] **Step 4: Verify copy tone**

Run: `rg -n "赋能|闭环|抓手|方法论|持续迭代" portfolio/index.html`

Expected: no matches.

### Task 5: Expand from five to nine screens and add safe detail-page entry points

**Files:**
- Modify: `C:\Users\123\Desktop\秋招简历-0814\portfolio\index.html`
- Create: `C:\Users\123\Desktop\秋招简历-0814\portfolio\cases\README.md`

**Interfaces:**
- Consumes: sections from Tasks 2 through 4 and the public-copy ledger.
- Produces: nine navigable screens and a documented gate for future case pages.

- [ ] **Step 1: Add sections in this order**

`见面`、`关心的问题`、`成长路径`、`训练沉淀`、`业务现场`、`代表案例`、`工作方式`、`AI 工作台`、`正在构建与联系`。

- [ ] **Step 2: Update navigation and page indicator to nine targets**

Every `data-target` must map to one `section[data-panel]`. Preserve keyboard and wheel paging behavior.

- [ ] **Step 3: Create the case-page gate**

```markdown
# Case pages

Create a public case page only after its public-copy ledger rows are marked `可公开` or `脱敏后可公开`.

Required order: problem, judgment, action path, retained artifact.
```

- [ ] **Step 4: Verify screen and navigation counts**

Run: `rg -o 'section class="panel' portfolio/index.html | Measure-Object | Select-Object -ExpandProperty Count`

Expected: `9`

Run: `rg -o 'data-target="[0-8]"' portfolio/index.html | Measure-Object | Select-Object -ExpandProperty Count`

Expected: `18`

### Task 6: Validate, review and publish

**Files:**
- Modify: `C:\Users\123\Desktop\秋招简历-0814\portfolio\index.html`
- Test: local static server against `portfolio/`

**Interfaces:**
- Consumes: completed public copy and nine-screen markup.
- Produces: a visually reviewed, mobile-safe GitHub Pages release.

- [ ] **Step 1: Run static checks**

Run: `git -C portfolio diff --check`

Expected: no output.

- [ ] **Step 2: Run the local server and inspect the first screen plus every navigation target**

Run: `py.exe -3 -m http.server 8770 --bind 127.0.0.1`

Expected: `Serving HTTP on 127.0.0.1 port 8770`.

- [ ] **Step 3: Check performance assets**

Run: `Get-Item portfolio\hero-character-optimized.webp | Select-Object Name,Length`

Expected: the hero asset remains below `150000` bytes.

- [ ] **Step 4: Commit and push only public assets and public copy**

```powershell
git -C portfolio add index.html cases/README.md assets/education
git -C portfolio commit -m "feat: add first long-term homepage content structure"
git -C portfolio -c http.sslBackend=openssl push origin main
```

