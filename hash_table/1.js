/* var word="a".charCodeAt(0)-96;
console.log(word);


var word = "z".charCodeAt(0) - 96;
console.log(word);
 */

/* let total=0;
total +="hello".charCodeAt(0)-96;
console.log(total);
 */

 function hash(key,arrayLen){
     let total=0;
     let weird_prime=31;
    for (let i = 0; i < Math.min(key.length,100); i++) {
        let char=key[i];
         let value=char.charCodeAt(0)-96;
        total = (total * weird_prime+value)%arrayLen; 
     }
     console.log(total);
     
     //return total;
}

hash("pink",13);
hash("hello",13);
hash("goodBye",13);
hash("blue",13);
hash("cyan",13);





