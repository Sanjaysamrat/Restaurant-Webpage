function myFormPassCheck() {
  var newpass = document.getElementById("new-pass");
  var confirmpass = document.getElementById("new-passconfirm");
  var oldpass = document.getElementById("old-pass");

  if (oldpass.value != "" && newpass.value != "" && confirmpass.value != "") {
    if (oldpass.value == newpass.value) {
      alert("New Password shouldn't be same as Old Password...!");
    } else if (newpass.value != confirmpass.value) {
      alert("New Password and Confirm Password shold be same...!");
    } else {
      window.location.href = "Login.html";
      alert("Password changed successfully...!");
    }
  } 
  else {
    if ((oldpass.value == "" || oldpass.value == null) && (newpass.value == "" || newpass.value == null) && (confirmpass.value == "" || confirmpass.value == null))
    {
        alert("Please Enter Mandatory Fields...!");
    }
    else if (oldpass.value == "" || oldpass.value == null) {
      alert("Please Enter old password...!");
    } 
    else if (newpass.value == "" || newpass.value == null) {
      alert("Please Enter new password...!");
    } 
    else 
    {
      alert("Please Enter confirm password...!");
    }
  }
}
