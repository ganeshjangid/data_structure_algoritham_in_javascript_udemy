function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function digitHighCount(num) {
    let maxDigit = 0;
    for (let i = 0; i < num.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(num[i]));
    }
    return maxDigit;
}  

function radixSort(nums){
    let mostDigits = digitHighCount(nums);
    //console.log(mostDigits);

    for (let k = 0; k < mostDigits; k++) {
        let digitBucket=Array.from({length:10},()=>[]);
        //console.log(digitBucket);
        for (let i = 0; i < nums.length; i++) {
            //console.log(getDigit(nums[i],k));    
            digitBucket[getDigit(nums[i], k)].push(nums[i]);
            //console.log(digitBucket);    
        }

        nums = [].concat(...digitBucket);
        
    }

    return nums;
    
}

console.log(radixSort([23,345,5467,12,2345,9852]));
