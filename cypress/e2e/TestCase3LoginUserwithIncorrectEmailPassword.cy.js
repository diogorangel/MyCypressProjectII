import HomePage from '../support/Pages/HomePage';
import LoginPage from '../support/Pages/LoginPage';
import SignupPage from '../support/Pages/SignupPage';

describe('User Authentication Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
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
});