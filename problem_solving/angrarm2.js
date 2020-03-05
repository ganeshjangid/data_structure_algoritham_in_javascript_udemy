const {
    performance
} = require('perf_hooks');

const matchStr = (string1, string2) => {
    var str1 = string1.toLowerCase().replace(/\s+/, "");
    var str2 = string2.toLowerCase().replace(/\s+/, "");
    let object = {};
    let result = true;

    //both string length is equal
    if (str1.length != str2.length) {
        result = false;
        return false;
    }

    // Step2 
    for (const i of str1) {
        object[i] ? object[i] += 1 : object[i] = 1;
    }
    //console.log(object);

    for (const i of str2) {
        //object[i] ? object[i] += 1 : object[i] = 1;

        if (!object[i]) {
            result = false;
            break; 
        }else{
            object[i] -=1; 
            result = true;
        }
    }   
    
    console.log(result);

} 

var t1 = performance.now();
matchStr("", "");
matchStr("aaz", "zza");
matchStr('anagram', 'nagaram');
matchStr('rat', 'car');
matchStr('rat', 'car');
matchStr('awesome', 'awesom');
matchStr('amanaplanacanalpanama', 'acanalmanplanpamana');
matchStr('qwerty', 'qeywrt');
matchStr('texttw ist time', 'timetwis tte xt');
var t2 = performance.now();
console.log(`Time Elasped: ${t1 - t2 / 1000} seconds`);