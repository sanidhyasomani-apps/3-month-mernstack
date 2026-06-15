function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
let result;
function calculate(oprter){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;

    if(num1==="" || num2===""){
        document.getElementById("result").innerText=
        "please enter both the no";
        return;
    }
    num1=Number(num1);
    num2=Number(num2);

    switch(oprter){
      case "add":
        result=add(num1,num2);
        break;
      case "subtract":
        result=subtract(num1,num2);
        break;
      case "multiply":
        result=multiply(num1,num2);
        break;
      case "divide":
        result=divide(num1,num2);
        break;
        default:
            result="invalide opration";
    }
    document.getElementById("result").innerText=
    `Result:${result}`;

}