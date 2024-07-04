let timerDisplay = document.getElementById("timer");
let strt = document.getElementById("startBtn");
let stp = document.getElementById("stopBtn");
let rst = document.getElementById("resetBtn");

let timerInterval;
let timerValue = 0;
let isRunning = false;

function updateTimerDisplay() {
    let hours = Math.floor(timerValue / 3600);
    let minutes = Math.floor((timerValue % 3600) / 60);
    let seconds = Math.floor(timerValue % 60);
    timerDisplay.textContent = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""}${minutes}:${seconds < 10 ? 0 : ""}${seconds}`
}

function startTimer() {
    if (!isRunning) {
        timerInterval = setInterval(() => {
            timerValue++;
            updateTimerDisplay();
            // console.log(timerValue)
        }, 1000)
    }
    // console.log("Hey we are starting the timer");
}

function stopTimer(){
    clearInterval(timerInterval)
}

function resetTimer(){
    clearInterval(timerInterval)
    timerValue = 0;
    updateTimerDisplay();
}
strt.addEventListener("click",startTimer);
stp.addEventListener("click",stopTimer);
rst.addEventListener("click",resetTimer);

