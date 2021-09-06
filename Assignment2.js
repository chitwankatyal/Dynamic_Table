function createTable()
{
    var table = document.getElementById("table");
    var rows = document.getElementById("rows").value;
    var columns = document.getElementById("columns").value;

    for(var i = 1; i <= rows; i++) //i counter for rows
    {
        var tr = document.createElement("tr");

        for(var j = 1; j <= columns; j++) //j counter for columns
        {
            var td = document.createElement("td");
            var text = document.createTextNode(i + "," + j);

            td.appendChild(text);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

document.getElementById("create").addEventListener("click",createTable);