import PageMethods from "../../../support/PageMethods";
import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";

Given('I visit the homepage', ()=>{
    cy.visit('/');
})
When('I click on the {string} of the Carousel to go to the next slide.',(element) =>{
    PageMethods.clickBtnORSideNext(element);
});
When('I click on the {string} of the carousel to go to the previous slide.',(element) =>{
    PageMethods.clickBtnORSideBefore(element);
});
When('I click in the {string} button',(element) =>{
    PageMethods.clickBtnBarIndicator(element);
});

Then('The carousel image changes to the {string} image', imageNumber =>{
    PageMethods.CheckImage(imageNumber);
})
