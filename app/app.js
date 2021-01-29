
function clock() {
    const time = new Date();

    setClock("hours", time);
    setClock('minutes', time);
    setClock('seconds', time);

    
    setTimeout(clock, 500);
}


function setClock(unit, time) {
    let timeUnit, div1, div2;
    switch(unit) {
        case 'hours':
            timeUnit = time.getHours().toString();
            div1 = document.querySelectorAll('.hour-1');
            div2 = document.querySelectorAll('.hour-2');
            break;
        case 'minutes':
            timeUnit = time.getMinutes().toString();
            div1 = document.querySelectorAll('.min-1');
            div2 = document.querySelectorAll('.min-2');
            break;
        case 'seconds':
            timeUnit = time.getSeconds().toString();
            div1 = document.querySelectorAll('.sec-1');
            div2 = document.querySelectorAll('.sec-2');
            break;
    }   
    if(timeUnit < 10) {
        timeUnit = '0' + timeUnit;
    }

    let timeUnit1 = Number(timeUnit[0]).toString(2).split('').reverse();
    let timeUnit2 = Number(timeUnit[1]).toString(2).split('').reverse();

    div1.forEach((led, i) => {
        if(timeUnit1[i] === '1') {
            led.classList.add('lit');
        } else {
            led.classList.remove('lit');
        }
    });

    div2.forEach((led, i) => {
        if(timeUnit2[i] === '1') {
            led.classList.add('lit');
        } else {
            led.classList.remove('lit');
        }
    });

    
}

clock();







// const hours1Divs = document.querySelectorAll('.hour-1');
// const hours2Divs = document.querySelectorAll('.hour-2');
// const minutes1Divs = document.querySelectorAll('.min-1');
// const minutes2Divs = document.querySelectorAll('.min-2');
// const seconds1Divs = document.querySelectorAll('.sec-1');
// const seconds2Divs = document.querySelectorAll('.sec-2');

// function setSeconds(time) {
//     let seconds = time.getSeconds().toString();
//     if(seconds < 10) {
//         seconds = '0' + seconds;
//     }

//     // console.log(seconds);

//     let seconds1 = Number(seconds[0]).toString(2);
//     seconds1 = seconds1.split('');
//     let seconds1reverse = seconds1.reverse();

//     seconds1Divs.forEach((led, i) => {
//         if(seconds1reverse[i] === '1') {
//             led.classList.add('lit');
//         } else {
//             led.classList.remove('lit');
//         }
//     });

//     let seconds2 = Number(seconds[1]).toString(2);
//     seconds2 = seconds2.split('');
    
//     let seconds2reverse = seconds2.reverse();
    

//     seconds2Divs.forEach((led, i) => {
//         if(seconds2reverse[i] === '1') {
//             led.classList.add('lit');
//         } else {
//             led.classList.remove('lit');
//         }
//     });
// }

// function setMinutes(time) {
//     let minutes = time.getMinutes().toString();
//     if(minutes < 10) {
//         minutes = '0' + minutes;
//     }

//     let minutes1 = Number(minutes[0]).toString(2);
//     minutes1 = minutes1.split('');
//     let minutes1reverse = minutes1.reverse();

//     minutes1Divs.forEach((led, i) => {
//         if(minutes1reverse[i] === '1') {
//             led.classList.add('lit');
//         } else {
//             led.classList.remove('lit');
//         }
//     });

//     let minutes2 = Number(minutes[1]).toString(2);
//     minutes2 = minutes2.split('');
    
//     let minutes2reverse = minutes2.reverse();
    

//     minutes2Divs.forEach((led, i) => {
//         if(minutes2reverse[i] === '1') {
//             led.classList.add('lit');
//         } else {
//             led.classList.remove('lit');
//         }
//     });
// }