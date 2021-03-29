<!--

自動生成です。直接編集しないでください。

-->
# Bungee Event List
BungeeCord, Waterfall のイベント一覧です。
イベントについて簡単な説明が書かれていますが、詳しい内容は Javadoc を参照してください。
不明点や指摘については Issue や PullRequest にお願いします。

## 参考にしている Javadoc
- https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/ [`#1549`](https://ci.md-5.net/job/BungeeCord/lastBuild)
- https://papermc.io/javadocs/waterfall/ [`#403`](https://papermc.io/downloads#Waterfall)

## 環境毎のイベント一覧
- [bungeecord](only-bungeecord.md)
- [waterfall](only-waterfall.md)
  
## その他
- [非推奨イベント一覧](only-deprecate.md)

## イベント一覧
### `bungeecord` [AsyncEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/AsyncEvent.html)
非同期で処理されるイベントを表す。
### `bungeecord` [ChatEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ChatEvent.html)
プレイヤーがメッセージを送信した時に呼び出される。
### `bungeecord` [ClientConnectEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ClientConnectEvent.html)
クライアントが接続する時に呼び出される。全ての接続の初期段階で呼び出されるので、高速で処理する必要がある。
### `waterfall` [ConnectionInitEvent](https://papermc.io/javadocs/waterfall/io/github/waterfallmc/waterfall/event/ConnectionInitEvent.html)
新しい接続があった時に呼び出される。接続を効率的に閉じることを可能にする。
### `bungeecord` [Event](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/plugin/Event.html)
イベントを表す。
### `bungeecord` [LoginEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/LoginEvent.html)
プレイヤーがログインする時に呼び出される。
### `bungeecord` [PermissionCheckEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PermissionCheckEvent.html)
CommandSender の権限を確認する時に呼び出される。
### `bungeecord` [PlayerDisconnectEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PlayerDisconnectEvent.html)
プレイヤーがプロキシを離れた時に呼び出される。
### `bungeecord` [PlayerHandshakeEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PlayerHandshakeEvent.html)
ハンドシェイクを行う時に呼び出される。プレイヤーの存在やユーザー名を知る事が出来る最初のイベントである。
### `bungeecord` [PluginMessageEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PluginMessageEvent.html)
クライアントやサーバーから送信されたプラグインメッセージを受信する時に呼び出される。
### `bungeecord` [PostLoginEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PostLoginEvent.html)
サーバーに接続する準備が出来た時に呼び出される。ProxiedPlayer にアクセスできる最初のイベントである。
### `bungeecord` [PreLoginEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/PreLoginEvent.html)
ログインを試みる時に呼び出される。Mojang のサーバーでの認証後に取得されるプレイヤーに関連する情報は含まれず、UUID 等は使用することが出来ない。
### `waterfall` [ProxyDefineCommandsEvent](https://papermc.io/javadocs/waterfall/io/github/waterfallmc/waterfall/event/ProxyDefineCommandsEvent.html)
タブ補完に使われるコマンドを定義される時に呼び出される。
### `waterfall` [ProxyExceptionEvent](https://papermc.io/javadocs/waterfall/io/github/waterfallmc/waterfall/event/ProxyExceptionEvent.html)
回復可能な状況で例外が発生した時に呼び出される。
### `bungeecord` [ProxyPingEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ProxyPingEvent.html)
サーバーリストからピングされた時に呼び出される。
### `waterfall` [ProxyQueryEvent](https://papermc.io/javadocs/waterfall/io/github/waterfallmc/waterfall/event/ProxyQueryEvent.html)
クエリ要求を受信した時に呼び出される。
### `bungeecord` [ProxyReloadEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ProxyReloadEvent.html)
プロキシがリロードする時に呼び出される。
### `bungeecord` [ServerConnectEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ServerConnectEvent.html)
サーバーに接続する時に呼び出される。プレイヤーがサーバーに接続するのをキャンセルする場合等に使う。
### `bungeecord` [ServerConnectedEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ServerConnectedEvent.html)
サーバーに接続した時に呼び出される。プレイヤーがログインする前にサーバーに情報を送信する場合等に使う。
### `bungeecord` [ServerDisconnectEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ServerDisconnectEvent.html)
サーバーへの接続を切断した時に呼び出される。
### `bungeecord` [ServerKickEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ServerKickEvent.html)
サーバーからキックされた時に呼び出される。
### `bungeecord` [ServerSwitchEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/ServerSwitchEvent.html)
プレイヤーが接続先のサーバーを変更した時に呼び出される。
### `bungeecord` [SettingsChangedEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/SettingsChangedEvent.html)
クライアント設定を変更した時に呼び出される。
### `bungeecord` [TabCompleteEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/TabCompleteEvent.html)
タブ補完を行う時に呼び出される。
### `bungeecord` [TabCompleteResponseEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/TabCompleteResponseEvent.html)
サーバーがタブ補完を行う時に呼び出される。プロキシによって処理されたタブ補完では呼び出されない。
### `bungeecord` [TargetedEvent](https://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/TargetedEvent.html)
2つのノード間の通信で発生するイベントを表す。
