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
    SignupPage.addressInput.type('123 Test St');
    SignupPage.countrySelect.select('United States');
    SignupPage.stateInput.type('California');
    SignupPage.cityInput.type('Los Angeles');
    SignupPage.zipcodeInput.type('90210');
    SignupPage.mobileNumberInput.type('1234567890');
    SignupPage.createAccountButton.click();

    // Verificações finais
    SignupPage.accountCreatedMessage.should('be.visible');
    SignupPage.continueButton.click();
    HomePage.loggedInAs.should('contain', username);
    HomePage.deleteAccountButton.click();
    HomePage.accountDeletedMessage.should('contain.text', 'ACCOUNT DELETED!');
  });

  it('Test Case 2: Login User with correct email and password', () => {
    // Cenário 2: Login com credenciais corretas
    HomePage.signupLoginButton.click();
    LoginPage.loginHeader.should('be.visible');

    // Usar dados de um usuário existente
    LoginPage.loginEmailInput.type('testuser@test.com');
    LoginPage.loginPasswordInput.type('testpass');
    LoginPage.loginButton.click();

    HomePage.loggedInAs.should('contain', 'testuser');
    HomePage.deleteAccountButton.click();
    HomePage.accountDeletedMessage.should('contain.text', 'ACCOUNT DELETED!');
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    // Cenário 3: Login com credenciais incorretas
    HomePage.signupLoginButton.click();
    LoginPage.loginHeader.should('be.visible');

    LoginPage.loginEmailInput.type('invalid@email.com');
    LoginPage.loginPasswordInput.type('wrongpass');
    LoginPage.loginButton.click();

    LoginPage.loginErrorMessage.should('contain.text', 'Your email or password is incorrect!');
  });

  it('Test Case 4: Logout User', () => {
    // Cenário 4: Logout do usuário
    HomePage.signupLoginButton.click();
    LoginPage.loginEmailInput.type('testuser@test.com');
    LoginPage.loginPasswordInput.type('testpass');
    LoginPage.loginButton.click();

    HomePage.loggedInAs.should('contain', 'testuser');
    HomePage.logoutButton.click();

    cy.url().should('include', '/login');
  });

  it('Test Case 5: Register User with existing email', () => {
    // Cenário 5: Cadastro com e-mail já existente
    HomePage.signupLoginButton.click();
    LoginPage.newUserSignupHeader.should('be.visible');
    LoginPage.signupNameInput.type('existinguser');
    LoginPage.signupEmailInput.type('testuser@test.com');
    LoginPage.signupButton.click();

    LoginPage.emailExistMessage.should('contain.text', 'Email Address already exist!');
  });
});