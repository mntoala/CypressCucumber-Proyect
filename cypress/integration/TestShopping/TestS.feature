@fullregression @checkout
Feature: Add, remove and buy products

Background: 
    Given I visit the homepage

Scenario: Add one product to cart
    When Select the first product to add to cart.
    And View Detail of Product and add to Cart.
    And Accept Product Added to Cart.
    Then I verify that there are 1 product in the cart.

Scenario: Remove products to cart
    When Select the first product to add to cart.
    And View Detail of Product and add to Cart.
    And Accept Product Added to Cart.
    But Return to Home Page.
    And Select the second product to add to cart.
    And View Detail of Product and add to Cart.
    And Accept Product Added to Cart.
    Then I verify that there are 2 products in the cart.
    But Remove product number 2 from the list.
    Then I verify that there are 1 product in the cart.

Scenario: Buy a laptop
    When Select Laptops Categories.
    And Add a laptop to cart.
    And View Detail of Product and add to Cart.
    And Accept Product Added to Cart.
    Then I verify that there are 1 product in the cart.
    And I want to the place order.
    And Enter and send customer purchase information.
    Then I should receive a successful purchase message.
    

