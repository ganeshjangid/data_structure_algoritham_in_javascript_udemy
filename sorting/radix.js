function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10;
};

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 2));

console.log("-------------------------------");

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))+1);
}


console.log(digitCount(1234));

console.log("-------------------------------");

function digitHighCount(num){
    let maxDigit=0;
    for (let i = 0; i < num.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(num[i]));
        
    }
    return maxDigit;
}   

console.log(digitHighCount([12,52,1582522,10]));