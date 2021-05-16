function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    hour = convert12Hour(hour);
    minute = convertMinSec(minute);
    seconds = convertMinSec(seconds);
    console.log(`${hour[0]}:${minute}:${seconds} ${hour[1]}`);
    // console.log(`${hour}:${minute}:${seconds}`);
    // setInterval(function () { getTime(); }, 1000); 
    document.getElementById("digitalClock").innerHTML = `${hour[0]}:${minute}:${seconds} ${hour[1]}`;
}

function convert12Hour(i) {
    if (i > 12) {
        i = i - 12;
        return [i, "PM"];
    } else if (i == 0) {
        return [12, "AM"];
    } else if (i == 12) {
        return [12, "PM"];
    } else {
        return [i, "AM"];
    }
}

function convertMinSec(i) {
    if (i < 10) {
        return "0" + i;
    } else {
        return i;
    }
}

setInterval(getTime, 1000);

// console.log("It's working!")
