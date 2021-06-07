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

    for (var i=0; i < elements.length; i+=2) {
        var grade = elements[i].value;
        grade =  eval(grade);
        var weight = elements[i + 1].value;

        avgGrade += grade * weight;

    }
    document.results.average.value = avgGrade;
    console.log(avgGrade);




}