@smoke
Feature: Test Carousel Features Next Image

Background: 
    Given I visit the homepage

Scenario: From First to Second Image with next Button
    When I click on the 'next button' of the Carousel to go to the next slide.
    Then The carousel image changes to the 'second' image

Scenario: From First to Third Image with the left side of Carousel 
    When I click on the 'left side' of the carousel to go to the previous slide.
    Then The carousel image changes to the 'third' image

Scenario: From First to Third Image with the Button Bar Indicator
    When I click in the 'third' button
    Then The carousel image changes to the 'third' image
