var keyPressH1 = document.getElementById("keyPressShown");


document.body.onkeypress = function(){
	keyPressH1.innerHTML = event.key;
}