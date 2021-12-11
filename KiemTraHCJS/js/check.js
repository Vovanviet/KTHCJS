var btnSubmit =document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick= function(){
        validateForm();
    }
}
function validateForm(){
    var fullnameInput =document.forms["form"].elements["fullname"];
    var fullname = fullnameInput.value;
    if(fullname.length==0){
        fullnameInput.nextElementSibling.innerHTML="Please Enter Full Name!";
    }else if(fullname.length<7){
        fullnameInput.nextElementSibling.innerHTML="Please Enter password more longger 7 character!";
    }else{
        fullnameInput.nextElementSibling.innerHTML="";
    }
    /* Email */
    var EmailInput =document.forms["form"].elements["email"];
    var Email = EmailInput.value;
    if(Email.length==0){
        EmailInput.nextElementSibling.innerHTML="Please Enter Email!";
    }else if(Email.length<7){
        EmailInput.nextElementSibling.innerHTML="Please Enter password more longger 7 character!";
    }else if(Email.search('@')){
        EmailInput.nextElementSibling.innerHTML="";
    }
      /* Email */
      var phoneInput =document.forms["form"].elements["phone"];
      var phone = EmailInput.value;
      if(phone.length==0){
          phoneInput.nextElementSibling.innerHTML="Please Enter Email!";
      }else if(phone.length<7){
          phoneInput.nextElementSibling.innerHTML="Please Enter password more longger 7 character!";
      }else{
          phoneInput.nextElementSibling.innerHTML="";
      }
    }