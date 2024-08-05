//Function for showing password
function showPassword() {
  var passwordInput = document.getElementById("login-password");

  if (passwordInput.type == "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function myFormSubmit() {
  var inputUsername = document.getElementById("login-username");
  var inputPassword = document.getElementById("login-password");

  if (
    (inputUsername.value == "" || inputUsername == null) &&
    (inputPassword.value == "" || inputPassword == null)
  ) {
    alert("Please Enter Username and Password...!");
  } else if (inputUsername.value == "" || inputUsername == null) {
    alert("Please Enter the Username...!");
  } else if (inputPassword.value == "" || inputPassword == null) {
    alert("Please Enter the Password...!");
  } else {
     //Navigate to homepage
     window.location.href="/index.html";
     //window.location.replace("/index.html");
    alert("Login Successfull...!");
  }
}
