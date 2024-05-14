let dots = [];
let currentIndex = 0;
let currentContentIndex = 0;
let lastPos = { x: 0, y: 0 };
let currentPos = { x: 0, y: 0 };
let dotSize = 8;
const savedDots = [];
let started = false;

const FETCH_NODES_TIMEOUT = 24000;
const DASH_LENGTH = 2;
const GAP_LENGTH = 5;

const phrases = [
  "Episodio 2. La virtualidad de la ruina.",
  "Frente a la imagen virtual de la ruina que nos empuja hacia el futuro,",
  "existe un tipo de virtualidad imbricada en la ruina que nos mueve hacia el pasado.",
  "",
  "En términos deleuzianos, la virtualidad es un ámbito de potencialidad.",
  "El conjunto de posibilidades latentes y entrelazadas con lo real,",
  "que pueden desplegarse en algún momento.",
  "",
  "Los museos concretan las imágenes virtuales de la ruina.",
  "",
  "Al dotar de cuerpo y materialidad a la imagen ausente,",
  "la ilusión de realidad y mímesis",
  "agota la imaginación de lo posible, ofreciendo una visión probable.",
  `Episodio 3. <a href="./../03-imagen-dominio/">La imagen dominio.</a>`,
];

const images = [
  "",
  "",
  "",
  "./../assets/images/acropolis-museum/image1.png",
  "",
  "",
  "",
  "./../assets/images/acropolis-museum/image2.png",
  "./../assets/images/acropolis-museum/image3.png",
  "./../assets/images/acropolis-museum/image4.png",
  "./../assets/images/dominio/image1.jpeg",
  "./../assets/images/dominio/image4.jpeg",
  "",
  "",
  "",
  "./../assets/images/dominio/image9.png",
];

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  connect(px, py) {
    stroke(255);
    drawingContext.setLineDash([DASH_LENGTH, GAP_LENGTH]);
    line(this.x, this.y, px, py);
  }

  plot() {
    stroke(255);
    strokeWeight(1);
    drawingContext.setLineDash([0, 0]);
    ellipse(this.x, this.y, dotSize);
  }

  within(px, py) {
    let d = dist(px, py, this.x, this.y);
    return d < dotSize;
  }
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.mouseReleased(addDot); // Llamar a addDot() cuando se suelte el botón del mouse

  if (started) {
    canvas.mousePressed(setPosition);
  }
}

function draw() {
  background(0);
  drawDots();
  drawLines();
}

function drawDots() {
  dots.forEach((dot) => dot.plot());
}

function drawLines() {
  stroke(255);
  strokeWeight(1);
  drawingContext.setLineDash([DASH_LENGTH, GAP_LENGTH]);
  line(lastPos.x, lastPos.y, currentPos.x, currentPos.y);
  for (let i = 1; i < dots.length; i++) {
    dots[i].connect(dots[i - 1].x, dots[i - 1].y);
  }
}

function addDot() {
  dots.push(new Dot(mouseX, mouseY));
  currentIndex++;
  currentContentIndex++;
  displayPhrase();
}

function displayPhrase() {
  if (currentContentIndex < phrases.length) {
    updateContent();
  }
}

function updateContent() {
  const phrase = phrases[currentContentIndex];
  const image = images[currentContentIndex];
  const imageElement = document.getElementById("image");
  const textElement = document.getElementById("text");
  if (image !== "") {
    imageElement.style.display = "block";
    imageElement.src = image;
  } else {
    imageElement.src = "";
    imageElement.style.display = "none";
  }

  textElement.innerHTML = phrase;
}

function setPosition() {
  currentPos.x = mouseX;
  currentPos.y = mouseY;
}

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