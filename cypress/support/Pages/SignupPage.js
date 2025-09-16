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
    return cy.xpath('/html/body/section/div/div/div/div/form/div[6]/div/span/input');
  }

  get specialOffersCheckbox() {
    return cy.xpath('/html/body/section/div/div/div/div/form/div[7]/div/span/input');
  }
  get firstNameInput() {
    return cy.xpath('/html/body/section/div/div/div/div/form/p[1]/input');
  }
  get lastNameInput() {
    return cy.xpath('//*[@id="last_name"]');
  }
  get companyInput() {
    return cy.xpath('//*[@id="company"]');
  }
  get addressInput() {
    return cy.xpath('//*[@id="address1"]');
  }
   get address2Input() {
    return cy.xpath('/html/body/section/div/div/div/div/form/p[5]/input');
  }
  get countrySelect() {
    return cy.xpath('//*[@id="country"]');
  }
  get stateInput() {
    return cy.xpath('//*[@id="state"]');
  }
  get cityInput() {
    return cy.xpath('//*[@id="city"]');
  }
   get zipcodeInput() {
    return cy.xpath('//*[@id="zipcode"]');
  }
  get mobileNumberInput() {
    return cy.xpath('//*[@id="mobile_number"]');
  }
  get createAccountButton() {
    return cy.xpath('/html/body/section/div/div/div/div/form/button');
  }
  get accountCreatedMessage() {
    return cy.xpath('/html/body/section/div/div/div/h2');
  }
  get accountCreatedMessage1() {
    return cy.xpath('/html/body/section/div/div/div/p[1]');
  }
  get accountCreatedMessage2() {
    return cy.xpath('/html/body/section/div/div/div/p[2]');
  }
   get continueButton() {
    return cy.xpath('//*[@id="form"]/div/div/div/div/a');
  }
  get accountDeletedMessage1() {
    return cy.xpath('/html/body/section/div/div/div/p[1]');
  }
  get accountDeletedMessage2() {
    return cy.xpath('/html/body/section/div/div/div/p[2]');
  }
  
}

export default new SignupPage();