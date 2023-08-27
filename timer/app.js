
// We are going to use Date object in JS
//for getting the current date and time from the system
var now = new Date();
var sec = 0;
var minutes = 0;
var hours = 0;
var days = 0;

//this is the flag that indicates the timer has started by the user or not
var started = false;

function start() {
    started = true;
}

function stop() {
    started = false;
}


//for elemts like span p and other text containers we must use innerText instead of value
document.getElementById('currentTime').innerText = now.toLocaleTimeString();

//with setInterval we can run codes in an timely interval
//Intervals are in miliseconds so 1000 means 1 sec
setInterval(() => {
    now = new Date();
    document.getElementById('currentTime').innerText = now.toLocaleTimeString();

    if(!started) return;

    sec += 1;
    if(sec == 60) {
        minutes += 1;
        sec = 0;
    }

    if(minutes == 60) {
        minutes = 0;
        hours += 1;
        if(hours == 24) {
            hours = 0;
            days += 1;
        }
    }

    document.getElementById('sec').innerText = sec;
    document.getElementById('min').innerText = minutes;
    document.getElementById('hour').innerText = hours;
    document.getElementById('day').innerText = days;

}, 1000);

