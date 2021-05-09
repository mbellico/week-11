const RegisterPage = require ('../pageobjects/register.page');

describe('Register Form buttons', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('should verify that the all the buttons in the form are enabled', () => {
        expect(RegisterPage.btnSignIn).toExist;
        expect(RegisterPage.btnSignIn).toBeClickable;
        expect(RegisterPage.btnReset).toExist;
        expect(RegisterPage.btnReset).toBeClickable;
        expect(RegisterPage.btnToLogin).toExist;
        expect(RegisterPage.btnToLogin).toBeClickable;
        browser.pause(3000)
    })
});
describe('Register Form Title', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('Verify page Title', () => {
        expect(browser).toHaveTitle('Register');
        browser.pause(3000)
    })
});
describe('Register credentials verification', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('should deny access when providing a wrong full name imput', () => {
        RegisterPage.fullName.setValue('Nicholas')
        browser.keys ('Tab')
        expect(RegisterPage.alertFullName).toHaveText('Your full name should only contain letters and a space between them.')
        browser.pause(3000)
    })
    it('should deny access when providing a wrong email', () => {
        RegisterPage.fullName.setValue('Nicholas Williams')
        RegisterPage.email.setValue('Nicholas')
        browser.keys ('Tab')
        expect(RegisterPage.alertFullName).not.toHaveText('Your full name should only contain letters and a space between them.')
        expect(RegisterPage.alertEmail).toHaveText('Please, provide a valid email address.')
        browser.pause(3000)
    })
    it('should deny access when providing a wrong password', () => {
        RegisterPage.fullName.setValue('Nicholas Williams')
        RegisterPage.email.setValue('nicholas_williams@hotmail.com')
        RegisterPage.password.setValue('1234')
        browser.keys ('Tab')
        expect(RegisterPage.alertPassword).toHaveText('Must contain at leats 8 characters, both numbers and letters.')
        browser.pause(3000)
    })
    it('should deny access when not providing the same password twice', () => {
        RegisterPage.fullName.setValue('Nicholas Williams')
        RegisterPage.email.setValue('nicholas_williams@hotmail.com')
        RegisterPage.password.setValue('Nich123456')
        RegisterPage.repeatPassword.setValue('Nich1234')
        browser.keys ('Tab')
        expect(RegisterPage.alertRepeatPassword).toHaveText('Must provide the same password as the one entered above.')
        browser.pause(3000)
    })
    it('should deny access when leaving every gap empty', () => {
        RegisterPage.fullName.setValue('')
        RegisterPage.email.setValue('')
        RegisterPage.password.setValue('')
        RegisterPage.repeatPassword.setValue('')
        RegisterPage.btnSignIn.click ()
        expect(RegisterPage.alertEmailRequired).toBeDisplayed
        browser.pause(3000)
    })
    it('should allow access when providing correct inputs', () => {
        RegisterPage.fullName.setValue('Nicholas Williams')
        RegisterPage.email.setValue('nicholas_williams@hotmail.com')
        RegisterPage.password.setValue('Nich123456')
        RegisterPage.repeatPassword.setValue('Nich123456')
        RegisterPage.submit()
        expect(RegisterPage.alertResult).toHaveText('Registration process successful. Your users data is: Nicholas Williams nicholas_williams@hotmail.com Nich123456')
        browser.pause(3000)
    })
    it('should not allow access when filling every blank with correct data but providing a wrong Full Name format', () => {
        RegisterPage.fullName.setValue('Nicholas')
        RegisterPage.email.setValue('nicholas_williams@hotmail.com')
        RegisterPage.password.setValue('Nich123456')
        RegisterPage.repeatPassword.setValue('Nich123456')
        RegisterPage.submit()
        expect(RegisterPage.alertResult).toHaveText('Registration process failed. Please check your data and try again')
        browser.pause(3000)
    })
});
describe('Reseting all values', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('should reset every imputs provided', () => {
        RegisterPage.fullName.setValue('Nicholas Williams')
        RegisterPage.email.setValue('nicholas_williams@hotmail.com')
        RegisterPage.password.setValue('Nich123456')
        RegisterPage.repeatPassword.setValue('Nich123456')
        RegisterPage.btnReset.click ()
        expect(browser).toBeCleared
        browser.pause(3000)
    })
});
describe('Redirecting user to Login page', () => {
    beforeAll('Open browser', () =>{
		RegisterPage.open();
    })
    it('user should be redirected to the login form when required', () => {
        RegisterPage.btnToLogin.click ()
        browser.switchWindow('http://localhost:4000/login.html')
        expect(browser).toHaveUrl('http://localhost:4000/login.html')
        browser.pause(3000)
    })
});