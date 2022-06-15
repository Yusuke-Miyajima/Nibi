# README

Repositoty for NibiProjects

## デプロイフォルダー構成
```
- /var/www/nibi
  - current # 動いているプロジェクトフォルダー。
  - shared  # 共有なファイル
  - releases # デプロイしたバージョン
``` 

```
# 音楽ファイルは以下のフォルダーに格納している。
/var/www/nibi/shared/public/audio
```
## ソースコードを修正した後、再デプロイする

```
cd ~/Nibi
# 最新ソースコードをPull
git checkout main
git pull origin main

# デプロイ
bundle exec cap production deploy # このコマンド実行が終わったら、完了。ウェブサイトで最新版を確認できる。

```

## Pumaサーバー起動・再起動コマンド

```
sudo systemctl start puma # 起動
sudo systemctl restart puma #　再起動
```