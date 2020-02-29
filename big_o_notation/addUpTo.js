
const chai = require('chai');
const expect = chai.expect;


function addUpTo(n){
    const otherSolution = n * (n + 1) / 2;
    //console.log(otherSolution);
    return otherSolution;    
}


describe('Data Structure', () => {
    describe('Add To Up', () => {
        it('5 should be equals to 15', () => {
            expect(addUpTo(3).to.equal(6));
        });
    });
});