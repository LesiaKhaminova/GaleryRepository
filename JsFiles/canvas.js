var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
function drawGradient() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  var currentTime = new Date().getTime();
  var speed = 0.001;
  var offset = Math.sin(currentTime * speed) * 100;

  gradient = ctx.createLinearGradient(offset, 0, canvas.width + offset, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  requestAnimationFrame(drawGradient);
}
drawGradient();
