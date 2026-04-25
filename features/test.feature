Feature: Login Test
  @noauth
  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the home page
    
  @auth
  Scenario: Dashboard
    When I click on the Cart button
    Then click on continue shopping button