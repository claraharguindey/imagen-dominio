let capture = null;
let tracker = null;
let positions = null;
let w = 0,
  h = 0;

function setup() {
  w = windowWidth;
  h = windowHeight;
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  frameRate(10);
  colorMode(HSB);
  background(0);

  tracker = new clm.tracker();
  tracker.init();
  tracker.start(capture.elt);
}

function draw() {
  translate(w, 0);
  scale(-1.0, 1.0);
  positions = tracker.getCurrentPosition();
  if (positions.length > 0) {
    const eye1 = {
      outline: [23, 63, 24, 64, 25, 65, 26, 66].map(getPoint),
      center: getPoint(27),
      top: getPoint(24),
      bottom: getPoint(26),
    };
    const eye2 = {
      outline: [28, 67, 29, 68, 30, 69, 31, 70].map(getPoint),
      center: getPoint(32),
      top: getPoint(29),
      bottom: getPoint(31),
    };

    drawEye(eye1, "#ffffff");
    drawEye(eye2, "#ffffff");
  }
}

function getPoint(index) {
  return createVector(positions[index][0], positions[index][1]);
}

function drawEye(eye) {
  noFill();
  stroke(255, 0.4);
  drawEyeOutline(eye);
}

function drawEyeOutline(eye) {
  beginShape();
  const firstPoint = eye.outline[0];
  eye.outline.forEach((p, i) => {
    curveVertex(p.x, p.y);
    if (i === 0) {
      curveVertex(firstPoint.x, firstPoint.y);
    }
    if (i === eye.outline.length - 1) {
      curveVertex(firstPoint.x, firstPoint.y);
      curveVertex(firstPoint.x, firstPoint.y);
    }
  });
  endShape();
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  background(0);
}
