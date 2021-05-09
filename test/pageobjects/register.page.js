const page = require ('../pageobjects/page')
class RegisterPage extends page {


    //Register credentials selectors
    get fullName () {return $('#fullName')}
    get email () { return $('#email') }
    get password () { return $('#password') }
    get repeatPassword () { return $('#repeatPassword') }

    //buttons selectors
    get btnSignIn () { return $('#signIn') }
    get btnReset () { return $('#reset') }
    get btnToLogin () { return $('.toLogin') }

    //alerts selectors
    get alertFullName () {return $('#nameErrorAlert')}
    get alertEmailRequired () {return $('[required]')}
    get alertEmail () {return $('#emailErrorAlert')}
    get alertPassword () {return $('#passErrorAlert')}
    get alertRepeatPassword () {return $('#rPassErrorAlert')}
    get alertResult () {return $ ('#validationFuntions')}

    open () {
        return super.open('register');
    }
    submit () {
        this.btnSignIn.click()
    }
}

module.exports = new RegisterPage();
