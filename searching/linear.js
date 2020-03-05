const findData=(arr,num)=>{

    let result=-1;
    for (const key in arr) {
        //console.log(key);
        if (arr[key] === num) {
            result=key;
            break;
        }
    }
    //return result;
    console.log(result);
    
};

let arr=[1,2,3,5,4,68,25,68,25,66];
findData(arr,68544);
