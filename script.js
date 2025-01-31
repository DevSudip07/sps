let images = document.querySelectorAll('.img');
let userImage = document.querySelector('.user-img');
let computerImage = document.querySelector('.bot-img');
let gameStatus = document.querySelector('.status');
let userScore = document.querySelector('.user-score');
let computerScore = document.querySelector('.bot-score');
let popUp = document.querySelector('.pop-up');
let playAgain = document.querySelector('.again-btn');
let userPoint = 0;
let computerPoint = 0;

function userImageShow() {
    images.forEach((image, index) => {
        // IMAGE DISPLAY CODE HERE
        image.addEventListener('click', () => {
            userImage.src = `./img/${index + 1}.jpg`;
            let userIndex = index + 1;
            let computerIndex = Math.floor(Math.random() * 3) + 1;
            computerImage.src = `./img/${computerIndex}.jpg`;

            // GAME STATUS CODE HERE
            if(userIndex == computerIndex) {
                gameStatus.textContent = "It's a tie!";
            }else if (userIndex == 1 && computerIndex == 2 || userIndex == 2 && computerIndex == 3 || userIndex == 3 && computerIndex == 1) {
                gameStatus.textContent = 'You Win !'
                userPoint++;
                userScore.textContent = userPoint;
            }else {
                gameStatus.textContent = 'You Lose !'
                computerPoint++;
                computerScore.textContent = computerPoint;
            }

            // POP UP CODE HERE
            let winStats = document.querySelector('.win-stats')
            if(computerPoint >= 10 && userPoint < 10) {
                popUp.style.display = 'block';
                winStats.textContent = 'You Lose The Match 😒';
            }else if (computerPoint < 10 && userPoint >= 10) {
                popUp.style.display = 'block';
                winStats.textContent = 'You Won The Match 😍';
            }else {
                popUp.style.display = 'none';
            }
            // PLAY AGAIN BUTTON CODE HERE
            playAgain.addEventListener('click', ()=> {
                popUp.style.display = 'none';
                // window.location.reload();
                gameStatus.textContent = '';
                userPoint = 0;
                computerPoint = 0;
                userScore.textContent = userPoint;
                computerScore.textContent = computerPoint;
            })
        });
    });
}



userImageShow();

// LOADER CODE HERE
let loader = document.querySelector('.loader');
let box = document.querySelector('.box');
let load = document.querySelector('.load');
let per = document.querySelector('.per');

function counter() {
    let count = 0;
    let interval = setInterval(() => {
        count++;
        per.textContent = count;
        if (count === 100) {
            clearInterval(interval);
            loader.style.display = 'none';
        }
    }, 30);
}

window.onload = counter();