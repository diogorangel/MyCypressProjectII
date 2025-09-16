class ProductPage {
  get addToCartButton() {
    return cy.get('button[name="add_cart_product"]');
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

  get allProductsHeader() {
    return cy.xpath('/html/body/section[2]/div/div/div[2]/div/h2');
  }

  get firstProductViewButton() {
    return cy.xpath('/html/body/section[2]/div/div/div[2]/div/div[2]/div/div[2]/ul/li/a');
  }

  get productName() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/h2');
  }

  get productCategory() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[1]');
  }

  get productPrice() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/span/span');
  }
   get productAvailability() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[2]');
   }
  get productCondition() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[3]');
  }
  get productBrand() {
    return cy.xpath('/html/body/section/div/div/div[2]/div[2]/div[2]/div/p[4]');
  }
}

export default new ProductPage();