document.addEventListener("keydown", function (event) {
  if ((event.ctrlKey && event.key === "f") || "а") {
    window.open("/index.html");
  }
});
document.addEventListener("keydown", function (event) {
  if ((event.altKey && event.key === "g") || "п") {
    window.open("/form.html");
  }
});
