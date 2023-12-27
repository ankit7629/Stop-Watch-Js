const timer = document.getElementById('timer');
const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset')

let active = false;
let [ss,mm,hh] = [0,0,0];
let interval;

function watchcount(){
    ss++;
    if(ss > 59){
        ss = 0;
        mm++;
        if(mm > 59){
            mm = 0;
            hh++;
        }
    }
    console.log(ss,mm,hh);
    hh = String(hh).padStart(2,'0');
    mm = String(mm).padStart(2,'0');
    ss = String(ss).padStart(2,'0');
    timer.textContent = `${hh}:${mm}:${ss}`;
}

startBtn.addEventListener('click', () => {

    active = active ? false : true;
    if (active){
        startBtn.textContent = 'Stop';
        startBtn.classList.add('active');
        interval = setInterval(watchcount,100);
    }else{
        startBtn.textContent = 'Start';
        startBtn.classList.remove('active');
        clearInterval(interval)
    }
})

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    [ss,mm,hh] = [0,0,0];
    timer.textContent = '00:00:00';
})