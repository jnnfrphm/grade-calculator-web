function addNewRow() {
    var table = document.getElementById("myTable");
    var row = document.createElement("tr");
    for (var  i = 0; i < 2; i ++) {
        var cell = document.createElement("td");
        var input = document.createElement("input");
        input.size = 15;
        cell.appendChild(input);
        row.appendChild(cell);
    }
    myTable.appendChild(row);
}