class Timer{
    constructor({ selector, targetDate, onTick }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.onTick = onTick;
    }
    start() {
        const endTime = this.targetDate;

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime=endTime-currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
            // updateClockFace(time);
            console.log(time);
        }, 1000);
    }
    getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
            //принимает число ,приводит к строке и добавляет в начало 0, если число меньше 2х симв
    pad(value) {
        return String(value).padStart(2, '0');
    }

}

const timer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Aug 05, 2021'),
    onTick:updateClockFace,
});

timer.start();

// function updateClockFace({ days, hours, mins, secs }) {
//     refs.selector.textContent = `${days}:${hours}:${mins}:${secs}`;
// }

function updateClockFace({ days, hours, mins, secs }) {
    const selectorRef = document.querySelector(this.selector);
    selectorRef.querySelector('span[data-value="days"]').textContent = days;
    selectorRef.querySelector('span[data-value="hours"]').textContent = hours;
    selectorRef.querySelector('span[data-value="mins"]').textContent = mins;
    selectorRef.querySelector('span[data-value="secs"]').textContent = secs;
}
    
