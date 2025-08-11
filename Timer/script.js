let display = document.querySelector('#display');
let laps = document.querySelector('#laps');
let hrs = 0, min = 0, sec = 0, mls = 0;
let interval = null;
let lapCount = 0;

function updateDisplay() {
    let h = hrs < 10 ? "0" + hrs : "" + hrs;
    let m = min < 10 ? "0" + min : "" + min;
    let s = sec < 10 ? "0" + sec : "" + sec;
    let ms = mls < 10 ? "0" + mls : "" + mls;
    display.textContent = h + ":" + m + ":" + s + ":" + ms;
}

function start() {
    if (interval !== null) return;

    interval = setInterval(() => {
        mls++;

        if (mls === 100) {
            mls = 0;
            sec++;

            if (sec === 60) {
                sec = 0;
                min++;

                if (min === 60) {
                    min = 0;
                    hrs++;
                }
            }
        }
        updateDisplay();
    }, 15);
}

function stop() {
    clearInterval(interval);

    interval = null;
}

function reset() {
    stop();

    hrs = 0; min = 0; sec = 0; mls = 0; lapCount = 0;

    updateDisplay();

    laps.innerHTML = "";
}

function lap() {
    if (interval === null) return;

    lapCount++;

    let h = hrs < 10 ? "0" + hrs : "" + hrs;
    let m = min < 10 ? "0" + min : "" + min;
    let s = sec < 10 ? "0" + sec : "" + sec;
    let ms = mls < 10 ? "0" + mls : "" + mls;

    let lapTime = h + ":" + m + ":" + s + ":" + ms;

    let lapEntry = document.createElement("div");
    lapEntry.className = "lap";
    lapEntry.textContent = "Lap " + lapCount + ": " + lapTime;

    laps.appendChild(lapEntry);
}

updateDisplay();