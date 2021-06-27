let username=document.getElementById("username");
    let email=document.getElementById("email");
    let pwd=document.getElementById("pwd");
    let pwd2=document.getElementById("pwd2");
    let exampleCheck1=document.getElementById("exampleCheck1");
    
    let error1=document.getElementById("error1");
    let error2=document.getElementById("error2");
    let error3=document.getElementById("error3");
    let error4=document.getElementById("error4");
    let error6=document.getElementById("check");
    let flag=0;

    let regexpname= /^([A-Za-z0-9\._]+)$/;
    
  
    let regexpemail= /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexppwd= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    // + one or more
    
    let regexpStrong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{12,}$/;
    let regexpMedium = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
    let regexpEnough = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


    function usernameValidation()
    {
      
      if(regexpname.test(username.value) )
      {
        error1.innerHTML="Valid username.";
        error1.style.color="green";
        return mailValidation();
        
      }
     else{
    
        error1.innerHTML="Username can include A-Z , a-z , 0-9 , _ , and . only.";
        error1.style.color="red";
        return false;
    
         } 
      
    }
  
    function mailValidation()
    {
      
      if(regexpemail.test(email.value) )
      {
        error3.innerHTML="Valid Email address.";
        error3.style.color="green";
        return passwordValidation();
        
      }
     else{
    
        error3.innerHTML="Invalid Email address.";
        error3.style.color="red";
        return false;
    
         } 
      
    }
    function passwordValidation()
    {
    
      if(regexppwd.test(pwd.value))
      {
        error4.innerHTML="Password format is accepted.";
        error4.style.color="green";
        return password2Validation();
      }
     else{
    
        error4.innerHTML="Password format accepted: Minimum 8 characters, at least one uppercase and one lower case, at least one special character, must contain at least one number.";
        error4.style.color="red";
        return false;
    
         } 
      
    }
    function password2Validation(){
      if (regexpStrong.test(pwd.value)) 
          {
            error4.innerHTML="Strong password!";
            error4.style.color="green";
            return password3Validation();
            
          }

        else if (regexpMedium.test(pwd.value)) 
          {
            error4.innerHTML="Medium strength password!";
            error4.style.color="orange";
            return password3Validation();
            
            
          }
        else
          {
            error4.innerHTML="Weak password!";
            error4.style.color="red";
            return password3Validation();
            
            
          }
   }
 

    function password3Validation(){
      if(pwd2.value==pwd.value )
      {
        error5.innerHTML="Password confirmed.";
        error5.style.color="green";
        return checkBox();
      }
     else{
        error5.innerHTML="Invalid confirmation, please enter the password entered above.";
        error5.style.color="red";
        return false;
    
         } 
      
    } 

  function checkBox()
  {
    
    if(exampleCheck1.checked == 1)
    {
      return true;
      
    }
   else{
  
      error6.innerHTML="Accept the terms of services.";
      error6.style.color="red";
      
      return false;
  
       }
    
  }
 