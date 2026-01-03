## ページ構成
GitHub Pages + Astro

## Astroプロジェクト作成手順
▼作業フォルダで下記コマンドを実行する
```
npm create astro@latest
```
▼質問への解答例
```
Where should we create your new project?
→ [プロジェクト名]

How would you like to start your new project?
→ Use minimal (empty) template

Install dependencies?
→ Yes

Initialize a new git repository?
→ Yes

```

▼ページをローカルで確認
```
cd プロジェクト
npm run dev
```
`http://localhost:4321/プロジェクト/` で「Astro」が表示されればOK

## GitHub Pages用の設定
▼`astro.config.mjs` を編集
```
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ユーザー名.github.io",
  base: "/リポジトリ名/",
});
```

▼GitHub Actions（自動デプロイ）
```
mkdir -p .github/workflows
code .github/workflows/deploy.yml
```

▼deploy.yml の内容
```
name: Deploy Astro to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```
上記コミットしてプッシュする

▼GitHub Pagesを有効化
- GitHubリポジトリ：Settings → Pages
  - Source：GitHub Actions

▼最終確認
`https://ユーザー名.github.io/リポジトリ名/` でページ表示されたら成功
