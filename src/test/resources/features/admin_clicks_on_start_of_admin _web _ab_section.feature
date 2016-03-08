Feature: Admin clicks on Start of Admin Web Ab section
  In order to be able to navigate through different parts of Company start Page
  As an Admin
  I want to click on start of Admin Web Ab section

  Scenario: Admin is in the Admin Web Ab section
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    When Admin clicks on Start
  #    Then Company listed #prob
    Then Växelöversikt tab should be visible
    And Logg tab should be visible
