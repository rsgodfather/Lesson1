"use strict";
let mass=[] ,i , j;
for (i=1;i<10;i++){
    let str="";
    for(j=0;j<i;j++){
        str += i;
    }
    mass.push(str);
}
document.write(mass);