//your JS code here. If required.
function getDOMLevel(){
	let element =document.getElementById("level");
	let level=0;
	while(element)
		{
			level++;
			element=element.parentElement;
		}
	alert("the level of the element is: n")
}
getDOMLevel()