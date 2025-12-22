/***** CALCULATE THE TIME REMAINING *****/
function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
/***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
function initializeClock(className) {
    let clocks = document.querySelectorAll(className);
    clocks.forEach(clock => {
        let fStatus = clock.getAttribute('data-status');
        let endTime = fStatus == 1 ? clock.getAttribute('data-end') : clock.getAttribute('data-start');
        let clockName = clock.parentElement.querySelector('.name');
        if(moment().isBefore(endTime)){
            if(clockName) clockName.innerHTML = fStatus == 1 ? 'Thời gian còn:' : 'Bắt đầu sau:';
            clock.parentElement.classList.remove("d-none");
            let daysSpan = clock.querySelector('.days');
            let hoursSpan = clock.querySelector('.hours');
            let minutesSpan = clock.querySelector('.minutes');
            let secondsSpan = clock.querySelector('.seconds');
            function updateClock() {
                let t = getTimeRemaining(endTime);
                if(daysSpan) daysSpan.innerHTML = t.days;
                if(hoursSpan) hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                if(minutesSpan) minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                if(secondsSpan) secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }
            updateClock(); // run function once at first to avoid delay
            let timeinterval = setInterval(updateClock, 1000);
        }else{
            clock.parentElement.classList.add("d-none");
        }
    });
}
/***** SET A VALID END DATE *****/
initializeClock('.clockdiv1');