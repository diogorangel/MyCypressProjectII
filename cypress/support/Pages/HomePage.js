class HomePage {
  get signupLoginButton() {
    return cy.get('a[href="/login"]');
  }

  get contactUsButton() {
    return cy.get('a[href="/contact_us"]');
  }

  get productsButton() {
    return cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[2]/a');
  }

  get testCasesButton() {
    return cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a');
  }

  get loggedInAs() {
    return cy.xpath('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]/a');
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
    return cy.xpath('//*[@id="form"]/div/div/div/h2');
  }
}

export default new HomePage();