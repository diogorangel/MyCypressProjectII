class LoginPage {
  get signupLoginButton() {
    return cy.get('a[href="/login"]');
  }

  get contactUsButton() {
    return cy.get('a[href="/contact_us"]');
  }

  get productsButton() {
    return cy.get('a[href="/products"]');
  }

  get testCasesButton() {
    return cy.get('a[href="/test_cases"]');
  }

  get loggedInAs() {
    return cy.get('li:nth-child(10) > a');
  }

  get deleteAccountButton() {
    return cy.get('a[href="/delete_account"]');
  }

  get logoutButton() {
    return cy.get('a[href="/logout"]');
  }

  get homePageHeader() {
    return cy.get('h2 > b');
  }

  get accountDeletedMessage() {
    return cy.get('h2 > b');
  }

  get newUserSignupHeader() {
    return cy.xpath('/html/body/section/div/div/div[3]/div/h2');
  }
}

export default new LoginPage();