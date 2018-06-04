var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}

function todayIs(){
    document.getElementById('tday').innerHTML = 'Today is ' + day + '!';
    document.body.style.backgroundColor = 'green'
    document.getElementById('on').innerHTML = 'Enjoy the rest of your day!'
}