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
        image.addEventListener('click', () => {
            userImage.src = `./img/${index + 1}.jpg`;
            let userIndex = index + 1;
            let computerIndex = Math.floor(Math.random() * 3) + 1;
            computerImage.src = `./img/${computerIndex}.jpg`;

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

            if(computerPoint >= 10 && userPoint < 10 || computerPoint < 10 && userPoint >= 10) {
                popUp.style.display = 'block';
            }else {
                popUp.style.display = 'none';
            }

            playAgain.addEventListener('click', ()=> {
                popUp.style.display = 'none';
                window.location.reload();
            })
        });
    });
}

userImageShow();
