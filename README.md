# 日本百名山チェック

日本百名山の登頂状況をチェックし、SNS投稿用PNG画像を生成できるフロントエンドのみのWebアプリです。

## 特徴

- ログインなし
- バックエンド、DB、認証なし
- 登頂データは `localStorage` に保存
- 100座チェックリスト
- 山名検索、エリア絞り込み、登頂済み/未踏フィルタ
- 地図上の登頂済み/未踏色分け
- SNS投稿用Canvas画像生成
- PNG保存
- Web Share API対応端末では共有

## 地図データ

アプリ本体では軽量化済みの `data/japan-simplified.geojson` を読み込みます。

元データは `amay077/JapanPrefGeoJson` の `japan.geojson` です。使用ライセンスは配布元に準じ Public Domain とされています。

## ローカル確認

```bash
python3 -m http.server 4173
```

ブラウザで `http://127.0.0.1:4173/` を開きます。

## 公開

静的ファイルだけで動くため、以下のどれでも公開できます。

- Netlify Drop: このフォルダをアップロード
- Vercel: Framework PresetはOther、Build Commandなし、Output Directoryは `.`
- GitHub Pages: リポジトリに置き、PagesのSourceをルートに設定
- Cloudflare Pages: Build Commandなし、Output Directoryは `.`

公開対象ファイルは `index.html`、`styles.css`、`app.js`、`data/japan-simplified.geojson`、`README.md` です。
