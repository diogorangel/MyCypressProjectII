class HomePage {
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
}

export default new HomePage();