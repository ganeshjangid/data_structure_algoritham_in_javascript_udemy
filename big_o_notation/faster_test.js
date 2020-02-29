const {
    performance
} = require('perf_hooks');

/* console.log("Test performance with one method");

const addUpTo = (n) => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
};

var t1=performance.now();
console.log(addUpTo(1000000000));
var t2=performance.now();

console.log(`Time Elasped: ${t1-t2/1000} seconds`);
 */

console.log("Test performance with Second method");
/* 
function addUpTo1(n) {
    const otherSolution = n * (n + 1) / 2;
    return otherSolution;
} 

var t1 = performance.now();
console.log(addUpTo1(1000000000));
var t2 = performance.now();

console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`); */


console.log("Test performance with Third method");

const countUpAndDown=(n)=>{
    console.log("Growing up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("Growing Down");
    for (let i = n-1; i >=0 ; i--) {
        console.log(i);
    }
    console.log("Finish Task and Good Bye");
};
var t1 = performance.now();
countUpAndDown(10);
var t2 = performance.now();
console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`);

