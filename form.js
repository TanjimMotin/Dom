
//1.get a userName with a number.
//2.get a password with 12345678 .
function user(){
	
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	//var for the username with number.
	var userNameHasNumber = false;
	//checks userName for a number
	for(let i = 0; i<userName.length;i++){
		



		if(!isNaN(userName.charAt(i))){
			userNameHasNumber = true;
		}
	}
	

	//check if the username has a number 
	
	if( userNameHasNumber === true){
		//checking for the password

		if(password=12345678){
			//if information was correct.
			document.getElementById("user").innerHTML = "Welcome " + userName + " Introduce You to the Kingdom of coding";
		}
	}else{
		//any step fails we alert  user  a message of incorrect.
		alert("incorrect")
	}
}