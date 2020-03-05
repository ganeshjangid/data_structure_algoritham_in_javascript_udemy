const {
    performance
} = require('perf_hooks');

const matchStr=(string1,string2)=>{
    var str1 = string1.toLowerCase().replace(/\s+/, "");
    var str2 = string2.toLowerCase().replace(/\s+/, "");
    let objStr1={};
    let objStr2={};
    let result=true;
    //both string length is equal
    if (str1.length != str2.length) {
        result=false;
        return false;
    }
    //console.log(str1);
    
    // Step2 
    for (const i of str1) {
        if (objStr1[i] > 0) {
            objStr1[i]++; 
        }else{
            objStr1[i]=1;
        }
    }
    //Step3 
    for (const i of str2) {
        if (objStr2[i] > 0) {
            objStr2[i]++;
        } else {
            objStr2[i] = 1;
        }
    }

    //Step4 
    for (const key in objStr1) {
        if (objStr1[key] !== objStr2[key] ) {
          result=false;
          break;
        }else{
            result = true;
        }    
    }
    console.log(result);
};


var t1 = performance.now();
matchStr("","");
matchStr("aaz","zza");
matchStr('anagram', 'nagaram');
matchStr('rat', 'car');
matchStr('rat', 'car');
matchStr('awesome', 'awesom');
matchStr('amanaplanacanalpanama', 'acanalmanplanpamana');
matchStr('qwerty', 'qeywrt');
matchStr('texttw ist time', 'timetwis tte xt');
var t2 = performance.now();
console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`);