function Payment(paymentId, paymentDesc){

    this.paymentId = paymentId;
    this.paymentDesc = paymentDesc;

    this.printDetails  = function (){

        console.log("Payment Id = "+ this.paymentId + "paymentDesc"+this.paymentDesc);
    }


}

var pay1 = new Payment("10321","This is Test Description");

pay1.printDetails();