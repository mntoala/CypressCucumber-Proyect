const CartPage = require("./Pages/CartPage");
const HomePage = require("./Pages/HomePage");
const ProductPage = require("./Pages/ProductPage");

class ShopingMethods{

    SelectLaptop(){return HomePage.laptopOpt().click();}
    SelectProduct1(){ return HomePage.product1().click();}
    SelectProduct2(){ return HomePage.product2().click();}
    SelectProduct3(){ return HomePage.product3().click();}
    VerifyDetailProductPage(){return ProductPage.addToCartBtn.should('exist');}
    AddProductToCart(){ return ProductPage.addToCartBtn().click();}
    CheckProductsInCart(expectedProducts) {
        return CartPage.shoppingList().should('have.length', expectedProducts);
      }
    DeleteProduct(nList){
        CartPage.deleteButton().eq(nList-1).then((deleteOpt) => {
        cy.wrap(deleteOpt).click(); 
    });} 
    PlaceOrder(){return CartPage.placeOrderBtn().click();}
    FillInformation(name,country,city,card,monthCard,yearCard){
        CartPage.name().type(name);
        CartPage.country().type(country);
        CartPage.city().type(city);
        CartPage.card().type(card);
        CartPage.monthCard().type(monthCard);
        CartPage.yearCard().type(yearCard);
    }
    clickPurchaseBtn(){return CartPage.purchaseBtn().click();}
    CheckPurchase(){return CartPage.verifyPurchase();}
}
module.exports = new ShopingMethods();