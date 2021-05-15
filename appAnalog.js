function getTime() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var secondAngle = calculateSecondAngle(seconds);
    var minuteAngle = calculateMinuteAngle(minute);
    var hourAngle = calculateHourAngle(hour, minute);
    document.getElementById("hourHand").style.transform = hourAngle;
    document.getElementById("secondHand").style.transform = secondAngle;
    document.getElementById("minuteHand").style.transform = minuteAngle;
    // setInterval(function () { getTime(); }, 1000);
    // document.getElementById("clock").innerHTML = `${hour[0]}:${minute}:${seconds} ${hour[1]}`;
    // document.getElementById("switch").onclick = function () {
    //     console.log("CLICKED BUTTON");
    // }
}

function calculateHourAngle(h, m) {
    console.log(`hours: ${h}, minutes: ${m}`);
    var mConverted = m / 60;
    h = h + mConverted;
    var angle = (360 / 12 * h);
    var hourStyle = "rotate(" + angle + "deg)";
    // console.log(hourStyle);
    return hourStyle;
}

function calculateMinuteAngle(m) {
    var angle = (360 / 60 * m);
    var minuteStyle = "rotate(" + angle + "deg)";
    return minuteStyle;
}

function calculateSecondAngle(s) {
    var angle = (360 / 60 * s);
    var secondStyle = "rotate(" + angle + "deg)";
    return secondStyle;
}

function getReady() {
    document.addEventListener("DOMContentLoaded", function (event) {
        document.getElementById("hourHand").classList.remove("hidden");
        document.getElementById("minuteHand").classList.remove("hidden");
        document.getElementById("secondHand").classList.remove("hidden");
    });
}

getReady();
getTime();
setInterval(getTime, 1000);

console.log("It's working!")
