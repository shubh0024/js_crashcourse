let myDate = new Date()// date is object in js

console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate= new Date(2023,0,23)
console.log(myCreatedDate.toISOString());

let mytimeStamp= Date.now()

console.log(mytimeStamp);

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));