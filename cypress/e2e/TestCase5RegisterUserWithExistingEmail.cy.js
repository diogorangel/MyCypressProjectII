import HomePage from '../support/Pages/HomePage';
import LoginPage from '../support/Pages/LoginPage';
import SignupPage from '../support/Pages/SignupPage';

describe('User Authentication Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  });

  it('Test Case 5: Register User with existing email', () => {
    // Cenário 5: Cadastro com e-mail já existente
    HomePage.signupLoginButton.click();
    LoginPage.newUserSignupHeader.should('be.visible');
    LoginPage.signupNameInput.type('existinguser');
    LoginPage.signupEmailInput.type('testuser@test.com');
    LoginPage.signupButton.click();

    LoginPage.emailExistMessage.should('be.visible').and('contain', 'Email Address already exist!');
  });
});