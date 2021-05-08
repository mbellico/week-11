const page = require ('../pageobjects/page')
class RegisterPage extends page {

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnSubmit () { return $('button[type="submit"]') }

    open () {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
