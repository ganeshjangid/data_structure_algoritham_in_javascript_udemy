/* 
Write function take string and count of them
*/

const countStr=(n)=>{
    if (isNaN(n)) {
        console.log(n.length);
    }else{
        console.log("Input Data is invalid...");   
    }
};

//countStr("ganesh");

const charCount=(str)=>{
    let result={};
    for (let i = 0; i < str.length; i++) {
        var char=str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (result[char] > 0) {
                result[char]++;
            } else {
                result[char] = 1;
            }
        }
    }

    //return result;
    console.log(result);
    
};

charCount("ganesh suthar");

