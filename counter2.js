var countMe =(function (){

    var counter =0;

    return function(){
        
        counter+=1 ; 
        
        return  counter
    
    }



}) ();

var counter = 20;

function clickedButtonOfClosure(){
    document.getElementById("result").innerHTML = countMe();
}