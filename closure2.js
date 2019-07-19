var addValue =function(outer){

    var addValueInner = function (inner){
        return outer+inner;
    }

    return addValueInner;
}

var instance1 = new addValue(3);

console.log(instance1(4));