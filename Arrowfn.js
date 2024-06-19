const user = {
    username :"Shubham",
    price:9933,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to website`) //this will refer to current context of the class
        console.log(this); //this time this refer current instance of the class
    }
}


user.welcomeMessage()

user.username = "vishal"
user.welcomeMessage()


console.log(this) //this time this refer to the instance of the node class and print {}


function kuchNahi(){
    console.log(this);
    console.log(this.username); //it will print undefined
}

kuchNahi()


///-------------------------------------------

const arrowfunction = () =>{
    let username = "shubham"
    console.log(this);
}

arrowfunction() 

////////pure arrow function


const addtwo = (num1,num2) =>{
  return num1 + num2;

}

console.log(addtwo(3,5))


// const addTwo = (num1,num2) => (num1 + num2) //it can be write in this way also 

const addTwo = (num1,num2) => ({username:"shubham"})

console.log(addTwo(3,4))

