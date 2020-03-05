const selectionSort=(arr)=>{
    
    for (let i = 0; i < arr.length; i++) {
        let lowestVal=i;
        for (let j = i+1; j < arr.length; j++) {
            //console.log(i,j);
            if (arr[j] < arr[lowestVal]) {
                  lowestVal=j;
              } 
        }


        if (i !== lowestVal) {
            console.log(i, lowestVal);

            let temp = arr[i];
            arr[i] = arr[lowestVal];
            arr[lowestVal] = temp;
        }


        console.log(arr);

        
        
        
    }
    
};

var arr=[0,1,34,22,10,19,17];

console.log(selectionSort(arr));

