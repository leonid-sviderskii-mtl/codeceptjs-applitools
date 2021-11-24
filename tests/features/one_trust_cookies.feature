@one-trust
Feature: One Trust Cookie Banner
  Scenario: Validate the default setup for cookies for the specified region 
    Given I am on test site
    When I open OneTrust banner
    Then I see the banner is visually correct
