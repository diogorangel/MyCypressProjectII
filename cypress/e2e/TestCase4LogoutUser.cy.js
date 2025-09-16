import HomePage from '../support/Pages/HomePage';
import LoginPage from '../support/Pages/LoginPage';
import SignupPage from '../support/Pages/SignupPage';

describe('User Authentication Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  });

  it('Test Case 4: Logout User', () => {
    // Cenário 4: Logout do usuário
    HomePage.signupLoginButton.click();
    LoginPage.loginEmailInput.type('testuser@click.com');
    LoginPage.loginPasswordInput.type('testpass');
    LoginPage.loginButton.click();

    HomePage.loggedInAs.should('contain', 'testuser');
    HomePage.logoutButton.click();

    cy.url().should('include', '/login');
  });
});