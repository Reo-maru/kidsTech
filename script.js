const correctSound = new Audio('Quiz-Correct_Answer02-1.mp3');
const wrongSound = new Audio('Quiz-Wrong_Buzzer02-1.mp3');

const allQuizData = [
    {
      question: "たいようけいで　もっとも　おおきな　わくせいは　どれ？",
      choices: ["ちきゅう", "かせい", "もくせい", "きんせい"],
      answer: 2,
      explanation: "もくせいはたいようけいでもっとも　おおきな　わくせいで、質量や直径ともに最大です。"
    },
    {
      question: "ちきゅうから　もっとも　ちかい　こうせいは？",
      choices: ["あるでばらん", "ぷろきしま・けんたうり", "しりうす", "べてるぎうす"],
      answer: 1,
      explanation: "ぷろきしま・けんたうりは、ちきゅうにさいきんのこうせいです。"
    },
    {
      question: "つきの　ひょうめんは　どのような　ちけいが　おおい？",
      choices: ["へいげん", "かざん", "くれーたー", "たに"],
      answer: 2,
      explanation: "つきのひょうめんは　くれーたーが　たくさん　あり、これは　たいようからの　いんしゃぶつによって　うまれました。"
    },
    {
      question: "ぶらっくほーるは　なにに　よって　とくちょうづけられる？",
      choices: ["ひじょうに　こうおん", "つよい　じゅうりょくば", "こうそく　かいてん", "あかるい　ひかり"],
      answer: 1,
      explanation: "ぶらっくほーるは　その　つよい　じゅうりょくばのため　すべてのものを　ひきつけ、ひかりすら　にげられません。"
    },
    {
      question: "たいようけいで　もっとも　ちいさい　わくせいは？",
      choices: ["かせい", "すいせい", "きんせい", "かいおうせい"],
      answer: 1,
      explanation: "すいせいはたいようけいで　もっとも　ちいさい　わくせいです。"
    },
    {
      question: "たいようは　なにから　できている？",
      choices: ["きんぞく", "みず", "ぷらずま", "がんせき"],
      answer: 2,
      explanation: "たいようは、主にぷらずまでできており、核融合によってエネルギーを生み出しています。"
    },
    {
      question: "ちきゅうの　たいきの　しゅせいぶんは？",
      choices: ["さんそ", "ちっそ", "にさんかたんそ", "あるごん"],
      answer: 1,
      explanation: "ちきゅうのたいきは主にちっそで、約78%を占めています。"
    },
    {
      question: "こうねんは　なんの　たんい？",
      choices: ["じかん", "きょり", "しつりょう", "そくど"],
      answer: 1,
      explanation: "こうねんはきょりのたんいで、ひかりが1ねんかんにすすむ　きょりをあらわします。"
    },
    {
      question: "かせいの　ひょうめんは　どんな　いろ？",
      choices: ["あお", "みどり", "あか", "はいいろ"],
      answer: 2,
      explanation: "かせいは　あかい　けいけんをもつため、「あかいほし」ともよばれます。"
    },
    {
      question: "すいほうの　おもてが　ひかるのはなぜ？",
      choices: ["たいようこうの　はんしゃ", "かざんかつどう", "たいきの　まさつ", "じゅうりょくは"],
      answer: 0,
      explanation: "すいほうのおもては　たいようこうを　はんしゃし、ひかりを　はらんでいるため　ひかります。"
    },
    {
      question: "どせいの　とくちょうてきな　わは　なんで　できている？",
      choices: ["がんせき", "こおりとちり", "がす", "てつ"],
      answer: 1,
      explanation: "どせいの　わはこおりとちりで　できており、美しい　かんを　つくりだしています。"
    },
    {
      question: "うちゅうせんが　たいきけんに　さいとつにゅうする　さいに　はっせいする　げんしょうは？",
      choices: ["むじゅうりょくじょうたい", "ねつほうしゃ", "ひかりの　くっせつ", "おとの　げんすい"],
      answer: 1,
      explanation: "うちゅうせんが　たいきけんに　さいとつにゅうすると　ねつほうしゃが　はっせいします。"
    },
    {
      question: "ほっきょくせい　として　しられる　ほしは？",
      choices: ["べてるぎうす", "しりうす", "ぽらりす", "あるでばらん"],
      answer: 2,
      explanation: "ぽらりすは北極星として　しられており、みちしるべの　やくわりを　はたします。"
    },
    {
      question: "うちゅうの　ねんれいは　やく　なんねん？",
      choices: ["ひゃくおくねん", "ひゃくさんじゅうはちおくねん", "ごじゅうおくねん", "にひゃくおくねん"],
      answer: 1,
      explanation: "うちゅうのねんれいは　ひゃくさんじゅうはちおくねん　とも　いわれます。"
    },
    {
      question: "ちきゅうの　たいきけんの　さいじょうそうは？",
      choices: ["ちゅうかんけん", "せいそうけん", "ねつけん", "がいきけん"],
      answer: 3,
      explanation: "たいきけんの　さいじょうそうは　がいきけんで、地球の外側にある層です。"
    },
    {
      question: "たいようの　おもな　えねるぎーげんは？",
      choices: ["じゅうりょくしゅうしゅく", "かくゆうごう", "かくぶんれつ", "かがくはんのう"],
      answer: 1,
      explanation: "たいようのエネルギーは主に核融合によるもので、これがかくゆうごうです。"
    },
    {
      question: "すいほうの　かくは　おもに　なにから　できている？",
      choices: ["てつ", "がんせき", "こおり", "がす"],
      answer: 2,
      explanation: "すいほうのかくは、氷や岩石でできており、太陽に近づくとそれらが蒸発します。"
    },
    {
      question: "うちゅうで　もっとも　あかるい　てんたいは？",
      choices: ["たいよう", "つき", "しりうす", "きんせい"],
      answer: 0,
      explanation: "たいようは地球から見える中で最も明るく、昼夜の明るさを支配します。"
    },
    {
      question: "りゅうせいが　ちひょうに　とうたつせずに　もえつきる　げんしょうは？",
      choices: ["りゅうせいぐん", "いんせき", "りゅうせいげんしょう", "すいほう"],
      answer: 2,
      explanation: "りゅうせいげんしょうとは、流星が大気中で燃え尽きる現象を指します。"
    },
    {
      question: "きんせいは　どのように　して　あかるく　みえますか？",
      choices: ["はれ　たいようの　ひかり", "じぶんで　ひかっている", "うちゅうたいかす", "あかるい　じゅうりょく"],
      answer: 0,
      explanation: "きんせいは、はれた夜空で太陽の光を反射して明るく見えます。"
    },
    {
      question: "しりうすは　うちゅうにおいて　なにとして　たいせつ？",
      choices: ["さいこうきょうめい", "さいきんのほし", "さいしょのひと", "さいこうてん"],
      answer: 0,
      explanation: "しりうすは夜空で最も明るい星として、古くから道しるべとして重要でした。"
    },
    {
      question: "ぽらりすは　なぜ　きたほくせいと　よばれる？",
      choices: ["きたの　ちほうにあるから", "ほくせいの　たてがみだから", "ほくせいの　めいしょうだから", "きたの　こうそくだから"],
      answer: 2,
      explanation: "ぽらりすは北極星として知られており、北の方向を示す目印となります。"
    },
    {
      question: "もくせいの　えんは　なんで　できている？",
      choices: ["がんせき", "こおりと　ちり", "がす", "てつ"],
      answer: 1,
      explanation: "もくせいのえんは氷とちりでできており、美しい光輪を形成しています。"
    },
    {
      question: "ぷろきしま・けんたうりは　どのように　して　せかいでもゆうめい？",
      choices: ["とても　あついから", "ちきゅうに　さいきんのこうせいだから", "とても　かしこいから", "ねるところがないから"],
      answer: 1,
      explanation: "ぷろきしま・けんたうりは地球に最も近いため、研究対象として非常に重要です。"
    },
    {
      question: "すいせいは　なにで　うごく？",
      choices: ["じゅうで", "えんようりょく", "かいでんそう", "ちかてつ"],
      answer: 1,
      explanation: "すいせいはその大きな質量によるえんようりょくで周りをうごいています。"
    },
    {
      question: "しりうすは　どのように　して　しんか　した？",
      choices: ["はやく　うごくため", "あかりを　たたえるため", "ゆれないため", "とくちょうが　よくわかるため"],
      answer: 3,
      explanation: "しりうすは地球の自転軸の延長線上にあるため、夜空でほとんど動かないように見えます。"
    },
    {
      question: "たいようこうせいしゃは　なんの　エネルギーを　利用する？",
      choices: ["つち", "みず", "でんき", "かくゆうごう"],
      answer: 3,
      explanation: "たいようこうせいしゃ（ソーラーシップ）は、太陽の光を利用して推進力を得ようとする技術です。"
    },
    {
      question: "うちゅうえいがは　なにを　たいせつに　している？",
      choices: ["げんし　けいかく", "しゃしん　ないよう", "れんそう　こうどう", "かせい　けんさ"],
      answer: 1,
      explanation: "うちゅうえいがは、天体や現象をリアルに　みせるために、正確なしゃしんないように　もとづいています。"
    },
    {
      question: "うちゅうかんけい　データベースは　なにに　つかわれる？",
      choices: ["ぶんか", "だいがく", "びじゅつ", "けんきゅう"],
      answer: 3,
      explanation: "うちゅうかんけいの　データベースは、天文学や宇宙探査のけんきゅうに　つかわれます。"
    },
    {
      question: "きんせいの　しゅだんは　なに？",
      choices: ["てんたい", "はかい", "いのち", "こうそく"],
      answer: 0,
      explanation: "きんせいは、自ら光を発するのではなく、太陽の光を反射する天体です。"
    }
  ];

