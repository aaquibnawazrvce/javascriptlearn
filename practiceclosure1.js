var countNoOfTimes = (function(){

    var total = 0;

    return function(){

        total +=1;
        return total;
    }
   

}) ();

