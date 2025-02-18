function change() {
  const plusbtn = document.getElementsByClassName("plusbtn");
  if (plusbtn.innerText == "+") {
    plusbtn.innerText = "-";
  } else {
    plusbtn.innerText = "+";
  }
}

if (plusbtn.innerText == "+") {
  plusbtn.innerText = "-";
  item.style.display = "none";
  scriptbox.style.display = "block";
} else {
  plusbtn.innerText = "+";
  scriptbox.style.display = "none";
  item.style.display = "block";
}
console.log("1");
