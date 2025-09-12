import HomePage from '../support/Pages/HomePage';
import ContactPage from '../support/Pages/ContactPage';
import ProductPage from '../support/Pages/ProductPage';

describe('Website Functionality Scenarios', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.title().should('eq', 'Automation Exercise');
  });

  it('Test Case 6: Contact Us Form', () => {
    // Cenário 6: Enviar formulário de contato
    HomePage.contactUsButton.click();
    ContactPage.getInTouchHeader.should('be.visible');

    ContactPage.nameInput.type('Test Name');
    ContactPage.emailInput.type('test@email.com');
    ContactPage.subjectInput.type('Test Subject');
    ContactPage.messageTextarea.type('This is a test message for Cypress.');

    const filePath = 'example.json'; // Certifique-se de ter um arquivo 'example.json' na pasta 'cypress/fixtures'
    ContactPage.fileInput.selectFile(`cypress/fixtures/${filePath}`);

    ContactPage.submitButton.click();
    cy.on('window:confirm', () => true); // Aceita o alerta de confirmação

    ContactPage.successMessage.should('contain.text', 'Success! Your details have been submitted successfully.');
    ContactPage.homeButton.click();
    cy.title().should('eq', 'Automation Exercise');
  });

  it('Test Case 7: Verify Test Cases Page', () => {
    // Cenário 7: Acessar a página de casos de teste
    HomePage.testCasesButton.click();
    cy.url().should('include', '/test_cases');
    cy.get('h2 > b').should('contain', 'Test Cases'); // Adicionei a verificação do título da página
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    // Cenário 8: Verificar produtos
    HomePage.productsButton.click();
    cy.url().should('include', '/products');
    ProductPage.allProductsHeader.should('be.visible');
    
    ProductPage.firstProductViewButton.click();
    cy.url().should('include', '/product_details/');
    ProductPage.productName.should('be.visible');
    ProductPage.productCategory.should('be.visible');
    ProductPage.productPrice.should('be.visible');
    ProductPage.productAvailability.should('be.visible');
    ProductPage.productCondition.should('be.visible');
    ProductPage.productBrand.should('be.visible');
  });
});