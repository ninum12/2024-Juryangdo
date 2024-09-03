let beers = [
  {
    id:301,
    titleKO:'아사히 수퍼드라이',
    contry:'일본',
    alchol: 5,
    calresult: 0,
    category: '페일 라거',
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:302,
    titleKO:'버드 와이저',
    contry:'미국',
    alchol: 5.4,
    calresult: 0,
    category: '라거',
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
    category: '페일 라거',
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
    category: '밀맥주',
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:305,
    titleKO:'카스 프레시',
    contry:'한국',
    alchol: 4.5,
    calresult: 0,
    category: '라거',
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:306,
    titleKO:'테라',
    contry:'한국',
    alchol: 4.6,
    calresult: 0,
    category: '라거',
    volume: 500,
    where: '편의점',
    tastingNote:''
  },
  {
    id:307,
    titleKO:'클라우드',
    contry:'한국',
    alchol: 5,
    calresult: 0,
    category: '라거',
    volume: 500,
    where: '편의점',
    tastingNote:''
  }
]

const myAlchol = localStorage.getItem(My_Alchol);
const drinks = document.getElementById("drinks");

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
function change() {
  const plusbtn = document.getElementsByClassName("plusbtn");
  if (plusbtn.innerText == '+') {
    plusbtn.innerText = '-';
  }else{
    plusbtn.innerText = '+'
  }
  console.log('1');
}
// 술 정보 나열하기
function paintDrink(drink, rownumber){
  const row = document.getElementById(`rowbox${rownumber}`);

  const itembox = document.createElement("div");
  itembox.className = 'itembox';
  row.appendChild(itembox);

  const item = document.createElement("div");
  item.className = 'item';

  const scriptbox = document.createElement("div");
  scriptbox.className = 'scriptbox';
  scriptbox.style.display = 'none';

  const script = document.createElement("div");
  script.className = 'script';
  script.innerHTML = `국가: ${drink.contry}<br>주종: ${drink.category}<br>용량: 캔 | ${drink.volume}ml<br>도수: ${drink.alchol}%<br>특징: ${drink.tastingNote}`;

  const plusbox = document.createElement("div");
  plusbox.className = 'plusbox';

  const plusbtn = document.createElement("button");
  plusbtn.className = 'plusbtn';
  plusbtn.innerText = '+';
  plusbtn.type = 'button';
  plusbtn.addEventListener("click", () =>{
    if (plusbtn.innerText == '+') {
      plusbtn.innerText = '-';
      item.style.display ='none';
      scriptbox.style.display = 'block';
    }else{
      plusbtn.innerText = '+'
      scriptbox.style.display = 'none';
      item.style.display ='block';
    }
  });
  // plusbtn.addEventListener("focus", () =>{
  //   plusbtn.innerText = '-';
  //   item.style.display ='none';
  //   scriptbox.style.display = 'block';
  // });
  plusbtn.addEventListener("blur", () =>{
    plusbtn.innerText = '+'
    scriptbox.style.display = 'none';
    item.style.display ='block';
  });

  const firstbox = document.createElement("div");
  firstbox.className = 'firstbox';

  const secondbox = document.createElement("div");
  secondbox.className = 'secondbox';

  const bottleimgbox = document.createElement("div");
  bottleimgbox.className = 'beerbox';

  const namebox = document.createElement("div");
  namebox.className = 'namebox';

  const flag = document.createElement("img");
  flag.className = 'flag';
  flag.src = `juryangdo/flag/${drink.contry}.png`;

  const outcircle = document.createElement("div");
  outcircle.className = 'outcircle';

  const drinkImage = document.createElement("img");
  drinkImage.className = 'drinkImage';
  drinkImage.src = `juryangdo/img/${drink.id}.png`;

  const incircle = document.createElement("div");
  incircle.className = 'incircle';

  const name1 = document.createElement("div");
  name1.className = 'name1';
  name1.innerText = drink.titleKO;

  const name2 = document.createElement("div");
  name2.className = 'name2';
  name2.innerText = drink.category;

  const glassbox = document.createElement("div");
  glassbox.className = 'glassbox';

  const guidetext = document.createElement("div");
  guidetext.className = 'guidetext';

  //잔 이미지 넣기
  const bottle = Math.round((drink.bottle / 50)*10) / 10;

  const leftoverImage = document.createElement("img");
  leftoverImage.className = 'glass';

  const intext = document.createElement("div");
  intext.className = 'intext';

  const guide = document.createElement("div");
  guide.className = 'guide';
  guide.innerText = '잔 마실 수 있어요'

  // const bottleintext = document.createElement("div");
  // bottleintext.className = 'intext';

  // const bottleboldtext = document.createElement("b");

  // const bottleguide = document.createElement("div");
  // bottleguide.className = 'guide';
  // bottleguide.innerText = '병 '

  // if(drink.calresult > bottle){
  //   const countBottle = Math.floor(drink.calresult/bottle);
  //   const leftcalresult = Math.floor((drink.calresult - bottle * countBottle) * 10) / 10
  //   const countGlass = Math.floor(leftcalresult);
    
  //   for (var i = 0; i < countBottle; i++){
  //     const bottleImage = document.createElement("img");
  //     bottleImage.className = 'glass';
  //     bottleImage.src = "juryangdo/glassimg/bottle.png";
  //     glassbox.appendChild(bottleImage);
  //   }
  //   for (var i = 0; i < countGlass; i++){
  //     const glassImage = document.createElement("img");
  //     glassImage.className = 'glass';
  //     glassImage.src = "juryangdo/glassimg/soju10.png";
  //     glassbox.appendChild(glassImage);
  //   }

  //   const number = Math.round((leftcalresult - countGlass)*10);

  //   bottleboldtext.innerText = countBottle;
  //   guidetext.appendChild(bottleintext);
  //   bottleintext.appendChild(bottleboldtext);
  //   guidetext.appendChild(bottleguide);

  //   if(number != 0){
  //     leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
  //     glassbox.appendChild(leftoverImage);

  //     glassboldtext.innerText = leftcalresult;
  //     guidetext.appendChild(glassintext);
  //     glassintext.appendChild(glassboldtext);
  //     guidetext.appendChild(guide);
  //   }else{
  //     bottleguide.innerText = bottleguide.innerText + '마실 수 있어요';
  //   }

  // }else{
  //   const count = Math.floor(drink.calresult);
  //   for (var i = 0; i < count; i++){
  //     const glassImage = document.createElement("img");
  //     glassImage.className = 'glass';
  //     glassImage.src = "juryangdo/glassimg/soju10.png";
  //     glassbox.appendChild(glassImage);
  //   }
  //   const number = Math.round((drink.calresult - count)*10);
  //   if(number != 0){
  //     leftoverImage.src = `juryangdo/glassimg/soju${number}.png`;
  //     glassbox.appendChild(leftoverImage);
  //   }

  //   glassboldtext.innerText = drink.calresult;
  //   guidetext.appendChild(glassintext);
  //   glassintext.appendChild(glassboldtext);
  //   guidetext.appendChild(guide);
  // }
  const count = Math.floor(drink.calresult);
    for (var i = 0; i < count; i++){
      const glassImage = document.createElement("img");
      glassImage.className = 'glass';
      glassImage.src = 'juryangdo/glassimg/beer10.png';
      glassbox.appendChild(glassImage);
    }
    const number = Math.round((drink.calresult - count)*10);
    if(number != 0){
      leftoverImage.src = `juryangdo/glassimg/beer${number}.png`;
      glassbox.appendChild(leftoverImage);
    }

    intext.innerHTML = `<b>${drink.calresult}</b>`;
    guidetext.appendChild(intext);
    guidetext.appendChild(guide);

  itembox.appendChild(item);
  itembox.appendChild(scriptbox);
  itembox.appendChild(plusbox);
  item.appendChild(firstbox);
  item.appendChild(secondbox);
  firstbox.appendChild(bottleimgbox);
  firstbox.appendChild(namebox);
  bottleimgbox.appendChild(flag);
  bottleimgbox.appendChild(outcircle);
  outcircle.appendChild(drinkImage);
  outcircle.appendChild(incircle);
  namebox.appendChild(name1);
  namebox.appendChild(name2);
  secondbox.appendChild(glassbox);
  secondbox.appendChild(guidetext);
  scriptbox.appendChild(script);
  plusbox.appendChild(plusbtn);
}
for (var i = 0; i < beers.length; i++){
  if (i % 3 == 0){
    const rowbox = document.createElement("div");
    rowbox.className = 'rowbox';
    rowbox.id = `rowbox${i/3}`;
    drinks.appendChild(rowbox);
  }
}
for (var i = 0; i < beers.length; i++){
  paintDrink(beers[i], Math.floor(i/3));
}