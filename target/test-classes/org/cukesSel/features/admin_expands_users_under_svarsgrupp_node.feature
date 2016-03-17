Feature: Admin expands Users under Svarsgrupp node
  In order to see which users are logged in under a Svarsgrupp
  As a Admin
  I want to Admin expands Users under Svarsgrupp node

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt


  Scenario Outline: Given Svarsgrupp node nr
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Users under Svarsgrupp expands
    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |

  Scenario Outline: Given Svarsgrupp node nr and given Svarsgrupp Users node nr
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Svarsgrupp Users nr <svarsgruppUserNodeNr> is listed with name
    And Svarsgrupp Users nr <svarsgruppUserNodeNr> is listed with fixednumber
    And Svarsgrupp Users nr <svarsgruppUserNodeNr> is listed with adm or not
    And Svarsgrupp Users nr <svarsgruppUserNodeNr> is listed with Inloggad/Ej inloggad

    Examples:
      | svarsgruppNodeNr | svarsgruppUserNodeNr |
      | 2                | 1                    |
      | 2                | 2                    |
      | 2                | 3                    |
      | 2                | 4                    |
      | 2                | 5                    |
      | 2                | 6                    |
      | 2                | 7                    |
      | 2                | 8                    |