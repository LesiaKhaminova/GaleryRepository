function Blocks(sectionId) {
  var panel = document.getElementById(sectionId);
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}
