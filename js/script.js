 window.addEventListener('DOMContentLoaded', () => {

'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        let hideTabContent = (a) => {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');a
            }
        }

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide'))  {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
}
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let t in tab) {
                if (target == t) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
}
        }
});

    //Timer
let deadLine = '2020-12-12';

let getTimeRemaining = (endTime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        
        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'secons' : seconds
        };
    }

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            let updateClock = () => {
                let t = getTimeRemaining(endtime);
    
            let addZero = (num) => {
                return num <= 9 ? '0' + num : num;
                            
                        };
    hours.textContent = addZero(t.hours);
    minutes.textContent = addZero(t.minutes);
    seconds.textContent = addZero(t.seconds);
    
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
    setClock('timer', deadline);
    
//Modal

let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classlist.add('more-splash');
            document.body.style.overflow = 'hidden';
        });

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classlist.remove('more-splash');
            document.body.style.overflow = '';
        });
}); 

// Второе задание





    
