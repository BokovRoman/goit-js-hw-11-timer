/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

//  2 способ Таймер (Веник Александр)

class Timer{
    constructor(selector, countdown){
        this.element = document.querySelector(selector);
        this.countdown = countdown;
    }

    getSecond() {
       return Math.floor((this.countdown % (1000 * 60)) / 1000)+'';
    }

     getMinutes() {
        return Math.floor((this.countdown % (1000 * 60 * 60)) / (1000 * 60))+''; 
    }

     getHours() {
         return Math.floor((this.countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
             +'';
    }

     getDays() {
        return Math.floor(this.countdown / (1000 * 60 * 60 * 24))+'';
    }

    render() {
        this.element.innerHTML = `${this.getDays().padStart(2, '0')}:
        ${this.getHours().padStart(2, '0')}:
        ${this.getMinutes().padStart(2, '0')}:
        ${this.getSecond().padStart(2, '0')}`
    }

    init() {
        const interval = setInterval(() => {
            this.countdown -= 1000;

            if (this.countdown <= 0) {
                this.countdown=0;
                clearInterval(interval);
            }

            this.render();
        },1000)
    }
}

const timer = new Timer('#timer-1', 10000);
timer.init();

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Avg 05, 2021'),
// });







// const date1 = new Date();
// console.log(date1);
// setTimeout(() => {
//     const date2 = new Date();
//     console.log(date2);
//     console.log(date2-date1);
// }, 3000);