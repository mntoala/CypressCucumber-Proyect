import {Before, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import PageMethods from "../../../support/PageMethods"
import ShoppingMethods from "../../../support/ShoppingMethods";

Before(() => {
    cy.fixture('DataUser.json').as('userData');
  });

Given('I visit the homepage',()=>{
    cy.visit('/');
})
When('Select the first product to add to cart.',()=>{
    ShoppingMethods.SelectProduct1();
})
When('Select Laptops Categories.',()=>{
    ShoppingMethods.SelectLaptop();
})
And('Select the second product to add to cart.',()=>{
    ShoppingMethods.SelectProduct2();
})
And('Add a laptop to cart.',()=>{
    ShoppingMethods.SelectProduct3();
})
And('View Detail of Product and add to Cart.',()=>{
    ShoppingMethods.AddProductToCart();
})
And('Accept Product Added to Cart.', () => {
    cy.on('window:alert', (text) => {
      cy.log('Add Product');
      cy.on('uncaught:exception', (err, runnable) => {
        return false;
      }).then(() => {
        return true;
      });
      expect(text).to.include('Product added');
    });
    PageMethods.clickOnPage('Cart');
  });
  And('I want to the place order.',()=>{
    ShoppingMethods.PlaceOrder();
  })
  And('Enter and send customer purchase information.',()=>{
    cy.get('@userData').then((userData) => {
        ShoppingMethods.FillInformation(userData.name,userData.country, 
            userData.city,userData.card,userData.month, userData.year)
      });
    ShoppingMethods.clickPurchaseBtn();
  })
  But('Return to Home Page.',()=>{
    PageMethods.clickOnPage('Home');
  })
  But('Remove product number {int} from the list.',(nlist)=>{
    ShoppingMethods.DeleteProduct(nlist);
  })
  Then('I verify that there are {int} product(s) in the cart.', (expectedProducts) => {
    ShoppingMethods.CheckProductsInCart(expectedProducts);
  });
  Then('I should receive a successful purchase message.', () => {
    ShoppingMethods.CheckPurchase();
  });

