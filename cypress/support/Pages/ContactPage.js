class ContactPage {
  get contactUsButton() {
    return cy.get('a[href="/contact_us"]');
  }

  get getInTouchHeader() {
    return cy.xpath('//*[@id="contact-page"]/div[2]/div[1]/div/h2');
  }

  get nameInput() {
    return cy.xpath('//*[@id="contact-us-form"]/div[1]/input');
  }

  get emailInput() {
    return cy.xpath('//*[@id="contact-us-form"]/div[2]/input');
  }

  get subjectInput() {
    return cy.xpath('//*[@id="contact-us-form"]/div[3]/input');
  }

  get messageTextarea() {
    return cy.xpath('//*[@id="message"]');
  }

  get fileInput() {
    return cy.xpath('//*[@id="contact-us-form"]/div[5]/input');
  }

  get submitButton() {
    return cy.xpath('//*[@id="contact-us-form"]/div[6]/input');
  }

  get successMessage() {
    return cy.xpath('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]');
  }
  get homeButton() {
    return cy.xpath('/html/body/header/div/div/div/div[2]/div/ul/li[1]/a');
  }
}

export default new ContactPage();