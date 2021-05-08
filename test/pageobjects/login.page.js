const page = require ('../pageobjects/page');

class LoginPage extends page {

    //login credentials selectors
    get email () { return $('#email') }
    get password () { return $('#password') }

    //buttons selectors
    get btnSubmit () { return $('#loginBtn') }
    get btnNewUser () { return $('.submit Register') }

    //alerts selectors
    get alertEmail () {return $('#emailErrorAlert')}
    get alertPassword () {return $('#passErrorAlert')}
    get alertResult () {return $ ('#validationFuntionsLogin')}

    //login path
    open () {
        return super.open('login');
    }
    submit () {
        this.btnSubmit.click()
    }
}

module.exports = new LoginPage();
