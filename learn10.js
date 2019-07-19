let x = function(callback){
    
    console.log("This is X");
    callback();

}

let hi = function(){

    console.log("Welcome to Angular Session" );
}

x(hi);