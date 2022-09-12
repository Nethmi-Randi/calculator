// display value on the screen 
function dis(val) 
{ 
    document.getElementById("display").value+=val 
} 
  
//do the calculation 
function sl() 
{ 
    let a = document.getElementById("display").value 
    let b = eval(a) 
    document.getElementById("display").value = b 
} 
  
//clear the screen 
function clr() 
{ 
    document.getElementById("display").value = "" 
} 