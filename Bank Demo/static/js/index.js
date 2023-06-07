var uservalue;
var balanceValue =50000;
var amount;
// console.log("erre")
uservalue=Number(prompt("please enter your option(1- withdrow 2- deposite 3- transfer)"))


switch (uservalue){
    case 1:
    amount=Number( prompt("enter amount"));

    if   (amount >=0 )
    {
    alert("it is not correct")
    }
     else  if(balanceValue >= amount)
     
    {
        (balanceValue -= amount)
        alert("your transiction accepted "+ amount + "Your new balnce" + balanceValue)
    }
   else
    {
        alert("error")
    }
    break;
    case 2 :
        alert("welcome in 2 condition")
        amount = Number(prompt("enter deposite amount : "))
        balanceValue +=amount;
        alert(`transaction accepted your new balance is ${balanceValue}`);
        break;
    default:
        alert("wrong input plase enter 1 or 2");
        break
    }


