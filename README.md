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
- [ ] cron
- [ ] サービス分割
- [ ] CI/CD
- [ ] jest
- [ ] 認証
- [ ] データの永続化
- [ ] logging