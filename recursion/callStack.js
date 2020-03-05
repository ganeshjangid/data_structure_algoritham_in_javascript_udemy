function  takeShower(){
    return "Showering";
}

function eatBreakFast() {
    let meal=cook();
    return `Eating ${meal}`;
}

function cook(){
    let items=['egg','banana','almonda','cheess'];
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp(){
    console.log(takeShower());
    console.log(eatBreakFast());

    console.log("Ok get read for work");
    
}

wakeUp();