let quizData = [];
let currentQuiz = 0;
let consecutiveCorrect = 0; 

const mainMenu = document.getElementById('main-menu');
const startQuizBtn = document.getElementById('start-quiz-btn');
const quizContainer = document.getElementById('quiz-container');
const rankingContainer = document.getElementById('ranking-container');
const rankingEl = document.getElementById('ranking');
const restartBtn = document.getElementById('restart-btn');

const questionEl = document.getElementById('question');
const answerBtns = document.querySelectorAll('.answer-btn');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('next-btn');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// ランダム
function selectRandomQuestions() {
  const shuffled = allQuizData.slice();
  shuffleArray(shuffled);
  return shuffled;
}

function loadQuiz() {
  const currentData = quizData[currentQuiz];
  questionEl.innerText = currentData.question;
  answerBtns.forEach((btn, index) => {
    btn.innerText = currentData.choices[index];
    btn.disabled = false;
    btn.style.backgroundColor = '#444';
  });
  resultEl.innerText = "";
  nextBtn.style.display = "none";
}

answerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = parseInt(btn.dataset.index);
      const currentData = quizData[currentQuiz];
      const correctAnswer = currentData.answer;
      if (selected === correctAnswer) {
        btn.style.backgroundColor = 'green';
        resultEl.innerText = "せいかい！";
        consecutiveCorrect++;  
        // 音声再生
        answerBtns.forEach(button => button.disabled = true);
        nextBtn.style.display = "inline-block";
      } else {
        btn.style.backgroundColor = 'red';
        resultEl.innerText = "ふせいかい！\n" + currentData.explanation;
        answerBtns.forEach(button => button.disabled = true);
        
        // 5秒表示
        setTimeout(() => {
          endQuiz();
        }, 5000);
      }
    });
  });

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    endQuiz();
  }
});

