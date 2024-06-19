const coding = ["js","ruby","java","python","cpp"]

//due to callback function name no need too declared
coding.forEach(function (item) {
console.log(item);
})


coding.forEach((item)=>{
console.log(item);
})


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



coding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})

//accessing the object 
const mycoding = [
    {
        languagename:"java",
        languageFilename:"java"
    },
    {
        languagename:"python",
        languageFilename:"py"
    },
    {
        languagename:"javascript",
        languageFilename:"js"
    }
]


mycoding.forEach((item)=>{
    console.log(item.languagename);
    console.log(item.languageFilename);
})

