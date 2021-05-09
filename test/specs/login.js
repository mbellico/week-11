const LoginPage = require ('../pageobjects/login.page');

describe('Login Form buttons', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('should verify that the all the buttons in the form are enabled', () => {
        expect(LoginPage.btnSubmit).toExist;
        expect(LoginPage.btnSubmit).toBeClickable;
        expect(LoginPage.btnNewUser).toExist;
        expect(LoginPage.btnNewUser).toBeClickable;
        browser.pause(3000)
    })
});
describe('Login Form Title', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('Verify page Title', () => {
        expect(browser).toHaveTitle('Login');
        browser.pause(3000)
    })
});
describe('Fields on focus', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('password field should turn on focus', () => {
        LoginPage.email.setValue('sophie_m@gmail.com')
        browser.keys ('Enter')
        expect(LoginPage.password).toBeFocus
        browser.pause(3000)
    })
});
describe('Login credentials verification', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('should turn the focus back to email when the field is left empty', () => {
        LoginPage.email.setValue('')
        browser.keys ('Enter')
        expect(LoginPage.password).toBeFocus
        expect(LoginPage.alertEmailRequired).toBeDisplayed
        browser.pause(3000)
    })
    it('should deny access when providing both a wrong username and a wrong passcode', () => {
        LoginPage.email.setValue('Sophie')
        LoginPage.password.setValue('1234')
        LoginPage.submit()
        expect(LoginPage.alertEmail).toHaveText('Invalid email address.')
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(3000)
        LoginPage.email.click ()
        LoginPage.password.click ()
        browser.pause(3000)
        expect(LoginPage.email).toHaveText('')
        expect(LoginPage.password).toHaveText('')
    })
    it('should deny access when providing a correct username and a wrong password', () => {
        LoginPage.email.setValue('sophie_m@gmail.com')
        LoginPage.password.setValue('1234')
        LoginPage.submit()
        expect(LoginPage.alertPassword).toHaveText('Invalid password.')
        browser.pause(3000)
    })
    it('should allow access when providing correct inputs', () => {
        LoginPage.email.setValue('sophie_m@gmail.com')
        LoginPage.password.setValue('Soph4567ie')
        LoginPage.submit()
        expect(LoginPage.alertPassword).not.toBeDisplayed('Invalid password.')
        expect(LoginPage.alertEmail).not.toBeDisplayed('Invalid email address.')
        expect(LoginPage.alertResult).toBeDisplayed('Your login data is:sophie_m@gmail.com  Soph4567ie')
        browser.pause(3000)
    })
});
describe('Login form', () => {
    beforeAll('Open browser', () =>{
		LoginPage.open();
    })
    it('new user should be redirected to the register form', () => {
        LoginPage.btnNewUser.click ()
        browser.switchWindow('http://localhost:4000/register.html')
        expect(browser).toHaveUrl('http://localhost:4000/register.html')
        browser.pause(3000)
    })
});