const myObject = {
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',

}

for(const key in myObject){
    console.log(`${key} shortcut key for ${myObject[key]}`)
}


const programming= ["c","c++", "python", "javascript"]

for(const key in programming ){
    console.log(programming[key])
}




const map = new map()

map.set('IN','INDia')
map.set('Fr',"france")
map.set('Py','python')

// for(const key in map){
//     console.log(key);
// } we can use it here for looping in for of type