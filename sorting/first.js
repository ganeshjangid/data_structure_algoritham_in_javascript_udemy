const Sort=(arr)=>{    
    console.log("Problem in sortingg-----");
    
    console.log(arr.sort());
};
var arr=[26,10,25,5,1,36,12];
Sort(arr);

console.log("======================================");

const numCompare=(num1,num2)=>{
    return num1-num2;
};

var array=[6,4,15,10];

console.log(array.sort(numCompare));


console.log("------------------------------");

let a=10;
let b=20;

console.log(a,b);

[b,a]=[a,b];

console.log(a, b);




