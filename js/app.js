// const { default: Vue } = require("vue");



var vm = new Vue({
  el: "#section01",
  data: {
    message:
      "強く、美しく、しなやかに、<br class='br_on500'>髪がよみがえる効果実感。",
    threePoints: [
      {
        subtitle: "特許技術",
        subtitle2: "インカラミ",
        text: "美しい髪に必要不可欠なタンパク質を新しく形成する業界初の反応技術。",
      },

      {
        subtitle: "毛髪強度回復",
        subtitle2: "140%",
        text: "インカラミ効果の強度回復でカラーの色持ちスタイリングのしやすさ向上。",
      },

      {
        subtitle: "ノーベル賞受賞成分",
        subtitle2: "フラーレン",
        text: "活性酵素を除去する高い抗酸化力を持ちインカラミ効果の持続力をアップ。",

      },
    ],

    message2: "さらに<br>「TOKIO HYPER INKARAMI」は<br>ケラチン濃度を<span>20%アップ</span><br>インカラミ効果を<span>最大化</span><br>することで<br>毛髪強度回復は<span>140%以上</span>",
  },
});



var vm = new Vue({
  el: "#section02",
  data: {
    // h2
    text1: "週<span>2</span>回、<span>月</span>曜日と<span>木</span>曜日の使用で<br class='br_on500'>効果実感！",

    text5: 'HYPER INKARAMI HOME<br>をお試しください。',
    // h3
    text2: "<strong>おうちでサロンケア</strong><br>持続力だけじゃない、<br>唯一<span>補強</span>と<span>保湿</span>を同時に<br>叶えることが可能です。",

    // h4
    text3: 'その持続の理由は簡単!!<br>サロンで使用するトリートメントと<br class="br_on500">同じ成分を使用した<br>”業界初の集中ケアマスク”',

    // h5
    text4: "TOKIOインカラミサロントリートメント<br class='br_on500'>【4番】と同じ成分",

    text6: '「インカラミ効果の持続」<br>その理由は簡単!!<br>サロンで使用するトリートメントと<br class="br_on500">同じ成分を使用した<br class="br_on500">「集中ケアパック」だから！',

    routineDays: [
      {weekday: '月曜日', routine: 'フローラルの香りで気分を上げる！'},
      {weekday: '木曜日', routine: '週末に向けて髪を綺麗にする準備！'},
    ],

      // div
    voices: [
      {
        heading: 'サロンの想い',
        body: 'お客様には綺麗な髪でまた来店してほしい',
        img: 'images/section05-01.jpg',
        oddOrEven: 'odd',
      },
      {
        heading: '実際にトリートメントをしたお客様の感想',
        body: 'この質感がもっとながく続けばいいのに。ホームケアってあるのかな？',
        img: 'images/section05-02.jpg',
        oddOrEven: 'even',
      },
    ],

    parts: [
      {
        id:1,
        heading: '髪に潤いを与える',
        body: 'セラミド、18MEAの働きで水分と油分のバランスを整えます。',
        int: 'odd',
      },
      {
        id:2,
        heading: 'インカラミの持続',
        body: 'TOKIOトリートメントの効果実感の持続をサポートします。',
        int: 'even',
      },
      {
        id:3,
        heading: '紫外線から守る',
        body: 'フラーレンの働きによって、活性酸素を除去します。',
        int: 'odd',
      },
      {
        id:4,
        heading: '髪を引き締める',
        body: '３種のケラチンを配合、髪を補強します。',
        int: 'even',
      }
    ],
  }
});


var vm = new Vue({
    el: "#section04",
    data: {
        // steps
        text5: "正しい使い方はこれ！</span>",
        text6: "月曜日と木曜日、お風呂で集中ケア<br>4ステップでより良い仕上がりへ",
        steps: [
        {
            id:1,
            img: 'images/tokio-home_001.png',
            body: 'シャンプー後に水分をしっかり切る',
            alt: "シャンプー後に",
        },
        {
            id:2,
            img: 'images/tokio-home_002.png',
            body: '10円玉大暗いの量を目安にして、スライム状のHOMEを手のひらに出します。',
            alt: "HYPER HOMEを手に",
        },
        {
            id:3,
            img: 'images/tokio-home_003.png',
            body: 'クリーム状に白くなるまでしっかり伸ばしてから、中間から毛先中心に馴染ませます。',
            alt: "HYPER HOMEをクリーム状に",
        },
        {
            id:4,
            img: 'images/tokio-home_004.png',
            body: '5分ほど放置して流します<br><span>※塗布後にクシで髪全体をとかしてもらうと馴染みが更に良くなり、質感が際立ちます。</span> ',
            alt: "HYPER HOMEを放置",
        },
      ]
    }
});

var vm = new Vue({
  el: "#section05",
  data: {
      topText: 'サロンはこちらから',
      salonType: [
        {
          img: 'images/img-tokio.png',
          link: 'http://tokio.tokyo/',
          text: 'tokio.tokyoサロン掲載サイト',
        },
        {
          img: 'images/img-kamisma.png',
          link: 'https://beauty.kamisma.com/',
          text: 'カミスマビューティーサロン予約サイト',
        }
      ]

  }
});

var vm = new Vue({
  el: '#section06',
  data: {
    topText: '更に「イエでインカラミできる毎日」のケアは',
    images: [
      {imgURL: 'images/tokio_bg001.png', alt: 'TOKIO インカラミ'},
      {imgURL: 'images/tokio_bg002.png', alt: 'TOKIO インカラミ HEAD SPA'},
    ]
  }
});

var vm = new Vue({
  el: '#section10',
  data: {
    topMessage1: 'さらに「TOKIO IE HYPER INKARAM」<br>を合わせて使用すると<br class="br_on375">効果実感アップ',
    topMessage: 'このシリーズは選ばれたサロンの<br>店舗でしか手に入らない',
    topMessage2: '「TOKIOハイパーインカラミ」のノウハウを<br>取り得れた<br><strong>化学反応するシャンプー・トリートメント</strong><br>それによって、',
    topMessage3: 'ご自宅で、サロンケアをするという新発想で、<br>新しいヘアケアの常識をご提案します。',
    images: [
      {imgURL: 'images/tokio_bg001.png', alt: 'TOKIO インカラミ'},
      // {imgURL: 'images/tokio_bg002.png', alt: 'TOKIO インカラミ'},
    ]
  }
});
