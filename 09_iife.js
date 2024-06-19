//Immediately Incvoked Function Expression(IIFE)


(function hello(){
    //name iife
    console.log(`DB COONECTED`);
})(); 

((name)=>{
    //unnamed iife
    console.log(`DB CONNEcted two ${name}`)
})('hitesh')//due to ehancement of the gobal scope prevention from it we Iife 


