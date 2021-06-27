function Validation()
{
let username=document.getElementById("username");
let error1=document.getElementById("error1");
return usernameValidation(username,error1);
  
  
}

function usernameValidation(username,error1)
{
  let pwd=document.getElementById("pwd");
  let error2=document.getElementById("error2");

  if(username.value=="admin" )
  {
    error1.innerHTML="Valid username.";
    error1.style.color="green";
    return pwdValidation(pwd,error2);
    
  }
 else{

    error1.innerHTML="Invalid username. Hint: Username is admin";
    error1.style.color="red";
    return false;

     } 
  
}

function pwdValidation(pwd,error2)
{
  
  if( pwd.value=="admin123")
  {
    error2.innerHTML="Correct password.";
    error2.style.color="green";
    return login();
    
  }
 else{

    error2.innerHTML="Incorrect password. Hint: Password is admin123";
    error2.style.color="red";
    return loginFail();

     } 

function login() {
      alert("Log In successful!");
    }
  
function loginFail() {
     alert("Log In failed. Try again.");
    }
  
}