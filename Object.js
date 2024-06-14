//singleton

//objects literals 

// Objects.create

const JsUser={
    name:"Shubham", //here name yaha string ki trah haai
    "full name":"Shubham kumar",
    // [mySym]:"mykey1",
  age:18,
  location:"jaipur",
  email:"shubham0024@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday", "saturaday"]
}

console.log(JsUser.name); ///maximum time dot is used to access the keys
console.log(JsUser["email"]);
console.log(JsUser["full name"]); //key set kar sakte hia acces ke liye 

JsUser.email= "shubham234@gmail.com";
Object.freeze(JsUser) //it will freeze the object
console.log(JsUser);



JsUser.greeting = function(){
  console.log("kya bat hai Js user");

}

JsUser.greetingtwo = function(){
  console.log(`hello js user,${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingtwo());

const obj1={1:"a",2:"b"};
const obj2={2:"a",3:"b"};
const obj3={1:"a",2:"b"};


const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

const obj5={...obj1,...obj2,...obj3} //using the spreading methoda like array


console.log(JsUser)

console.log(Object.keys(JsUser)); //only access the value of the keys 
console.log(Object.values(JsUser)); //only access the value of the keys given
console.log(Object.entries(JsUser));  // shows in both keys and values


console.log(JsUser.hasOwnProperty('isLoggedIn'));

const users=[
  {
    id:1,
    email:"h@gmail.com"
  },
  {
     id:2,
    email:"h@gmail.com"
  },
  {
    id:3,
   email:"h@gmail.com"
 },
 {
  id:4,
 email:"h@gmail.com"
},
{
  id:5,
 email:"h@gmail.com"
}

]


console.log(users[1].email);


//destructing and structuring 

const course = {
  coursername:"js in hindi",
  price:"999",
  courseInstructor:"Shubham ji"
}

// course.courseInstructor

const {courseInstructor:inst}= course
//instead of courseInstructor we can use inst also
// console.log(courseInstructor);
console.log(inst);


// const navbar =({company})=>{
//destructuring the objects
// }


// {
//   //json format
//   name:"shubham"
//   coursename : "hindi"
//  price: "free"
// }


[
  {},{},{}
]

