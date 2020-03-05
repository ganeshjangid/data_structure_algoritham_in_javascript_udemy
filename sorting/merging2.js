const merge=require('./merging');

console.log("==========================");


function mergesort(arr) {
    if(arr.length <=1 ) return arr;
    let midPoint=Math.floor(arr.length/2);
    //console.log(midPoint);
    let leftSide = mergesort(arr.slice(0, midPoint));
    //console.log(leftSide);
    let rightSide = mergesort(arr.slice(midPoint));
    //console.log(rightSide);
    
    return merge.mergeSort(leftSide, rightSide);

}

console.log(mergesort([10, 24, 76, 73, 72, 1, 9]));

