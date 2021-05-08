//Form
var formLogin = document.getElementById ('formLogin');
var inputs = document.getElementsByClassName('input');
var fields = {
    email:false,
    password: false,
}
//Email
document.getElementById('email').addEventListener('blur', emailValidation);
function emailValidation(){
    var eMail = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9._+-]+\.[a-zA-Z]+$/
    var email = document.querySelector('#email');
    var emailValue = document.querySelector('#email').value;
    var emailAlert = document.getElementById('emailErrorAlert');
    if(emailValue.match(eMail)) {
        email.style.border = '3px solid green';
        emailAlert.style.display = 'none';
        fields['email'] = true;
    }else{
        email.style.border = '3px solid red';
        emailAlert.style.display = 'block';
        fields['email'] = false;
    }
}
document.getElementById('email').addEventListener('focus', clearEmail);
function clearEmail () {
    var emailFocus = document.getElementById('email');
    var emailAlertFocus = document.getElementById('emailErrorAlert');
    emailFocus.value= '';
    emailAlertFocus.style.display= 'none';
}
//password
document.getElementById('password').addEventListener('blur', passwordValidation);
function passwordValidation(){
    var passWord = /(^[a-zA-Z0-9]{8,})$/
    var password = document.querySelector('#password');
    var passwordValue = document.querySelector('#password').value;
    var passwordAlert = document.getElementById('passErrorAlert');
    if(passwordValue.match(passWord)) {
        password.style.border = '3px solid green';
        passwordAlert.style.display = 'none';
        fields['password'] = true;
    }else{
        password.style.border = '3px solid red';
        passwordAlert.style.display = 'block';
        fields['password'] = false;
    }
}
document.getElementById('password').addEventListener('focus', clearPassword);
function clearPassword () {
    var passwordFocus = document.getElementById('password');
    var passwordAlertFocus = document.getElementById('passErrorAlert');
    passwordFocus.value= '';
    passwordAlertFocus.style.display= 'none';
}
formLogin.addEventListener('submit', function(e) {
    e.preventDefault ();
var button = document.getElementById('loginBtn');
button.addEventListener('click', validations);
var validations = document.getElementById('validationFuntionsLogin');
if (fields['email'] && fields ['password']) {
    validations.style.display = 'flex';
    validations.innerHTML = 'Your login data is:' + " " + email.value + " " + password.value;
    sendLoginForm();
} else {
    validations.style.display = 'flex';
    validations.innerHTML = 'Email or Password values are wrong. Please try again'
    }
});
function sendLoginForm(){
    fetch('http://localhost:4000/login',{
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            email:email.value,
            password: password.value,
        })
    })
    .then (response => response.json())
    .then (data => console.log(data))
    .catch(function(error){
        console.log('Error trying to send the data')
    })
}