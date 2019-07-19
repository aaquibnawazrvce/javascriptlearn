let  definePromise = new Promise((resolve,reject)=>{

    let  test ="AAQUIB";

    if(test == "AAQUIB"){
        resolve("This is resolved");
    }else{
        reject("This is Rejected");
    }


});

definePromise.then(

(message) => console.log("resolved"+message)

).catch(
    (message) => console.log("Rejected")
);

