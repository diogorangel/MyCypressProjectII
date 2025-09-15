class SignupPage {
  get signupButton() {
    return cy.get('a[href="/signup"]');
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
  get enterAccountInfoHeader() {
    return cy.xpath('/html/body/section/div/div/div/div/h2');
  }
  get titleradioMan() {
    return cy.xpath('/html/body/section/div/div/div/div/form/div[1]/div[1]/label/div/span/input');
  }
  get titleradiowoman() {
    return cy.get('input[id="/id_gender2"]');
  }
  get passwordInput() {
    return cy.get('input[data-qa="password"]');
  }
   get dobDay() {
    return cy.xpath('/html/body/section/div/div/div/div/form/div[5]/div/div[1]/div/select');
  }

  get dobMonth() {
    return cy.xpath('/html/body/section/div/div/div/div/form/div[5]/div/div[2]/div/select');
  }

  get dobYear() {
    return cy.xpath('/html/body/section/div/div/div/div/form/div[5]/div/div[3]/div/select');
  }

  get newsletterCheckbox() {
    return cy.get('input[id="/newsletter"]');
  }

  get specialOffersCheckbox() {
    return cy.get('input[id="/optin"]');
  }
}

export default new SignupPage();