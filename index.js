var buttonOneMessage = document.getElementById("buttonOneMessage");
var buttonTwoMessage = document.getElementById("buttonTwoMessage");

//both font sizes are 0. So to turn up the font size
//and to give personality each button text has a color.


//Magenta button. 
function buttonOneChanger(){
	buttonTwoMessage.style.fontSize = 0;	
	buttonOneMessage.style.fontSize = "3em";
	buttonOneMessage.style.color = "pink"
}
//Pink button.
function buttonTwoChanger(){
	buttonOneMessage.style.fontSize = 0;
	buttonTwoMessage.style.fontSize = "3em";
	buttonTwoMessage.style.color = "pink"
}