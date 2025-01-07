var bufferBackColor = "";
var bufferBorder = "";
var bufferColor = "";
function colorTable() {
  var rows = document.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    rows[i].addEventListener("mouseover", mouseEnterTr);
    rows[i].addEventListener("mouseleave", mouseLeaveTr);
  }
  function mouseEnterTr() {
    bufferBackColor = this.style.backgroundColor;
    bufferBorder = this.style.border;
    bufferColor = this.style.color;
    this.style.backgroundColor = "  #00ffff";
    this.style.border = "3px solid  #4d0026";
    this.style.color = " #4d0026";
  }
  function mouseLeaveTr() {
    this.style.backgroundColor = bufferBackColor;
    this.style.border = bufferBorder;
    this.style.color = bufferColor;
  }
}
colorTable();
