var email = document.forms["myform"]["email"];
var password = document.forms["myform"]["password"];
var namee = document.forms["myform"]["name"];
var phone = document.forms["myform"]["phone"];

var passErr = document.getElementById("pass-err");
var userErr = document.getElementById("user-err");
var nameErr = document.getElementById("name-err");
var phoneErr = document.getElementById("phone-err");

namee.addEventListener("textInput", name_done);
password.addEventListener("textInput", pass_done);
email.addEventListener("textInput", email_done);
phone.addEventListener("textInput", phone_done);

function validated() {
  if (namee.value.length < 4) {
    nameErr.style.display = "block";
    namee.style.border = "2px solid red";
    namee.focus();
    return false;
  }
  if (password.value.length < 6) {
    passErr.style.display = "block";
    password.style.border = "2px solid red";
    password.focus();
    return false;
  }
  if (email.value.length < 9) {
    userErr.style.display = "block";
    email.style.border = "2px solid red";
    email.focus();
    return false;
  }
  if (phone.value.length < 7) {
    phoneErr.style.display = "block";
    phone.style.border = "2px solid red";
    phone.focus();
    return false;
  }
}
function name_done() {
  if (namee.value.length >= 5) {
    nameErr.style.display = "none";
    namee.style.border = "2px solid green";
    return true;
  }
}
function pass_done() {
  if (password.value.length >= 5) {
    passErr.style.display = "none";
    password.style.border = "2px solid green";
    return true;
  }
}
function email_done() {
  if (email.value.length >= 8) {
    userErr.style.display = "none";
    email.style.border = "2px solid green";
    return true;
  }
}

function phone_done() {
  if (namee.value.length >= 5) {
    phoneErr.style.display = "none";
    phone.style.border = "2px solid green";
    return true;
  }
}

