var img = document.getElementsByTagName("img");
var scr = document.getElementById("score");
var hi = document.getElementById("hint");
var me = document.getElementById("message");
var choice = document.getElementsByName("choice");
win = new Audio("image/win.mp3");
click = new Audio("image/click.mp3");
correct = new Audio("image/correct.mp3");
lose = new Audio("image/lose.mp3");
//Create an array of random numbers between 0 and 47
var end = 1;
var array = [];
do {
  var r = Math.trunc(Math.random() * 48);
  var start = 0;
  while (start <= end) {
    if (array[start] == r) {
      r = Math.trunc(Math.random() * 48);
      start = -1;
    }
    start++;
  }
  array[end - 1] = r;
  end++;
} while (end <= 48);
//for 10 random numbers images opacity 1 ,incress random when user click vaild chance
var ran = 10;
for (var i = 0; i < ran; i++)
  img[array[i]].setAttribute("style", "opacity:1 ; ");
//This function will show the image after one chance
var h = 3;
function hint() {
  if (ran <= 47 && h > 0) {
    img[array[ran]].setAttribute("style", "opacity:1 ; ");
    ran++;
    h--;
    hi.innerHTML = "&nbsp&nbsp" + h;
  }
}
var d = 0; //variable for stop timer
startTimer(120); //2 minute time start from this function
function startTimer(seconds) {
  const timer = document.getElementById("timer");
  let tim = setInterval(() => {
    timer.innerText = `${Math.floor(seconds / 60)}:${(seconds % 60)
      .toString()
      .padStart(2, "0")}`; //tostring function will convert sec%60 into string and padStart function will check whether the length of the string is 2, if not then add 0
    seconds--;
    if (d == 1) clearInterval(tim);
    if (seconds <= -1) {
      me.innerText = "you Lose";
      me.classList.add("text-danger");
      lose.play();
      seconds = -1;
      d = 1;
      clearInterval(tim);
      alertme();
    }
  }, 1000);
}
var arr = [];
var a1 = 0;
var a = [];
var ch = 0;
var sc = 0;

function chosse(x, y) {
  if (me.innerText == "choose correct!") {
    me.innerText = " ";
  }
  for (i = 0; i < arr.length; i++) if (arr[i] == y) var c = 0; //Loop for to check if value is already in array
  for (i = 0; i < ran; i++) if (array[i] == y) var c1 = 0; //Loop for check value is from random number only
  if (ch == 5 || arr.length == array.length || d == 1) return 0; //check chance is complet or timer is 0 or random array or array is eqqual
  if (c == 0 || c1 != 0) {
    me.innerText = "choose correct!"; //message show when value is already in array or not choose valid image
    return 0;
  }
  if (ran <= 44) img[array[ran + 1]].setAttribute("style", "opacity:0.8 ; ");
  if (ran <= 47) img[array[ran]].setAttribute("style", "opacity:1 ; ");
  click.play();
  ran++;
  arr[a1] = y;
  a1++;
  img[y].setAttribute("src", "image/h.png ");
  choice[ch].setAttribute("src", "image/" + x + ".jpg");
  a[ch] = x;
  ch++;
  //loop for check chance bar sequentially 3 image is similar
  for (i = 2; i <= a.length; i++) {
    if (a[i] == a[i - 1] && a[i] == a[i - 2]) {
      choice[i].setAttribute("src", " ");
      choice[i - 1].setAttribute("src", " ");
      choice[i - 2].setAttribute("src", " ");
      ch = i - 2;
      if (a[i] != 0 || a[i - 1] != 0 || a[i - 2] != 0) {
        sc += 5;
        correct.play();
        scr.innerText = "Score : " + sc;
      }
      a[i] = 0;
      a[i - 1] = 0;
      a[i - 2] = 0;
      if (i == 2 || i == 3) break;
    }
  }
  //check all chance is complet true or false
  if (ch == 5) {
    lose.play();
    d = 1;
    me.innerText = "You Lose";
    me.classList.add("text-danger");
    alertme();
  } else if (arr.length == array.length) {
    //check all images are remove
    win.play();
    d = 1;
    me.innerText = "You Win";
    me.classList.add("text-warning");
    alertme();
  }
}
//function for show alert message 3 seconds after
function alertme() {
  setTimeout(() => {
    var conf = confirm(
      `Your Score is = ${sc}\nYour timing is left = ${timer.innerText} \n\"You Play Agian\"`
    );
    if (conf == true) location.reload();
    else alert("bye bye...\n Thanks for Playing game");
  }, 3000);
}
		
