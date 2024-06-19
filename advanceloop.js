const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) =>{
    console.log(item);
})

console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,9,10]

// const newNums = myNums.filter((num) =>{ //if we use scope thenwe have to use return keywords 
//    return num > 4
// }) 

const newNums =[]
myNums.forEach((num)=>{
 if(num>4){
    newNums.push(num)
 }
})

console.log(newNums);

//objects operations
const books =[
    {
        title:"Book 8" , genre:"Non-fiction" ,publish:"1294",edition:"1989"
    },
    {
        title:"Book 2" , genre:"History" ,publish:"17894",edition:"1999"  
    },
    {
         title:"Book 3" , genre:"History" ,publish:"1994",edition:"1989"
    }
]

let userBooks = books.filter((bk)=> bk.genre === 'History')

userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(userBooks);



//--------------------------------

const myNum = [1,3,4,5,6,7,78,99]

// const NewNum = myNum.map((num)=>{
//     return num + 10
// })

// console.log(NewNum);



//------------chaining

const NewNums = myNum
                         .map((num)=> num * 10)
                         .map((num) => num + 1)
                         .filter((num)=> num >=13)

console.log(NewNums);




//accumulator sum or prefix sum use for cart add price

const myNu = [1,2,3]

// const myTotal = myNu.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
// },0)

//initially acc contains 0

const myTotal = myNu.reduce((acc,curr)=> acc + curr,0)
console.log(myTotal);


const shoppingCart = [
    {
        itmename:"Java",
        price:2332
    },
    {
        itmename:"dsa",
        price:344
    },
    {
        itmename:"dsa",
        price:344
    },
    {
        itmename:"dsa",
        price:344
    },
    {
        itmename:"dsa",
        price:344
    },
    {
        itmename:"dsa",
        price:344
    },
    {
        itmename:"dsa",
        price:344
    },

]

const priceTopay=shoppingCart.reduce((acc,item)=> acc + item.price,0)

console.log(priceTopay);