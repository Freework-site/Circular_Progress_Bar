const ProgressBar = document.querySelector(".circle_bar");
const ProgressValue = document.querySelector(".bar_value");

let StartingValue = 0;
let EndingValue = 90;
let Speed = 30;

let Progress = setInterval( () => {
    StartingValue++;
    ProgressValue.textContent = `${StartingValue}%`;
    ProgressBar.style.background = `conic-gradient(
        #03a9fa ${StartingValue * 3.6}deg,
        #cadcff ${StartingValue * 3.6}deg
    )`

    if(StartingValue == EndingValue)
    {
        clearInterval(Progress);
    }
}, Speed)