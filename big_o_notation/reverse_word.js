

const reverseWord=(str)=>{

    const reverseWord = str.split("").reverse().join('');
    console.log(reverseWord);
    

    let rev="";
    for (let i = str.length; i >=0; i--) {
        //console.log(str[i]);
        rev +=str[i];
    }
    //console.log(rev);
    return rev;    

};

console.log(reverseWord("Ganesh"));

console.log('-------------------------------------------------------');
console.log('calculate some amount of data');

const addUpTo=(n)=>{

    let total=0;    
    for (let i = 1; i <= n; i++) {
        total +=i;
    }
    console.log(total);

    const otherSolution=n*(n+1)/2;    
    console.log(otherSolution);
    
};

addUpTo(5);


