//logical flow

// if(condition){
//     //statement
// }


// //comparision operator 
// < , >, <= ,>= ,==, !=, === strict equal

if( 2 === "2"){ //during the typchceck it is used
    console.log("executed");


}
else{
    console.log("not exedcuted");
}


//var is global scope variable

//shorthand notation

const balance = 2000

// if(balance > 500){
//     console.log("test"),
//     cosnole.log("test2");
// } never do this 

const balaance=33;

if(balaance < 500){
    console.log("less than 343");
}else if(balance < 434){
    console.log("less than 343");
}else {
    console.log("less than sabse" );
}

const userLoggedIn = true 
const debitCard = true

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}



//|| or && and sign

const usLoggedIn = false
const creditCard = true

if(usLoggedIn || creditCard){
    console.log("yes it is accepted here")
}


const month = 3 
switch (month){
    case 1:
    console.log("january");
    break;
    case 2:
        console.log("feb");
        break;

        case 3:
        console.log("March");
        break;

        default:
            console.log("April");
}


//false value , 0 ,-0 ,BigInt  0n , undefined ,Nan

//ttreuly value
//"0",'false' , " " ,[], {} ,function (){}


//how to check the array
const userEmail = "shubham@gmail.com"
if(userEmail.length === 0){
    console.log("Array is Empty");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Empty");
}


//Nullish Coalescing OPerator (??) :null undefiend

let val1;
//val = 5 ?? 10

val1 = null ?? 10
val1 = undefined ?? 15

val1 = null ?? 10 ?? 20


console.log(val1);


//terniary operator

//condition ? true :false 

// const IceTeaprice = 100
// IceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");

//looping 


//break and continue



for(let index =0; index <=20; index++){
    if(index ==  5){
        console.log(`Detected 5`)
        break;
    }
    console.log(`value of i is ${index}`);

}

for(let index =0; index <=20; index++){
    if(index ==  5){
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of i is ${index}`);

}

///while and do while loops

// let score = 11

// do{
//     console.log(`Score is ${score}`);
//     score++
// }
// while(score <=10)


// while(i=1){
//     console.log(`Score is ${1}`);
// }


//for of 

[" ", " "," "]

[{},{},{}] //object conatining the array


const arr = [1,2,3,4,5,]
for(const num of arr){
    console.log(num);
}

// const greetings = "hello world"
// for(const greet of greetings){
//     console.log(`Each char is ${great}`)
// }


//Maps

const map = new Map()

map.set('IN',"INdia")
map.set('USA',"UNited States of America")
map.set('Fr',"france")

// console.log(map)

for(const [key,value] of map){
    console.log(key,':-',value);
 } 

 const myNums = [1,2,3,4,5,6,7,8,9,9,10]

 const newNums = myNums.filter((num) =>{
    return num > 4
 }) 