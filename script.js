var button = document.querySelector('button');

var restart=document.getElementById('restart');

var highscore=document.querySelector("#score");

var scores= [];

var score=0;

const input = document.querySelector('#input');

const start=()=>{

const h = document.querySelector('#about');

var res=true;

const info = document.getElementById('info');

restart.style="transform:translate(0px, 900px) !important"

var m=prompt("What mode do you want.\nEnter E for easy, M for medium or H for hard","E")

var e,med,hi;

switch (m) {

  case 'E':

    e=true;
   hi = false;
    med = false;

    break;

  case 'H':

    hi=true;
   med = false;
    e = false;

    break;

  case 'M':

    med=true;
   high=false;
   e = false;

    break;

  default:

  e=true;

}

const try_info = document.getElementById('tries');

var minv = 1;

var finnum=0;

var maxv = 1;

let number=0;

var head;

function getno(){

  if(e){

        minv=1;

        maxv= Math.floor(Math.random() * (60-minv+1)+minv);

        finnum = ((maxv) - (minv - 1));

        number= Math.floor(Math.random() * finnum)+1

    head='The number is between ' + minv + ' and ' + maxv + ' and it\'s ' + fun();

  }

  else if(med){

    minv=25;

    maxv= Math.floor(Math.random() * (100-minv+1)+minv);

    finnum = (maxv-minv+1);

    number= Math.floor(Math.random() * finnum)+minv

    head='The number is between ' + minv + ' and ' + maxv + ' and it\'s ' + fun();

  }

  else if (hi) {

    number=Math.floor(Math.random()*(200-55+1)+55)

    minv=55;

    maxv=200;

    head='The number is between ' + minv + ' and ' + maxv+ " and it\'s " +fun();

  }

}

function isEven(arg) {

  if (arg%2!==0) {

    return false

  } else {

    return true

  }

}

function fun(){

  if (isEven(number)) {

  return "even"

} else {

  return "odd"

}

}

var Max_Tries = 10;

var Tries_left = Max_Tries;

try_info.innerText = tryf(Tries_left);

getno();

         function updatehint(){

h.innerText = head;}

updatehint();

button.addEventListener('click', function() { 

  if (Max_Tries===0) {

    restart();

  }

  else if (Tries_left !== 0) {

    if (input.value !== '') {

      if (input.value === number) {

              

        info.innerText = 'You won!';

        setTimeout(()=>{info.innerText='enter a value'},1000)

        input.value=''

        score++;

        document.querySelector("#score").textContent="Score: "+score;

        

        getno();

              

updatehint();

        updatehint();

        try_info.innerText = tryf(Tries_left);

          scores.push(score);

      }

      

      else if (input.value < minv) {

        info.innerText = 'The number you entered is too less this number should be more than '+minv;

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value > maxv) {

        info.innerText = 'The number you entered is too large this number should be less than '+maxv;

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value < number) {

        info.innerText = 'The number you entered is less than the number try entering some bigger values';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

      else if (input.value > number) {

        info.innerText = 'The number you entered is bigger than the number try entering some less values';

        Tries_left -= 1;

        try_info.innerText = tryf(Tries_left);

      }

    }

  }

  

  

    if (Tries_left <= 0) {

      if (confirm("Do you wanna restart")) {

        Tries_left=10

        start()

      }

      else {

        Tries_left=10

        alert("Thanks for visiting please upvote")

        Tries_left=10

      }

    }

  checkh()

});

function tryf(x) {

  sx = String(x);

  return ('Tries left: ' + sx);

}

scores.push(score);

}

start();

function checkh(){

var high=Math.max(...scores);

document.querySelector("#high").textContent="High score is "+high;

}

info.innerText='enter a value'

var rbtn=document.querySelector("#rbtn");

function rbt(){

  start()

}

function al(){

  restart.style.transform="translate(0px,0px)"

}

