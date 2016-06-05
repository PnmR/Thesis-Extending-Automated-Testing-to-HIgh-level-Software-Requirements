Feature: Admin expands Användare under Svarsgrupp node
  In order to see which Användare are logged in under a Svarsgrupp
  As a Admin
  I want to Admin expands Användare under Svarsgrupp node

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt


  Scenario Outline: Given Svarsgrupp node nr
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Användare
    Then Användare under Svarsgrupp expands
    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |

  Scenario Outline: Given Svarsgrupp node nr and given Svarsgrupp Användare node nr
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Användare
    Then Svarsgrupp Användare nr <svarsgruppAnvändareNodeNr> is listed with name
    And Svarsgrupp Användare nr <svarsgruppAnvändareNodeNr> is listed with fixednumber
    And Svarsgrupp Användare nr <svarsgruppAnvändareNodeNr> is listed with adm or not
    And Svarsgrupp Användare nr <svarsgruppAnvändareNodeNr> is listed with Inloggad/Ej inloggad

    Examples:
      | svarsgruppNodeNr | svarsgruppAnvändareNodeNr |
      | 2                | 1                    |
      | 2                | 2                    |
      | 2                | 3                    |
      | 2                | 4                    |
      | 2                | 5                    |
      | 2                | 6                    |
      | 2                | 7                    |
      | 2                | 8                    |