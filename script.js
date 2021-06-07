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

function calcGrade() {
    var table = document.getElementById("myTable");
    var elements = table.getElementsByTagName("input");
    var avgGrade = 0;
    var weights = 0;
    for (var i = 0; i < elements.length; i += 2) {
        if(elements[i].value) {
            var grade = elements[i].value;
            grade =  eval(grade);
            var weight = parseFloat(elements[i + 1].value);
            weights += weight;
            avgGrade += grade * weight;
        }
    }
    var average = (avgGrade/weights).toFixed(3);
    document.results.average.value = average;
    var desGrade =  document.getElementById("desiredGrade").value;
    var needed = (parseFloat(desGrade) - avgGrade) / (1 - weights);
    document.results.needed.value = needed.toFixed(3);
}