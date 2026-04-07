let randomnumber = parseInt(Math.random()*100+1);
const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas')
const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if(playgame){
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  })
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('please enter a valaid number');
  }else if(guess<1){
    alert('please a number greater than 0');
  }else if(guess>100){
    alert('please enter a number less then 100')
  }else{
    prevguess.push(guess);
    if(numguess===11){
      displayguess(guess);
      displaymessage(`game over. random nmber was ${randomnumber}`);
      endgame();
    }else{
      displayguess(guess);
      checkhuess(guess);
    }
  }
}
function checkhuess(guess){
  if(guess===randomnumber){
    displaymessage(`you guessed it right`);
  }else if(guess<randomnumber){
    displaymessage('number is low');
  }else if(guess>randomnumber){
    displaymessage(`number is high`);
  }

}
function displayguess(guess){
  userinput.value = '';
  guessslot.innerHTML +=`${guess}, `;
  numguess++;
  remaining.innerHTML = `<h2>${11-numguess}</h2>`
}
function displaymessage(message){
  loworhi.innerHTML = `<h2>${message}</h2>`
}
function endgame(){
  userinput.value = ''
  userinput.setAttribute('disabled', '')
  p.classList.add('button') 
  p.innerHTML = `<h2 id = "newgame">start new game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame(){
  
  const newgamebutton = document.querySelector('#newgame')
  document.querySelector('#newgame')
  newgamebutton.addEventListener('click',function(e){
    randomnumber = parseInt(Math.random()*100+1);
    prevguess = [];
    numguess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `<h2>${11-numguess}</h2>`
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame = true;
  })
}