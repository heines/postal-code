# Project Name

## Folders

| folder name | purpose |
| --- | --- |
| docs | `npm run build` を実行すると書き出される。<br>github.pages公開用のファイルとして扱う。 |
| dst | `npm start` を実行すると書き出される。<br>開発時にローカルサーバーから参照するファイル。 |
| src | 開発に使用するファイル。 |

## Command

| command name | purpose |
| --- | --- |
| `npm start` | 開発時に実行するコマンド。<br>[Brosersync](https://github.com/browsersync/browser-sync)によってローカルサーバーが起動し、開発用ファイルの更新を監視する。 |
| `npm run build` | 納品・公開用のファイルを生成するコマンド。 |

## Breakpoints

| device | display resolution |
| --- | --- |
| PC | 1366px (HD FWXGA) |
| Tablet Landscape | 1024px (XGA / iPad Landscape) |
| Tablet Portrait | 768px (iPad Portrait) |

| mixin name | PC L | PC S | Tablet L | Tablet P | Mobile L | Mobile P |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| l-pc | **○** | **○** | - | - | - | - |
| l-pc-l | **○** | - | - | - | - | - |
| l-pc-s | - | **○** | - | - | - | - |
| l-tablet | - | - | **○** | **○** | - | - |
| l-tablet-l | - | - | **○** | - | - | - |
| l-tablet-p | - | - | - | **○** | - | - |
| l-mobile | - | - | - | - | **○** | **○** |
| l-mobile-l | - | - | - | - | **○** | - |
| l-mobile-p | - | - | - | - | - | **○** |
| l-tablet-and-mobile | - | - | **○** | **○** | **○** | **○** |
| l-more-than-mobile | **○** | **○** | **○** | **○** | - | - |
| l-less-than-pc-s | - | **○** | **○** | **○** | **○** | **○** |
