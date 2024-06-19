var c= 30

let a = 300

if(true){
    let a = 10
    const b = 20
    var c= 33 //variable is printed if out of the scope variable used 

console.log("INNER:",a);

}

console.log(a);

console.log("c",c); //it will print the 33


//new scope variable

//nested scope

function one(){

    const username = "Shubham"

    function two(){
        const website="youtube"
        console.log(username);
    }

    // console.log(website);//it will never used here after the scope


    two()


}

one()


//------------------------------

if(true){
    const username= "shubham"
    if(username === "shubham"){
        const website = "youtube"
        console.log(username+website);
    }

    // console.log(website);

}

// console.log(username); //it cant be accessed bcoz it is out of the scope



////////////////////important=================


console.log(addOne(4))
function addOne(num){
    return num + 1
}

addOne(5) //it can be access and print before the initializatoin

//it is the known as hosting or experession function
const addTwoo = function(num){
    return num + 2
}

console.log(addTwoo(4))




