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
- [x] 複数サービスへの分割
- [x] サービス間の通信（axios入れただけ）
- [ ] jest
- [ ] logging

## App Engineリファレンス
- [App Engine概要](https://cloud.google.com/appengine/docs/an-overview-of-app-engine?hl=ja#services)
- [スタンダード環境関連情報](https://cloud.google.com/appengine/docs/standard/resources?hl=ja)
- [NodeJSチュートリアル](https://cloud.google.com/appengine/docs/standard/nodejs/runtime?hl=ja)

## メモ
- [forkするならこの辺りから](969494eca49eb6c911a48216be4cd04f5a6223d6)