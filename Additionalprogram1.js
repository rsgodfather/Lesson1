"use strict";
var table, rows, cells, i, j;
table = document.createElement('table');
table.style.textAlign = 'right';
table.style.fontFamily = 'monospace';
for (i=1; i<10; i++) {
    rows = document.createElement('tr');
    for (j=1; j<10; j++) {
        cells = document.createElement(i === 1 || j === 1 ? 'th' : 'td');
        cells.appendChild(document.createTextNode(i*j));
        cells.style.padding = '4px';
        cells.style.width = 100 / 9 + '%';
        rows.appendChild(cells);
    }
    table.appendChild(rows);
}
document.body.appendChild(table);



// for (let i = 1;i<10;i++){
//     for (let y = 1;y<10;y++){
//         document.write(i + "*" + y + "=" + (i * y) + "<br>");
//     }
//     document.write("<br>");
// }

