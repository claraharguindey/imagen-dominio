let audio = document.getElementById("audio");
let playIcon = document.getElementById("play-icon");
let pauseIcon = document.getElementById("pause-icon");
let volumeSlider = document.getElementById("volume-slider");

function setVolume() {
    audio.volume = volumeSlider.value / 100;
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playIcon.style.opacity = "1";
    } else {
        audio.pause();
        playIcon.style.opacity = "0.5";
    }
}

setVolume();
volumeSlider.addEventListener("input", setVolume);

function toggleAccordion() {
    var accordionContent = document.getElementById('accordionContent');
    if (accordionContent.style.display === 'block') {
        accordionContent.style.display = 'none';
    } else {
        accordionContent.style.display = 'block';
    }
}