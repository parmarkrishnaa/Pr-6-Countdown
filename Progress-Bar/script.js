let progressBar = document.getElementById("progress-bar");
let download = document.getElementById("download");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let message = document.getElementById("message");
let progress = 0;
let interval = null;

download.addEventListener('click', () => {
    clearInterval(interval);

    interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            download.style.display = "none";
            stop.style.display = "none";

            let p = document.createElement('p');
            p.innerText = "Download Completed.";
            message.appendChild(p);
        } else {
            progress += 1;
            progressBar.style.width = progress + "%";
            progressBar.innerText = progress + "%";
        }
    }, 200);
})

stop.addEventListener('click', () => {
    clearInterval(interval);
    download.innerText = "Resume";
    download.classList.remove('btn-success')
    download.classList.add('btn-warning');
})

reset.addEventListener('click', () => {
    clearInterval(interval);
    progressBar.style.width = "0%";
})