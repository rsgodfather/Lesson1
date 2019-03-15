"use strict";
// let namepersonel = {};
// user.namepersonel = "Vasya";
// user.surname ="petrov";
// user.namepersonel = "sergey";
// delete user.namepersonel;
// console.log(user);


// let salaries = {
//     "Vasa": 100,
//     "Peta": 300,
//     "Dasha": 300
// };
// }
// let sum = Infinity, maxpaiddeveloper;
// for (let namepersonel in salaries){
//     if (salaries[namepersonel]>sum){
//     sum += salaries(namepersonel);
//     maxpaiddeveloper=namepersonel;
//     }
//
// }
// if(!maxpaiddeveloper){
//     alert('no personal');
// }
// else {
//     alert(maxpaiddeveloper);
// }
// console.log(name);



function isNumeric(n) {
    return !isNaN(parseFlout(n)) && isFinite(n);
}
function multiplyNumeric(obj)
{
    for(let prop in obj){
        if(isNumeric(obj[prop])){
            obj[prop] *=2;
        }
    }
}


