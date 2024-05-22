import "./main.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawLine(width = 100) {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(width, canvas.height / 2);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Draw a circle with red stroke
function drawCircle(radius = 50) {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// drawCircle(100);

// convert degrees to radians
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Draw a arc with red stroke
function drawArc(radius = 100) {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, degreesToRadians(90));
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// Draw arc, accept color, start and end angle
function drawArcWithColor(
  radius = 100,
  color = "red",
  startAngle = 0,
  endAngle = 90,
) {
  ctx.beginPath();
  ctx.arc(
    canvas.width / 2,
    canvas.height / 2,
    radius,
    degreesToRadians(startAngle),
    degreesToRadians(endAngle),
  );
  ctx.strokeStyle = color;
  ctx.lineWidth = 5;
  ctx.stroke();
}

function drawColorfulCircle() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const startingAngle = 90;
  for (let i = 0; i < colors.length; i++) {
    drawArcWithColor(
      200,
      colors[i],
      startingAngle + i * (360 / colors.length),
      startingAngle + (i + 1) * (360 / colors.length),
    );
  }
}

// drawColorfulCircle();

// Within a 5 seconds duration, for every 1 second, draw a arc with random color
function drawRandomColorfulCircle() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const startingAngle = 90;
  let i = 0;
  const interval = setInterval(() => {
    drawArcWithColor(
      200,
      colors[i],
      startingAngle + i * (360 / colors.length),
      startingAngle + (i + 1) * (360 / colors.length),
    );
    i++;
    if (i === colors.length) {
      clearInterval(interval);
    }
  }, 1000);
}

// drawRandomColorfulCircle();

// Draw an arc with animation, accept color, start and end angle, and duration
function drawArcWithAnimation(
  radius = 100,
  color = "red",
  startAngle = 0,
  endAngle = 90,
  duration = 1000,
) {
  let start = null;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawArcWithColor(
      radius,
      color,
      startAngle,
      startAngle + (progress / duration) * (endAngle - startAngle),
    );
    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// drawArcWithAnimation(200, "red", 0, 72, 1000);

// Draw a circle with animation, split the circle with colors
function drawSplitCircle() {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const startingAngle = 90 + (360 / colors.length) * 2;
  let i = 0;
  const interval = setInterval(() => {
    drawArcWithAnimation(
      200,
      colors[i],
      startingAngle + i * (360 / colors.length),
      startingAngle + (i + 1) * (360 / colors.length),
      1000,
    );
    i++;
    if (i === colors.length) {
      clearInterval(interval);
    }
  }, 1000);
}

// Draw bg circle with light gray stroke
function drawBackgroundCircle(radius = 200) {
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
  ctx.strokeStyle = "lightgray";
  ctx.lineWidth = 5;
  ctx.stroke();
}

drawBackgroundCircle();
drawSplitCircle();

// Draw a square with red stroke
function drawSquare(width = 100) {
  ctx.beginPath();
  ctx.rect(
    canvas.width / 2 - width / 2,
    canvas.height / 2 - width / 2,
    width,
    width,
  );
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
}

// drawSquare(100);
// drawSquare(200)