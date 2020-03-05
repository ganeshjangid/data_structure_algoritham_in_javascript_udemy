const {
    performance
} = require('perf_hooks');
const matchFirstAndLast=(arr)=>{
    //console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
        for (let j = i+1; j < arr.length; j++) {
            //console.log(j);
            if (arr[i]+arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }   
    }
};
var t1 = performance.now();
console.log(matchFirstAndLast([-3, -2, -1, 0, 1, 2, 3]));
var t2 = performance.now();
console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`);



const matchFirstAndLast1=(arr)=>{
    //console.log(arr);
    let left=0;
    let right =arr.length-1;
    //console.log(right);

    while (left < right) {
        let sum=arr[left]+arr[right];
        //console.log(sum);
        if (sum === 0) {
            return [arr[left],arr[right]];
        }else if(sum > 0){
            right --;
        }else{
            left++;
        }    
    }

};
var t1 = performance.now();
console.log(matchFirstAndLast1([-3, -2, -1, 0, 1, 2, 3]));
var t2 = performance.now();
console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`);
