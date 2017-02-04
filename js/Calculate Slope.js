
function slope(){

var A=document.getElementById("value1").value;
var B=document.getElementById("value2").value;
var C=document.getElementById("value3").value;
var D=document.getElementById("value4").value;





var result=(parseInt(D)-parseInt(C))/(parseInt(B)-parseInt(A));
value5.value=result;
event.preventDefault();



}