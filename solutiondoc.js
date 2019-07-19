function clickedMe(){

    document.getElementById("instructions").style.color = "red";
}

function ins1Clicked(){

    document.getElementsByClassName("instructions1").color ="purple";
}

function ins2Click(){

    var collection = document.getElementsByTagName("li");

    for(i=0; i<collection.length;i++){

        collection[i].style.color = "red";
        collection[i].style.background = "yellow";
        collection[i].style.fontStyle ="italic";

    }
}

function insclick3(){

    var email = document.getElementById("exampleInputEmail1").value;
    if(email){
      document.getElementsByClassName("instructions4")[0].innerHTML= "<h1>" + email +"</h1>" ;
    }
}

function insclick4(){

    document.querySelector('input[id="exampleInputEmail1"]').value ="hello@gmail.com";

}

function insclick5(){

    var odd = document.querySelectorAll("li:nth-child(odd)");

    for(var oddObj of odd){

        oddObj.style.background ="pink";
    }

}


function insclick6(){

    disableInsClick1Btn();

}

 disableInsClick1Btn = () =>  document.getElementById("clickMe").setAttribute("disabled",true)



