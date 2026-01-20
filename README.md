# otake-code's Portfolio

React、Material UI、Framer Motion を使用して構築された、モダンでプレミアムな個人ポートフォリオサイトです。
グラスモーフィズムデザイン、インタラクティブな背景エフェクト、そして詳細なアニメーションを特徴としています。

🌐 **Live Demo:** [https://otake-code.github.io](https://otake-code.github.io)

## ✨ 特徴 (Features)

*   **Premium Design**: ダークテーマを基調とし、グラスモーフィズムを取り入れた洗練されたUI。
*   **Entry Animation**: サイト訪問時に「Welcome to my portfolio」の文字がタイプライター風に表示され、ドラマチックに飛び散って消えるオープニング演出。
*   **Interactive Background**: マウスカーソルに追従し、有機的に形状を変えながら発光する背景エフェクト。
*   **Responsive**: PC、タブレット、スマートフォンすべてに最適化されたレスポンシブデザイン。
*   **Smooth Navigation**: スクロール位置に応じたヘッダーのハイライトや、スムーズなスクロール動作。

## 🛠 使用技術 (Tech Stack)

*   **Frontend**: [React](https://reactjs.org/)
*   **UI Framework**: [Material UI (MUI)](https://mui.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/)
*   **Styling**: Styled Components / Emotion
*   **Deployment**: GitHub Pages

## 🚀 ローカルでの実行方法 (Getting Started)

このプロジェクトをローカル環境で実行するには、以下の手順に従ってください。

### 1. 前提条件
*   Node.js がインストールされていること。

### 2. インストール
リポジトリをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/otake-code/otake-code.github.io.git
cd otake-code.github.io
npm install
```

### 3. 開発サーバーの起動
ローカルサーバーを立ち上げます。自動的にブラウザが開きます。

```bash
npm start
```
*   アクセス先: `http://localhost:3000`

## 🌍 デプロイ (Deployment)

GitHub Pages へのデプロイが設定済みです。編集後、以下のコマンドを実行するだけで変更を公開できます。

```bash
npm run deploy
```
このコマンドは自動的に `npm run build` を実行し、生成されたファイルを `gh-pages` ブランチにプッシュします。

## 📁 ディレクトリ構成

```
src/
├── components/          # 各セクションのコンポーネント
│   ├── EntryAnimation.js      # オープニングアニメーション
│   ├── InteractiveBackground.js # 背景エフェクト
│   ├── Header.js              # ナビゲーションヘッダー
│   ├── Home.js                # トップ（ヒーロー）セクション
│   ├── Skills.js              # スキル一覧
│   ├── Projects.js            # プロジェクト紹介
│   ├── Publications.js        # 研究業績
│   ├── Contact.js             # 連絡先
│   └── ...
├── theme.js             # MUIのカスタムテーマ定義（色、フォント）
├── App.js               # メインアプリケーション
└── index.js             # エントリーポイント
```

## 📝 ライセンス

This project is open source and available under the [MIT License](LICENSE).
