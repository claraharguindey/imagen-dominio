const phrases = [
  "Episodio 1. La ruina virtual.",
  "El arquitecto alemán Albert Speer (que ejerció como ministro de Armamento y Producción de Guerra de la Alemania nazi)",
  "ideaba los edificios que construyó para el Tercer Reich",
  "imaginándolos en ruinas.",
  "Sus proyectos nacían de la idea de ruina",
  "para finalmente convertirse en ellas.",
  "De esta forma, los escombros serían capaces",
  "de seguir transmitiendo la fuerza y el poder que un el edificio quiso representar.",
  "",
  "En 1796, tan solo tres años después de la inauguración del Museo del Louvre,",
  "el pintor francés Hubert Robert dibuja una vista imaginaria de la Gran Galería del Museo",
  "en ruinas. ",
  "Como la ruina calculada de Speer, el museo se entiende a partir de su propia ruina",
  "como una institución en permanente crisis,",
  "que lucha por la conservación de sus colecciones y espacios.",
  "Esta lucha contra el paso del tiempo y sus efectos,",
  "ha sido una de las lógicas vertebradoras de la Historia del Arte occidental hasta el siglo XX",
  "Es entonces cuando la modernidad comienza a reclamar la disolución de los privilegios que el museo otorga:",
  "la promesa de la eternidad material.",
  `<a href="/02-la-virtualidad-de-la-ruina/">Episodio 2.</a>`,
];

const images = [
  "",
  "",
  "./../assets/images/speer/image1.jpg",
  "./../assets/images/speer/image2.png",
  "./../assets/images/speer/image3.png",
  "./../assets/images/speer/image4.png",
  "./../assets/images/speer/image5.png",
  "./../assets/images/speer/image6.png",
  "",
  "",
  "./../assets/images/hubert-robert/image1.jpeg",
  "./../assets/images/hubert-robert/image11.jpeg",
  "./../assets/images/hubert-robert/image2.png",
  "./../assets/images/hubert-robert/image3.png",
  "./../assets/images/hubert-robert/image4.png",
  "./../assets/images/hubert-robert/image5.png",
  "./../assets/images/hubert-robert/image6.png",
  "./../assets/images/hubert-robert/image7.png",
  "",
  "",
];

let currentIndex = 0;
document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("text");
  const imageElement = document.getElementById("image");

  updateContent();

  document.addEventListener("click", function () {
    if (currentIndex < phrases.length - 1) {
      currentIndex = (currentIndex + 1) % phrases.length;
      updateContent();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
      if (currentIndex < phrases.length - 1) {
        currentIndex = (currentIndex + 1) % phrases.length;
        updateContent();
      }
    } else if (event.key === "ArrowLeft") {
      if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + phrases.length) % phrases.length;
        updateContent();
      }
    }
  });

  function updateContent() {
    const phrase = phrases[currentIndex];
    const image = images[currentIndex];

    if (image !== "") {
      imageElement.style.display = "block";
      imageElement.src = image;
    } else {
      imageElement.src = "";
      imageElement.style.display = "none";
    }

    textElement.innerHTML = phrase;
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
});


function toggleAccordion() {
  var accordionContent = document.getElementById('accordionContent');
  if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
  } else {
      accordionContent.style.display = 'block';
  }
}