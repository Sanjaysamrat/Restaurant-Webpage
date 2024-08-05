function myFormRegister()
{
    var fname=document.getElementById("firstname");
    var lname=document.getElementById("lastname");
    var email=document.getElementById("email");
    var mob=document.getElementById("mobnum");

    if(fname.value !="" && lname.value !="" && email.value !="" && mob.value != "")
    {
        window.location.href="Login.html";
        alert("Registered Successfully...! Username and Password sent to your mail.");
    }
    else
    {
        if((fname.value=="" || fname.value==null) && (lname.value=="" || lname.value==null) && (email.value=="" || email.value==null) && (mob.value=="" || mob.value==null))
        {
            alert("Please Enter Mandatory Fields...!");
        }
        else if(fname.value=="" || fname.value==null)
        {
            alert("Please enter firstname");
        }
        else if(lname.value=="" || lname.value==null)
        {
            alert("Please enter lastname");
        }
        else if(email.value=="" || email.value==null)
        {
            alert("Please enter email");
        }
        else{
            alert("Please enter mobile number");
        }
    }
    
}