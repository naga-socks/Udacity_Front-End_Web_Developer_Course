// Select color input
var colorInput = $('#colorPicker');
// Select size input
var inputWidth = $('#input_width');
var inputHeight = $('#input_height');
// Select table
var table = document.getElementById('pixel_canvas');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function makeGrid() {
    // Remove all children of the old table
    while (table.firstChild)
        table.removeChild(table.firstChild);

    // Add cells to table
    for (var i = 0; i < inputHeight.val(); i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < inputWidth.val(); j++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    // Don't reload the page
    return false;
});

// When a cell is clicked, call colorCell
$('#pixel_canvas').on('click', 'td', function colorCell(evt) {
    var background = (evt.target).style.backgroundColor;
    var isWhiteBackground = !background || background === "white" || background === "rgb(255, 255, 255)" ||
        background === "#fff" || background ==="#fffff";
    var color = isWhiteBackground ? colorInput.val() : "white";
    $(evt.target).css("background-color", color);
});
