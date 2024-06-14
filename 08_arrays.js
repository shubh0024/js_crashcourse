const myarr=[8,4,2,2,1,1,34,2,3]; //resizable array and cant be acccessed with arbitrary

console.log(myarr[0]);

//shallow copy:-  A shallow copy of an object is a copy properties share the same refrences (point to the same underlying values) as those of the source objects from which the copy was made
//deep copy:- its acnt share the references point of the same 



myarr.unshift(9); //shift to delete the same 

console.log(myarr.includes(9))
console.log(myarr);


// const newArr= myarr.join()

console.log(myarr);
// console.log(newArr); //changes to string type
//slice ,splice


const myarr2= myarr.slice(1,5);
console.log(myarr2);

const myarr3= myarr.splice(1,5);//its manipulate the data of array
console.log(myarr3);


// const all_new_heroes =[...marvel_heros , ...dc_heros] //direct form a new array


const another_array =[1,2,3,[4,5,6],7,[6,7,[5,4]]]

const real_another_array = another_array.flat(Infinity) //concatenate into sigle
console.log(real_another_array);

console.log(Array.from("Shubham")) //convert into array
console.log(Array.from({name:"shubham"})) //interesting

let score1=200
let score2=389
let score3=322

console.log(Array.of(score1,score2,score3)); //convert into array



