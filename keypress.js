
var keyPressH1 = document.getElementById("keyPressLetter");


document.addEventListener('keypress', function(e){
	keyPressH1.innerHTML  = e.key;
})