const score= 400
console.log(score)

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1)); //use to represent the number in the form of the decimal places right 10 to 0 like 100.0


const otherNumber = 123.8966 //agar 3 value pe lagayge to wo round off kar dega
console.log(otherNumber.toPrecision(4));  

const hundreds = 10000000

console.log(hundreds.toLocaleString('en-IN'));//using the usa number sysetm convert it 100,000,00

//=============================================+++++++++++++++++++++++++++++++++++++++

console.log(Math.PI);
console.log(Math.abs(4));

console.log(Math.round(4.6));

console.log(Math.random()); //lies between 0 and 1


console.log(Math.floor(Math.random()*10)+1);

const min= 10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min)); //hmesa 10 se upar hi dega vbv