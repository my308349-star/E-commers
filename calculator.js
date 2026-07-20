function add(){
    let a = parseFloat(document.getElementById("num1").value); 
    let b = parseFloat(document.getElementById("num2").value);
    
    let result = a + b ; 

    document.getElementById("result1").innerHTML = "result1111" ;
}
function subtract(){
    let a = parseFloat(document.getElementById("num1").value); 
    let b = parseFloat(document.getElementById("num2").value);
    
    let result = a - b ; 

    document.getElementById("result").innerHTML = result ;
}
function multiply(){
    let a = parseFloat(document.getElementById("num1").value); 
    let b = parseFloat(document.getElementById("num2").value);
    
    let result = a * b ; 

    document.getElementById("result").innerHTML = result ;
}
function divide(){
    let a = parseFloat(document.getElementById("num1").value); 
    let b = parseFloat(document.getElementById("num2").value);
    
    let result = a / b ; 

    document.getElementById("result").innerHTML = result ;
}