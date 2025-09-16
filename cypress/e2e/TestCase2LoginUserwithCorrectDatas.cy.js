import HomePage from '../support/Pages/HomePage';
import LoginPage from '../support/Pages/LoginPage';
import SignupPage from '../support/Pages/SignupPage';

describe('User Authentication Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  });
  it('Test Case 2: Login User with correct email and password', () => {
    // Cenário 2: Login com credenciais corretas
    HomePage.signupLoginButton.click();
    LoginPage.loginHeader.should('be.visible');

    // Usar dados de um usuário existente
    LoginPage.loginEmailInput.type('testuser@click.com');
    LoginPage.loginPasswordInput.type('testpass');
    LoginPage.loginButton.click();

    HomePage.loggedInAs.should('contain', 'testuser');
  });
});