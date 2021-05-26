function disp(val)
{
 	document.getElementById("textfield").value+=val
 }
function print()
{
	 let x = document.getElementById("textfield").value
	 let y = eval(x)
	 document.getElementById("textfield").value = y
}
function clr()
{
 	document.getElementById("textfield").value = ""
}