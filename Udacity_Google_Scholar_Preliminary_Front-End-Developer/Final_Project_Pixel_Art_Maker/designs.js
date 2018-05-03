// things to improve!
/*
https://codepen.io/amcquistan/project/editor/AQLkrV

credit to Adam McQuistan
01-MAR-2018

* 0. Document every piece of this code
* 1. add erase function
* 2. add drag and draw option
*/


$(function(){
  // cache the jQuery colorPicker obj
  const $colorPicker = $('#colorPicker');

  // initialize default color
  let color = $colorPicker.val();

  // listen to change events on colorPicker and update color
  $colorPicker.change(function() {
    color = $colorPicker.val();
  });

  // declare rows and cols
  let rows, cols;

  // cache jQuery input objects for rows, cols, and sizePicker form
  const $rowInput = $('#input_height');
  const $colsInput = $('#input_width');
  const $sizePicker = $('#sizePicker');

  // listen for submit event update rows and cols then call makeGrid()
  $sizePicker.submit(function(evt){
    evt.preventDefault();
    rows = $rowInput.val();
    cols = $colsInput.val();
    makeGrid();
  });

  // cache the jQuery table obj
  const $table = $('#pixel_canvas');
  function makeGrid() {
    $table.empty();
    let tableHTML = '';
    for (let r = 0; r < rows; r++) {
      tableHTML += '<tr>';
      for (let c = 0; c < cols; c++) {
        tableHTML += '<td></td>';
      }
      tableHTML += '</tr>';
    }
    $table.append(tableHTML);
  }

  // use event delegation to listen to clicks on cells
  $table.on('click', 'td', function(evt) {
    $(evt.target).css('background-color', color);
  });
});
