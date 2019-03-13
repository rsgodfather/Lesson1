"use strict";
// var table, row, cell, i, j;
// table = document.createElement('table');
// table.style.textAlign = 'right';
// table.style.fontFamily = 'monospace';
// for (i=1; i<10; i++) {
//     row = document.createElement('tr');
//     for (j=1; j<10; j++) {
//         cell = document.createElement(i == 1 || j == 1 ? 'th' : 'td');
//         cell.appendChild(document.createTextNode(i*j));
//         cell.style.padding = '4px';
//         cell.style.width = 100 / 9 + '%';
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }
// document.body.appendChild(table);



for (let i = 1;i<10;i++){
    for (let y = 1;y<10;y++){
        document.write(i + "*" + y + "=" + (i * y) + "<br>");
    }
    document.write("<br>");
}

