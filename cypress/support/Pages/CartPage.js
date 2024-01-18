class CartPage{
    Product(){return cy.get('#page-wrapper .col-lg-8 h2');}
    totalPrice(){return cy.get('#totalp');} 
    placeOrderBtn(){return cy.get('#page-wrapper button');}
    shoppingList(){return cy.get('#tbodyid tr', { timeout: 10000 });}
    deleteButton(){return cy.get('#tbodyid tr a');}
    name(){return cy.get('#name');}
    country(){return cy.get("#country");}
    city(){return cy.get('#city');}
    card(){return cy.get('#card');}
    monthCard(){return cy.get('#month');}
    yearCard(){return cy.get('#year');}
    purchaseBtn(){return cy.get('.modal-footer button[onclick="purchaseOrder()"]');}
    successLabel(){return cy.get('h2:contains("Thank you for your purchase!")')}
    verifyPurchase(){return this.successLabel().should('exist');}
    verifyPage(){return this.placeOrderBtn().should('exist');}
}
module.exports = new CartPage();