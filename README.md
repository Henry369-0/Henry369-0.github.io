# Henry369-0.github.io

刘柏杨的求职型个人主页：教育背景、商业分析、策略运营与 AI 工作流。

## 本地运行

```powershell
npm install
npm run check
npm run dev
```

打开终端提示的本地地址即可预览。页面文字集中在 `src/data/site.ts`，后续修改内容时优先编辑这个文件。主页重点是思考方式和能力证据，不是第二份简历；公司经历只做脱敏表达，公开项目才放真实外链。

## 发布

将 `portfolio` 目录作为 `Henry369-0.github.io` 仓库根目录，推送到 `main` 分支后，GitHub Actions 会发布到 GitHub Pages。

首次发布前，在仓库 Settings → Pages → Build and deployment → Source 中选择 GitHub Actions。
