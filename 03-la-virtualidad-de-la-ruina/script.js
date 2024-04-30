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
  "./../assets/images/dominio/image5.webp"
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
