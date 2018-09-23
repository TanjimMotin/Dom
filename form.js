//We have 2 problems to solve.
//1.)get a userName + check for a number.
//2.)get a password + check for it to have 12345678 specifically.
function user(){
	//these are to grab the values in the input fields the user entered.
	var userName = document.getElementById("userName").value;
	var password = document.getElementById("password").value;
	//this var is the verification for the username.
	var userNameHasNumber = false;
	//checks userName for a number
	for(let i = 0; i<userName.length;i++){
		//the if statement goes through the username string and looks for
		//a number in it. When it does flips boolean userNameHasNumber to true
		//since the if statement is just looking to see if each character is a number.
		//we deal with problem 1 here.
		if(!isNaN(userName.charAt(i))){
			userNameHasNumber = true;
		}
	}
	

	//Here, we want to check if the username has a number first before proceeding to check for password.
	//We make sure that without a doubt that userNameHasNumber IS true and no other variable.
	if( userNameHasNumber === true){
		//Now we are checking for the password. Since password is a string a basic equal sign will do a basic parsing of that string and check.
		if(password=12345678){
			//change the H1 tag on the page if information was correct.
			document.getElementById("user").innerHTML = "Welcome " + userName + " have a great stay";
		}
	}else{
		//any step fails we alert  user  a message of incorrect.
		alert("incorrect")
	}
}