function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    if (!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (password == "") {
      alert("Password field must be filled out");
      return false;
    }
    if(password.length < 6){
        alert("valid password needed");
        return false;
    }
    return true;
  }