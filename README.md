## これは何？
- GAE（Google App Engine）を試すサンプルプロジェクト

## 目的
- PCA試験を通して、やたらGoogle Cloudが推してたのでちょっと試してみようかななプロジェクト
- どういうことができるのか、どの程度の規模のアプリケーションなら耐えられそうなのかなを試したいというモチベーション

## Quick Start

```
$ npm i

$ npm start
```

## Deploy

23.12.17時点では、gcloudのデプロイコマンドをCLIから実行してます
※ Google Cloudのアカウントの作成が必要
※ gcloud SDKのインストールおよび初期設定は済んでいるものとする

```
$ gcloud app deploy
```

## TODO
- [x] 最低限のTypescript化
- [ ] [dispatch](https://cloud.google.com/appengine/docs/standard/reference/dispatch-yaml?hl=ja&tab=node.js)
- [ ] [app.yamlのカスタム](https://cloud.google.com/appengine/docs/standard/reference/app-yaml?hl=ja&tab=node.js)
- [ ] [cron](https://cloud.google.com/appengine/docs/standard/scheduling-jobs-with-cron-yaml?hl=ja)
- [ ] [firestoreとの連携](https://cloud.google.com/appengine/docs/standard/configuring-datastore-indexes-with-index-yaml?hl=ja&tab=node.js)
- [ ] [queue処理 ※ NodeJs対象外](https://cloud.google.com/appengine/docs/standard/reference/queueref?hl=ja&tab=go#top)
- [ ] サービス分割
- [ ] CI/CD
- [ ] jest
- [ ] 認証
- [ ] データの永続化
- [ ] logging
- [ ] カナリアリリース

## App Engineリファレンス
- [App Engine概要](https://cloud.google.com/appengine/docs/an-overview-of-app-engine?hl=ja#services)
- [スタンダード環境関連情報](https://cloud.google.com/appengine/docs/standard/resources?hl=ja)
- [NodeJSチュートリアル](https://cloud.google.com/appengine/docs/standard/nodejs/runtime?hl=ja)