function signup(event)
{
  //alert("ggg");
  event.preventDefault();
	var firstName = $("#fname").val();
	var lastName = $("#lname").val();
	var eMail = $('#email').val();
	var password = $('#pass').val();
	var cpassword = $('#cpass').val();

	var SERVER_URL = "/signup/";

	if(validateSignUp())
	{
		var url = SERVER_URL + firstName + '/' + lastName + '/' + eMail + '/' + password + '/' + cpassword;
		$.ajax({
			method: "GET",
			
			url: url
			//dataType: "j"
		})
		.done(function(jqXHR,textStatus){
			if(jqXHR.responseMessage == "SUCCESS" ) 
      {
				alert("Successfully registered");
			}
		}).fail(function(jqXHR,textStatus)
      {
		    alert("Request failed");
	 });
	}
	else {
		console.log('Failed');
	}

}

function validateSignUp() {
  var firstName = $('#fname').val();
  var lastName = $('#lname').val();
  var eMail = $('#email').val();
  var passWord = $('#pass').val();
  var confirmPassWord = $('#cpass').val();
  if(!firstName) {
    $("#fname").css({"background-color": "#E3582B"});
    $("input#fname").after('First name field is empty');
    //firstName.focus();
    return false;
  }
  if(!lastName) {
    $("#lname").css({"background-color": "#E3582B"});
    $("input#lname").after('Last name field is empty');
    ///lastName.focus();
    return false;
  }
  if(!eMail) {
    $("#email").css({"background-color": "#E3582B"});
    $("input#email").after('Email not provided');
    //eMail.focus();
    return false;
  }
  if(!passWord) {
    $("#pass").css({"background-color": "#E3582B"});
    $("input#pass").after('Password field is empty');
    //passWord.focus();
    return false;
  }
  if(!confirmPassWord) {
    $("#cpass").css({"background-color": "#E3582B"});
    $("input#cpass").after('Confirm Password field is empty');
    //confirmPassWord.focus();
    return false;
  }
  if(!CheckPassword_Strength(passWord)){
    return false;
  }

  return true;
}

function CheckPassword_Strength(passWord)
{
  var passWord = $('#pass').val();
  var confirmPassWord = $('#cpass').val();
  if(passWord.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && passWord.length >= 8 )
  {
    return Checkpassword_confirm(confirmPassWord);
  } 
  else 
  {
    alert("Your password is not strong,(Should have MixedChars and 8 letters)");
    return false;
  }
      return true;
}

function Checkpassword_confirm(confirmPassWord)
  {
    var passWord = $('#pass').val();
    var confirmPassWord = $('#cpass').val();
    if(passWord == confirmPassWord)
    {
      console.log("Matched Password");
    }
    else
    {
      alert("Password Doesn't match");
      return false;
    }
      return true;
  }	
function Login(event)
{
  event.preventDefault();
    //alert("ckie");
  var firstName = $('#user').val();
  var password = $('#pass').val();
  var SERVER_URL = "/login/";
  if(validateLogin())
  {
      var url = SERVER_URL + firstName + '/' + password;
      $.ajax({
        method: "GET",
      
        url: url
      //dataType: "j"
      })
      .done(function(jqXHR,textStatus){
        console.log(jqXHR);
        if(jqXHR.responseMessage == "SUCCESS" ) {
          alert("Successfully registered");
          //window.location.href = "/nikil project/movies.html";
        }
      })
      .fail(function(jqXHR,textStatus){
        alert("Request failed");
      });
      window.location.href = "/nikil project/movies.html";
  }
  else {
    console.log('Failed');
  }
}
function validateLogin()
{
  // var username = $('#user').val();
  // var
  if(!($('#user').val()))
  {
    $("#user").css({"background-color": "#E3582B"});
    $("input#user").after('Username not provided');
    return false;
  }
  if(!($('#pass').val()))
  {
    $("#pass").css({"background-color": "#E3582B"});
    $("input#pass").after('Password field empty');
    return false;
  }
  return true; 
}