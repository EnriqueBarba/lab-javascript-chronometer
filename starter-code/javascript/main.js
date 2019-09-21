const chronometer = new Chronometer();
const btnLeft     = document.getElementById('btnLeft');
const btnRight    = document.getElementById('btnRight');
const minDec      = document.getElementById('minDec');
const minUni      = document.getElementById('minUni');
const secDec      = document.getElementById('secDec');
const secUni      = document.getElementById('secUni');
const milDec      = document.getElementById('milDec');
const milUni      = document.getElementById('milUni');
let id = null;

function printTime() {
    const seg = printSeconds().split('')
    const mins = printMinutes().split('')
    secDec.innerText = seg[0] 
    secUni.innerText = seg[1]
    minDec.innerText = mins[0]
    minUni.innerText = mins[1]
}

function printMinutes() {
    return chronometer.twoDigitsNumber(chronometer.getMinutes())
}

function printSeconds() {
    return chronometer.twoDigitsNumber(chronometer.getSeconds())
}

function printMilliseconds() {

}

function printSplit() {
    const olSplits = document.getElementById('splits');
    const liSplit = document.createElement("li")
    liSplit.innerText = printMinutes() + ":" + printSeconds()
    olSplits.append(liSplit);
}

function clearSplits() {
    const olSplits = document.getElementById('splits');
    olSplits.innerHTML = ''
}

function setStopBtn() {
    btnLeft.classList.remove("start")
    btnLeft.classList.add("stop")
    btnLeft.innerText = "STOP"
}

function setSplitBtn() {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.innerText = "SPLIT"
}

function setStartBtn() {
    btnLeft.classList.remove("stop")
    btnLeft.classList.add("start")
    btnLeft.innerText = "START"
}

function setResetBtn() {
    btnRight.classList.add("reset");
    btnRight.classList.remove("split");
    btnRight.innerText = "RESET"
}

const test = () => setInterval(printTime,500)

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerText === "STOP") {
        chronometer.stopClick();
        clearInterval(id)
        setStartBtn()
        setResetBtn()
    } else {
        chronometer.startClick();
        id = test()
        setStopBtn()
        setSplitBtn()
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {

    if (btnRight.innerText === "SPLIT") {
        printSplit()
    }

    if (btnRight.innerText === "RESET") {
        chronometer.resetClick()
        clearSplits()
        secDec.innerText = '0'
        secUni.innerText = '0'
        minDec.innerText = '0'
        minUni.innerText = '0'
    }

});
