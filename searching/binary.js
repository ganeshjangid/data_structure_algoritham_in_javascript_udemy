const binarySear=(arr,num)=>{
    let start=0;
    let end=arr.length-1;
    let middle=Math.floor((start+end)/2);
    //console.log(arr[middle]);

    while (arr[middle] !== num && start <= end ) {
       // console.log(start,middle,end);
        
        if (num < arr[middle]) {
            end =middle-1;
        } else{
            start = middle + 1;
        } 
        middle = Math.floor((start + end) / 2);
        //console.log(arr[middle]);
    }
    //console.log(start, middle, end);
    if (arr[middle] === num) {
        return middle;
    }

    return -1;
    

};


let data=[1,2,3,5,6,7,9,10,12,13,14,19,20,25,36,40]; // find 36

console.log(binarySear(data,400));


