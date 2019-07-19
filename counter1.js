var counter =0;

var countMe = function(){

    counter +=1;

    return counter;

}

counter=10;

function clickedButtonOfClosure(){

    document.getElementById('result').innerHTML = countMe();
}
