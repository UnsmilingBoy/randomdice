const btn = document.querySelector('#btn');
const answerNum = document.querySelector('#answerNum');
const answer = document.querySelector('#answer');
const body = document.querySelector('body');

const randomGenerator = (min, max) => {
    let number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

const dice = () => {
    const randomNum = randomGenerator(1, 6);
    answer.innerHTML = `Your Dice Number Is: `;
    answerNum.innerHTML = randomNum;
    btn.innerHTML = 'ROLL AGAIN!';
    const randomRGB = `rgb(${randomGenerator(0, 255)}, ${randomGenerator(0, 255)}, ${randomGenerator(0, 255)})`
    body.style.backgroundColor = randomRGB;
}

btn.addEventListener('click', dice);


