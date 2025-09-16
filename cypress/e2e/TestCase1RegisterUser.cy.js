import HomePage from '../support/Pages/HomePage';
import LoginPage from '../support/Pages/LoginPage';
import SignupPage from '../support/Pages/SignupPage';

describe('User Authentication Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  });

  it('Test Case 1: Register User', () => {
    // Cenário 1: Registrar um novo usuário
    HomePage.signupLoginButton.click();
    LoginPage.newUserSignupHeader.should('be.visible');

    const username = 'testuser' + Math.floor(Math.random() * 1000);
    const useremail = username + '@test.com';

    LoginPage.signupNameInput.type(username);
    LoginPage.signupEmailInput.type(useremail);
    LoginPage.signupButton.click();
    SignupPage.enterAccountInfoHeader.should('be.visible');

    // Preencher formulário de cadastro
    SignupPage.titleradioMan.click();
    SignupPage.passwordInput.type('testpass');
    SignupPage.dobDay.click;
    SignupPage.dobDay.select('10');
    SignupPage.dobMonth.click;
    SignupPage.dobMonth.select('January');
    SignupPage.dobYear.click;
    SignupPage.dobYear.select('1990');
    SignupPage.newsletterCheckbox.check();
    SignupPage.specialOffersCheckbox.check();
    SignupPage.firstNameInput.type(username);
    SignupPage.lastNameInput.type('Test');
    SignupPage.companyInput.type('Minsait');
    SignupPage.addressInput.type('123 Test St');
    SignupPage.address2Input.type('North Zone 123 Test St');
    SignupPage.countrySelect.click;
    SignupPage.countrySelect.select('United States');
    SignupPage.stateInput.type('California');
    SignupPage.cityInput.type('Los Angeles');
    SignupPage.zipcodeInput.type('02260');
    SignupPage.mobileNumberInput.type('+551234567890');
    SignupPage.createAccountButton.click();

    // Verificações finais
    SignupPage.accountCreatedMessage.should('be.visible');
    SignupPage.accountCreatedMessage1.should('be.visible');
    SignupPage.accountCreatedMessage2.should('be.visible');
    SignupPage.continueButton.click();
    HomePage.loggedInAs.should('contain', username);
    //HomePage.deleteAccountButton.click();
    //HomePage.accountDeletedMessage.should('contain.text', 'ACCOUNT DELETED!');
    //SignupPage.accountDeletedMessage1.check;
    //SignupPage.accountDeletedMessage2.check;
    //SignupPage.continueButton.click;
  });
});