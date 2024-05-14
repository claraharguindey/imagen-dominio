const texts = [
  "Episodio 3. Imagen dominio.",
  "El arte contemporáneo,",
  "entendiendo que la imagen miente por definición,",
  "toma consciencia del carácter provisional de su existencia.",
  "y acepta formar parte del flujo temporal.",
  "",
  "Frente a la imagen mimética ofrecida por el museo",
  "el arte contemporáneo señala las imágenes virtuales contenidas en la realidad",
  "bajo nuevos criterios.",
  "",
  "",
  "",
  "",
  "",
  "",
];

const images = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "./../assets/images/dominio/image2.jpeg",
  "./../assets/images/dominio/image8.jpeg",
  "./../assets/images/dominio/image9.png",
  "./../assets/images/dominio/image3.jpeg",
  "./../assets/images/dominio/image2.jpeg",
  "./../assets/images/dominio/image5.webp",
];

let currentIndex = 0;
const textElement = document.getElementById("text");
const imageElement = document.getElementById("image");

function displayNextPhrase() {
  textElement.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;

  const image = images[currentIndex];
  if (image !== "") {
    imageElement.style.display = "block";
    imageElement.src = image;
  } else {
    imageElement.src = "";
    imageElement.style.display = "none";
  }
}

displayNextPhrase();
setInterval(displayNextPhrase, 5000);

let audio = document.getElementById("audio");
let playIcon = document.getElementById("play-icon");
let volumeSlider = document.getElementById("volume-slider");
let isPlaying = false;
audio.onplaying = function () {
  isPlaying = true;
};
audio.onpause = function () {
  isPlaying = false;
};

function setVolume() {
  audio.volume = volumeSlider.value / 100;
}

function toggleAudio() {
  if (audio.paused && !isPlaying) {
    audio.play();
    playIcon.style.opacity = "1";
  } else if (!audio.paused && isPlaying) {
    audio.pause();
    playIcon.style.opacity = "0.5";
  }
}

setVolume();

playIcon.addEventListener("click", toggleAudio);
volumeSlider.addEventListener("input", setVolume);


function toggleAccordion() {
  var accordionContent = document.getElementById('accordionContent');
  if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
  } else {
      accordionContent.style.display = 'block';
  }
}