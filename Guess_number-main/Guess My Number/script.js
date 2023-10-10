'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 15;

let secretNumber = Math.floor(Math.random()*20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',function(){
   const value =Number(document.querySelector('.enterNumber').value);
   console.log(value);

    if(!value){
        document.querySelector('.message').textContent = '⛔ No Number';
    }
    else if(value === secretNumber){
        document.querySelector('.message').textContent = '🎉 Correct Number';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '20rem';
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }
    else if(value !== secretNumber){
        if(score > 1){
           value > secretNumber ? document.querySelector('.message').textContent = '📈 Too High':  document.querySelector('.message').textContent = '📉 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
            }
            else{
                document.querySelector('.message').textContent = '💣 You Lost the Game';
                document.querySelector('.score').textContent = 0;
            }
    }

    // else if(value > secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = '📈 Too High';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💣 You Lost the Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if(value < secretNumber){
    //     if(score > 1){
    //     document.querySelector('.message').textContent = '📉 Too Low'
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent = '💣 You Lost the Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
});

document.querySelector('.firstButton').addEventListener('click',function(){

    score = 20;
    secretNumber = Math.floor(Math.random()*20 + 1);
    // console.log(secretNumber);
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;//'20
    document.querySelector('.number').textContent = '?';
    document.querySelector('.enterNumber').value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '10rem';
});
