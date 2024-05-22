*Ritsu-matchの概要*
Ritsu-matchは立命館大学のアプリ開発サークルである「歩くアルパカ+R」が現在開発をしている大学内限定のマッチングアプリです。
このプロジェクトのメンバーは現在合計で6人で、その内、エンジニアは3人でデザインは3人です。
機能としては、立命館生のみ（今後は他大学にも対応させていく方針）が利用できるマッチングアプリで、友達マッチング機能、恋人マッチング機能、チャット機能、空きコママッチング機能、自動合コンセッティング機能等の実装を現在検討しています。
使用しているフレームワークはreactnativeとfirebaseとdjangoです。
今後大学内で市場規模の調査等を行って、アプリ内課金の価格帯やアプリ全体の方針を慎重に決めていこうと考えています。
一応目標としては今年の夏休み前までにリリースをし、ユーザーをある程度獲得して、夏休み中暇な立命館生をターゲットに規模を拡大していきたいと考えています。

企業の方々に少しだけ見ていただけるように現在は特別にPublicにしています。

勝手に変更して申し訳ないです！




<<開発メモ>>
ナビゲータの階層構造(このREADMEを編集モードにしたら見やすくなります)

StackNavigator(App.js)
|
└── Home (Screen)
     └── TabNavigator
          ├── HomeView (Tab Screen)
          ├── Friends (Tab Screen)
          ├── Talk (Tab Screen)
          └── MyPage (Tab Screen)


