window.onload=function(){
    let minutes=0;
    let seconds=0;
    let tens=00;

    let appendMinutes=document.getElementById('minutes')
    let appendSeconds=document.getElementById('second')
    let appendTens=document.getElementById('tens')

    let startBtn=document.getElementById('start')
    let stopBtn=document.getElementById('stop')
    let resetBtn=document.getElementById('reset')
    let Interval;
    let laps;
    let lapNow;

    const startTimer=()=>{
        tens++;
        if(tens<=9){
            appendTens.innerHTML="0" + tens;
        }
        if(tens>9){
            appendTens.innerHTML=tens;
        }

        if(tens==100){
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;
        }

        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }

        if(seconds>59){
            minutes++;
            appendMinutes.innerHTML='0'+minutes;
            seconds=0;
            appendSeconds.innerHTML='0'+0;
        }
    };
    function lap() {
        document.getElementById('laps').classList.remove('hidden')
        lapNow = minutes + " : " + seconds + " : " + tens; 
        console.log(lapNow)
        laps = document.getElementById('lapsrecord').innerHTML + lapNow;
  
        document.getElementById('lapsrecord').innerHTML = laps+'<br>';
  }

    startBtn.onclick=()=>{
        clearInterval(Interval);
        Interval=setInterval(startTimer,10);
    };

    stopBtn.onclick=()=>{
        clearInterval(Interval)
    }

    resetBtn.onclick=()=>{
        clearInterval(Interval)
        minutes=0;
        tens=0;
        seconds=0;
        appendTens.innerHTML='00'
        appendMinutes.innerHTML='00'
        appendSeconds.innerHTML='00'
        document.getElementById('lapsrecord').innerHTML=""
        document.getElementById('laps').classList.add('hidden')
    }

    document.getElementById('lap').addEventListener('click',lap)

    
    
};
