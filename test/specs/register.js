const RegisterPage = require ('../pageobjects/register.page');

describe('Register form', () => {
    it('should deny access with wrong username', () => {
        RegisterPage.open ();
        RegisterPage.email.setValue('Sophie')
        RegisterPage.password.setValue('So547965ph')
        RegisterPage.submit()
        expect(RegisterPage.alertEmail).toHaveText("Invalid email address")
    })
});