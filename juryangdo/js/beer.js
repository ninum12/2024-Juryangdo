let beers = [
  {
    id:301,
    titleKO:'아사히 수퍼드라이',
    contry:'일본',
    alchol: 5,
    calresult: 0,
    volume: 340,
    where: '편의점',
    tastingNote:''
  },
  {
    id:302,
    titleKO:'버드 와이저',
    contry:'미국',
    alchol: 5.4,
    calresult: 0,
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:303,
    titleKO:'필스너 우르켈',
    contry:'체코',
    alchol: 4.4,
    calresult: 0,
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:304,
    titleKO:'곰표 밀맥주',
    contry:'한국',
    alchol: 4.5,
    calresult: 0,
    volume: 500,
    where: '편의점',
    tastingNote:''
  }
]

const drinksList = document.getElementById("drinks");
const myAlchol = 40; //입력받을값
const alcholList = document.getElementsByClassName("alchol");
const resultList = []

//잔 계산하기
function calculateBeer(beer){
  const alcholEach = beer.alchol
  const resultBeer = myAlchol / (255 * alcholEach * 0.7947) * 100;
  return resultBeer
}
//잔계산한 값 저장하기
for (var i = 0; i < beers.length; i++){
  beers[i].calresult = Math.round(calculateBeer(beers[i]) * 10)/ 10;
}

// 술 정보 나열하기
function paintDrink(drink){
  const div = document.createElement("div");

  const drinkImage = document.createElement("img");
  drinkImage.className = 'drinkImage';
  drinkImage.src = `img/${drink.id}.png`;

  const divName = document.createElement("h3");
  divName.className = 'title';
  divName.innerText = drink.titleKO;

  const divCalResult = document.createElement("div");
  divCalResult.className = 'result';

  //잔 이미지 넣기
  const count = Math.floor(drink.calresult);
  for (var i = 0; i < count; i++){
    const glassImage = document.createElement("img");
    glassImage.className = 'glass';
    glassImage.src = `glassimg/beer10.png`
    divCalResult.appendChild(glassImage);
  } 

  const leftoverImage = document.createElement("img");
  const number = Math.round((drink.calresult - Math.floor(drink.calresult))*10);
  leftoverImage.className = 'glass';
  if(number != 0){
    leftoverImage.src = `glassimg/beer${number}.png`;
  }

  const message = document.createElement("div");
  message.className = 'intext';
  message.innerText = drink.calresult + '잔 마실 수 있어요'

  div.appendChild(drinkImage);
  div.appendChild(divName);
  div.appendChild(divCalResult);
  divCalResult.appendChild(leftoverImage);
  divCalResult.appendChild(message);
  drinksList.appendChild(div);
}

for (var i = 0; i < beers.length; i++){
  paintDrink(beers[i]);
}