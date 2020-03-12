class Student{
    constructor(fName,lName){
        this.fname=fName;
        this.lname=lName;
    }

    fullName(){
        return `Your FullName is ${this.fname} ${this.lname}`;
    }
    
    static EnrollStd(){
        return `Hello Static Function`
    }

}

const firstStudent=new Student("ganesh","Suthar");
///console.log(firstStudent);
console.log(firstStudent.fullName());


const secondStd=new Student("Nagesh","Kumar");
//console.log(secondStd);
console.log(secondStd.fullName());


console.log(Student.EnrollStd());

