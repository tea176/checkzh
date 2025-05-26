# 姓名筆劃顯示

這是一個簡單的靜態網站，輸入中文姓名後會將每個字放大顯示並標示筆劃數。

## 📁 檔案說明

- `index.html`：主網頁程式，使用 ES Module 匯入筆劃資料模組。
- `zh-stroke-data.js`：本地筆劃字典模組，包含常見姓氏與名字用字。

## 🧰 使用方式

### 1. 打包下載

將以下兩個檔案放入同一資料夾：

- `index.html`
- `zh-stroke-data.js`

打包為 `zip`：

```bash
zip chinese-stroke-app.zip index.html zh-stroke-data.js
```

### 2. 在本機開啟

直接雙擊 `index.html` 用瀏覽器打開即可。

> ⚠️ 建議使用支援 ES Modules 的現代瀏覽器，例如 Chrome、Edge、Firefox、Safari。

### 3. 發佈到 GitHub Pages

1. 新建 GitHub Repository。
2. 上傳 `index.html` 和 `zh-stroke-data.js`。
3. 到 Repo 的 `Settings` > `Pages`，選擇 `main` branch 和 `/root` 資料夾，點選「儲存」。
4. 幾分鐘後即可透過網址存取（如：https://你的帳號.github.io/你的 repo 名稱）。

## 🧩 擴充

- 想支援更多字？請到 [g0v/zh-stroke-data](https://github.com/g0v/zh-stroke-data) 專案，使用完整資料。
- 可加上拼音、筆順動畫、姓氏統計等功能。

有需要我幫忙整合或加上 API 支援也可以喔 😄
