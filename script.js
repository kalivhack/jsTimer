let hr = document.getElementById("hours")
let mn = document.getElementById("minutes")
let sc = document.getElementById("seconds")

function lwtZero(number) {
    if ( number.length == 1) {
        return "0" + number
    }
    return number;
}


setInterval (function () {
    date = new Date()
    hr.innerText = lwtZero(date.getHours().toString())
    mn.innerText = lwtZero(date.getMinutes().toString())
    sc.innerText = lwtZero(date.getSeconds().toString())
}, 1000)

