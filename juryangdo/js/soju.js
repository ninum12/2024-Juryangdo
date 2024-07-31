let sojus = [
  {
    id:201,
    titleKO:'진로이즈백',
    alchol: 16,
    calresult: 0,
    bottle: 360,
    mfg:'하이트진로',
    tastingNote:''
  },
  {
    id:202,
    titleKO:'처음처럼',
    alchol: 16.5,
    calresult: 0,
    bottle: 360,
    mfg:'하이트진로',
    tastingNote:'대나무 숯 정제로 이슬같은 깨끗함'
  },
  {
    id:203,
    titleKO:'좋은데이 석류톡톡',
    alchol: 7,
    calresult: 0,
    bottle: 350,
    mfg:'',
    tastingNote:''
  },
  {
    id:204,
    titleKO:'별빛청하 스파클링',
    alchol: 7,
    calresult: 0,
    bottle: 295,
    mfg:'롯데칠성음료',
    tastingNote:''
  },
  {
    id:205,
    titleKO:'동해밤바다',
    alchol: 17.2,
    calresult: 0,
    bottle: 360,
    mfg:'참주가',
    tastingNote:''
  }
]

const drinksList = document.getElementById("drinks");
const myAlchol = 40; //입력받을값
const alcholList = document.getElementsByClassName("alchol");
const resultList = []

function calculateSoju(soju){
  const alcholEach = soju.alchol
  const resultSoju = myAlchol / (50 * alcholEach * 0.7947) * 100;
  return resultSoju
}
//잔계산한 값 저장하기
for (var i = 0; i < sojus.length; i++){
  sojus[i].calresult = Math.round(calculateSoju(sojus[i]) * 10)/ 10;
}

// 술 정보 나열하기
function paintDrink(drink){
  const div = document.createElement("div");

  const drinkImage = document.createElement("img");
  drinkImage.className = 'drinkImage';
  drinkImage.src = `juryangdo/img/${drink.id}.jpg`;

  const divName = document.createElement("h3");
  divName.className = 'title';
  divName.innerText = drink.titleKO;

  const divCalResult = document.createElement("div");
  divCalResult.className = 'result';

  //잔 이미지 넣기
  const bottle = Math.round((drink.bottle / 50)*10) / 10;

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
      glassImage.src = "juryangdo/glassimg/soju10.png";
      divCalResult.appendChild(glassImage);
    }

    const number = Math.round((leftcalresult - countGlass)*10);
    console.log(number);

    message.innerText = countBottle + '병 '

    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
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
      glassImage.src = "juryangdo/glassimg/soju10.png";
      divCalResult.appendChild(glassImage);
    }
    const number = Math.round((drink.calresult - count)*10);
    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
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

for (var i = 0; i < sojus.length; i++){
  paintDrink(sojus[i]);
}