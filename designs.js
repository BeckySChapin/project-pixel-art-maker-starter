//Create the Grid
function makeGrid() {
  //variable declarations
  var inputX, inputY, canvas, cell, row;

  inputY = $("#inputHeight").val();
  inputX = $("#inputWidth").val();
  canvas = $("#pixelCanvas");


  canvas.children().remove();

  //creates the rows
  for (y = 0; y < inputY; y++) {
    canvas.append("<tr></tr>");
  }

  //creates the columns
  row = $("tr");
  x = 0;
  while (x < inputX) {
    x++;
    row.append("<td></td>");
  }
}

//calls makeGrid when the submit button is clicked
$('input[type="submit"]').click(function(event) {
  event.preventDefault();
  makeGrid();
});

//mouseclick event to paint
$("#pixelCanvas")
  .delegate("td", "mousedown", function() {
    mouseDownState = true;
    $el = $(this);
    $el.css("background", $("#colorPicker").val());
  })
  .delegate("td", "mousedown", function() {
    if (mouseDownState) {
      $el = $(this);
      $el.css("background", $("#colorPicker").val());
    }
  });

//pointer released
$("html").bind("mouseup", function() {
  mouseDownState = false;
});

//starts continuous paint mode on mousedown, ends it on mouseup
//not working at the moment... needs debugging
// pixelCanvas.addEventListener ("mousedown", addPaint);
//
// function addPaint (event) {
//   pixelCanvas.addEventListener ("mouseover", multiPaint);
// };
//
// function multiPaint (event) {
//   if (event.target.tagName == "TD"){
//     event.target.style.backgroundColor = currentColor;
//   }
// };
//
// pixelCanvas.addEventListener ("mouseup", function(){
//   pixelCanvas.removeEventListener ("mouseover", multiPaint);
// });
//
// colorPicker.addEventListener ("click", picker);
//
// function picker (event){
//   currentColor = mixer.value;
//   console.log (mixer.value);
//   console.log (currentColor);
// };
