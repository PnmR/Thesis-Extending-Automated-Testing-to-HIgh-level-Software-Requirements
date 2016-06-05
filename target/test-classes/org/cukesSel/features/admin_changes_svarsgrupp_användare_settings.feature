Feature: Admin changes Svarsgrupp Användare settings
  In order to be able to change the Användare settings as per the changing situation
  As a Admin
  I want to change Svarsgrupp Användare settings
  # unclear as to what is msisdn
  # cannot change fixednumber
  # cannot change Inloggad/Ej inloggad

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Användare 1 of Svarsgrupp node nr 1
  Note: new adm or not will take only two values Användare or COMPANY_ADMIN
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    And Under Svarsgrupp node, Admin tries to expand Användare
    And Admin clicks on the link of Svarsgrupp Användare nr 1
    When Admin changes Svarsgrupp Användare settings:
      | new first name | Sara          |
      | new last name  | Vickman       |
      | new adm or not | COMPANY_ADMIN |

    Then Admin navigates back from Användare setting page
    And Admin expands Svarsgrupp
    And Under Svarsgrupp node, Admin tries to expand Användare
    And Admin verifies the changes in Svarsgrupp Användare nr 1
