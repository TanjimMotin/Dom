
var keyPressH1 = document.getElementById("keyPressLetter");

/*document.body.onkeypress   = function(){
	keyPressH1.innerHTML  += event.key;
}*/
document.addEventListener('keypress', function(e){
	keyPressH1.innerHTML  = e.key;
})