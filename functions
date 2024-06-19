function sayMyName(){
    console.log("s");
    console.log("H");
    console.log("U");
    console.log("B");
}

sayMyName()

//whenver u set the definition of the function passed is called parameters
// function addTwoNumbers(Num1,Num2){
//     console.log(Num1 + Num2);

// }


function addTwoNumbers(num1,num2){
    let res = num1+num2;
    return res;

    // console.log("Shubham");//it can be print after the return statement 
}

const res = addTwoNumbers(3,4);
console.log("Result", res);
//value that is actually passed is known as arguments
// const res=addTwoNumbers(3,5);

// console.log("Result",res1);



//--------------------new function
function loginUserMessage(username){
//undefined normally takrn as false value in the javascript and  " " it is also
    if(username=== undefined){
        console.log("please enter a username");
        return 

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("shubham ji"))


//if dont pass any argument then it will show undefined 
console.log(loginUserMessage());



///////next -----------------function

//spread or rest

function CalculateCartPrice(...num1){
    return num1;
}

console.log(CalculateCartPrice(200,400,3434,344,344444,34,3,34,434))


////////////////////other usecases
function CalculateCartPrice(val1,val2, ...num1){
    return num1;
}

console.log(CalculateCartPrice(200,400,3434,344,344444,34,3,34,434))


const user = {
    name:"shubham",
    price:344
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.name}  and price is ${anyobject.price}` );
}

console.log(handleObject(user))


//you can also pass the object in this method 

handleObject({
    name:"shuhbam",
    price:343
})



const myNewArray = [200,330,3434,343]

function returnSecondValue(myNewArray){//parameter with any name can be passed okay
    return myNewArray;
}

console.log(returnSecondValue(myNewArray));


console.log(returnSecondValue([333,43,43,455555,55555]));
