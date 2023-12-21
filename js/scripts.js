const minutesEl = document.querySelector("#minutes")
const segundosEl = document.querySelector("#seconds")
const miliEl = document.querySelector("#mili")
const btnIniciar = document.querySelector("#btnStart")
const btnPause = document.querySelector("#btnPause")
const btnContinuar = document.querySelector("#btnContinuar")
const btnResetar = document.querySelector("#btnResetar")


let interval;
let minuts = 0
let seconds = 0
let mili = 0
let isPaused = false


btnIniciar.addEventListener("click",startTimer)
btnPause.addEventListener("click",pauseTime)
btnContinuar.addEventListener("click",resumeTime)
btnResetar.addEventListener("click",resetTime)

function startTimer(){
    interval = setInterval(()=>{
        if(!isPaused){
            mili +=10
            if(mili ===1000){
                seconds++
                mili = 0
            }
            if(seconds ===60){
                minuts++
                seconds = 0
            }

            minutesEl.textContent = formatTime(minuts)
            segundosEl.textContent = formatTime(seconds)
            miliEl.textContent = formatMiliSeconds(mili)
        }
    },10)

    btnIniciar.style.display ="none"
    btnPause.style.display = "block"
}

function pauseTime(){
    isPaused = true
    btnPause.style.display = "none"
    btnContinuar.style.display = "block"

}

function resumeTime(){
    isPaused = false
    btnPause.style.display = "block"
    btnContinuar.style.display = "none"
}
function resetTime(){
    clearInterval(interval)
    mili = 0
    seconds = 0
    minuts = 0
    isPaused = false
    miliEl.textContent = "000"
    segundosEl.textContent = "00"
    minutesEl.textContent = "00"

    btnIniciar.style.display = "block"
    btnPause.style.display = "none"
    btnContinuar.style.display = "none"
}


function formatTime(time){
    return time<10? `0${time}`:time
}

function formatMiliSeconds(time){
    return time<100? `${time}`.padStart(3,"000"):time
}