startQuizBtn.addEventListener('click', () => {
  mainMenu.style.display = 'none';
  rankingContainer.style.display = 'none';
  quizContainer.style.display = 'block';
  quizData = selectRandomQuestions();
  currentQuiz = 0;
  consecutiveCorrect = 0;
  loadQuiz();
});

function endQuiz() {
  quizContainer.style.display = 'none';
  saveRanking(consecutiveCorrect);
  displayRanking();
  rankingContainer.style.display = 'block';
}

function saveRanking(score) {
  let rankings = JSON.parse(localStorage.getItem('rankings')) || [];
  const timestamp = new Date().toISOString();
  rankings.push({ score, timestamp });
  rankings.sort((a, b) => b.score - a.score);
  rankings = rankings.slice(0, 10);
  localStorage.setItem('rankings', JSON.stringify(rankings));
}

function displayRanking() {
  const rankings = JSON.parse(localStorage.getItem('rankings')) || [];
  let html = `<p>あなたの連続正解数: ${consecutiveCorrect}</p>`;
  html += "<ol>";
  rankings.forEach(item => {
    html += `<li>${item.score} かい　(${new Date(item.timestamp).toLocaleString()})</li>`;
  });
  html += "</ol>";
  rankingEl.innerHTML = html;
}

restartBtn.addEventListener('click', () => {
  rankingContainer.style.display = 'none';
  mainMenu.style.display = 'block';
});