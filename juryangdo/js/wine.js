let wines = [
  {
    id:101,
    titleKO:'두르뜨, 그랑 떼루아 소테른',
    title:'Dourthe, Grands Terroirs Sauternes',
    contry:'프랑스',
    type: 'white',
    alchol: 13.5,
    calresult: 0,
    bottle: 750,
    sweet:5,
    acid:3,
    body:4,
    tannin:1,
    aroma: '살구, 자몽, 꿀',
    tastingNote:'진한 노란색을 띠며 살구나 자몽 등 농익은 과일향과 아카시아 꽃, 꿀향이 피어오른다. 입 아네서는 진한 풍미화 함께 적절한 산도가 조화를 이루는 달콤한 디저트 와인이다.'
  },
  {
    id:102,
    titleKO:'덕혼, 디코이 샤도네이',
    title:'Duckhorn, Decoy Chardonnay',
    contry:'미국',
    type:'white',
    alchol:14,
    calresult: 0,
    bottle:750,
    sweet:1,
    acid:3,
    body:4,
    tannin:1,
    aroma:'사과, 자몽, 아카시아, 미네랄',
    tastingNote:'푸른 사과와 자몽, 아카시아의 사랑스러운 향을 가지고 있다. 이에 더불어 젖은 돌 느낌의 미네랄 풍미가 생생한 산도와 어우러져 와인의 품격을 한층 높여준다.'
  },
  {
    id:103,
    titleKO:'브레드&버터, 피노 누아',
    title:'Bread&Butter, Pinot Noir',
    contry:'미국',
    type:'red',
    alchol:14,
    calresult: 0,
    bottle:750,
    sweet:2,
    acid:3,
    body:4,
    tannin:2,
    aroma:'라즈베리, 체리, 카시스, 오크',
    tastingNote:'선명한 루비색을 띠며 입 안에서는 달콤한 잘익은 베리류의 풍미가 감칠맛과 함께 입안 전체를 감돌며 부드러운 타닌과 함께 길게 이어지는 와인이다.',
  },
  {
    id:104,
    titleKO:'카스텔라레, 키안티 클라시코',
    title:'Castellare, Chianti Classico',
    contry:'이탈리아',
    type:'red',
    alchol:13.5,
    calresult: 0,
    bottle:750,
    sweet:1,
    acid:4,
    body:4,
    tannin:3,
    aroma:'체리',
    tastingNote:'윤기가 흐르는 가넷의 붉은 빛을 띠고 붉은 딸기류 과일향이 진하고 향기롭다. 집약된 과실의 맛이 느껴지며, 부드러운 탄닌의 매끄러운 질감과 균형 잡힌 구조감을 지닌 와인이다.',
  }
]

const drinksList = document.getElementById("drinks");
const myAlchol = 100; //입력받을값
const alcholList = document.getElementsByClassName("alchol");
const resultList = []

//잔 계산하기
function calculateWine(wine){
  const alcholEach = wine.alchol
  const resultWine = myAlchol / (150 * alcholEach * 0.7947) * 100;
  return resultWine
}
//잔계산한 값 저장하기
for (var i = 0; i < wines.length; i++){
  wines[i].calresult = Math.round(calculateWine(wines[i]) * 10)/ 10;
}

// 술 정보 나열하기
function paintDrink(drink){
  const div = document.createElement("div");
  if (drink.type == 'white'){
    div.className = 'white';
  }else{
    div.className = 'red';
  }

  const drinkImage = document.createElement("img");
  drinkImage.className = 'drinkImage';
  drinkImage.src = `juryangdo/img/${drink.id}.jpg`;

  const divName = document.createElement("h3");
  divName.className = 'title';
  divName.innerText = drink.titleKO;

  const divCalResult = document.createElement("div");
  divCalResult.className = 'result';

  //잔 이미지 넣기
  const bottle = Math.round((drink.bottle / 150)*10) / 10;

  const leftoverImage = document.createElement("img");
  leftoverImage.className = 'glass';

  const message = document.createElement("div");
  message.className = 'intext';

  if(drink.calresult > bottle){
    const countBottle = Math.floor(drink.calresult/bottle);
    const leftcalresult = Math.floor((drink.calresult - bottle * countBottle) * 10) / 10
    const countGlass = Math.floor(leftcalresult);
    
    for (var i = 0; i < countBottle; i++){
      const bottleImage = document.createElement("img");
      bottleImage.className = 'glass';
      bottleImage.src = "juryangdo/glassimg/bottle.png";
      divCalResult.appendChild(bottleImage);
    }
    for (var i = 0; i < countGlass; i++){
      const glassImage = document.createElement("img");
      glassImage.className = 'glass';
      glassImage.src = "juryangdo/glassimg/wine10.png";
      divCalResult.appendChild(glassImage);
    }

    const number = Math.round((leftcalresult - countGlass)*10);
    console.log(number);

    message.innerText = countBottle + '병 '

    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/wine${number}.png`;
      divCalResult.appendChild(leftoverImage);
      message.innerText = message.innerText + leftcalresult + '잔 마실 수 있어요'
    }else{
      message.innerText = message.innerText + '마실 수 있어요'
    }

  }else{
    const count = Math.floor(drink.calresult);
    for (var i = 0; i < count; i++){
      const glassImage = document.createElement("img");
      glassImage.className = 'glass';
      glassImage.src = "juryangdo/glassimg/wine10.png";
      divCalResult.appendChild(glassImage);
    }
    const number = Math.round((drink.calresult - count)*10);
    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/wine${number}.png`;
      divCalResult.appendChild(leftoverImage);
    }

    message.innerText = drink.calresult + '잔 마실 수 있어요'
  }

  div.appendChild(drinkImage);
  div.appendChild(divName);
  div.appendChild(divCalResult);
  divCalResult.appendChild(message);
  drinksList.appendChild(div);
}

for (var i = 0; i < wines.length; i++){
  paintDrink(wines[i]);
}