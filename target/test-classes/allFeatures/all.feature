Feature: Admin cannot expand the Inga medlemmar tillgängliga under Svarsgrupp
  In order to
  As a Admin
  I want the Inga medlemmar tillgängliga under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand Inga medlemmar tillgängliga
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand Inga medlemmar tillgängliga
    Then It does not expand

    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |

Feature: Admin cannot expand the Stängd svarsgrupp under Svarsgrupp
  In order to
  As a Admin
  I want the Stängd svarsgrupp under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand the Stängd svarsgrupp
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand Stängd svarsgrupp
    Then It does not expand

    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |

Feature: Admin cannot expand the Vid maximal kölängd / kötid under Svarsgrupp
  In order to
  As a Admin
  I want the Vid maximal kölängd / kötid under Svarsgrupp to not expand

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Verify that you can not expand the Vid maximal kölängd / kötid
    Given Admin is checking Svarsgrupp node nr <svarsgruppNodeNr>
    And Admin expands Svarsgrupp
    When Admin tries to expand Vid maximal kölängd / kötid
    Then It does not expand

    Examples:
      | svarsgruppNodeNr |
      | 1                |
      | 2                |
      | 3                |

Feature: Admin changes name of Menystyrning
  In order to personalise a Menystyrning
  As a Admin
  I want to change name of Menystyrning

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Given Menystyrning node
    Given Admin is checking Menystyrning node nr <nodeNr>
    And  Admin clicks on the link
    When Admin changes name to <newName>
    Then Admin verifies change

    Examples:
      | nodeNr | newName                  |
      | 1      | newMenystyrningfirs6     |
      | 2      | newMenystyrningse80cond  |
      | 3      | newMenystyrningthijljlrd |

Feature: Admin changes name of Svarsgrupp
  In order to personalise Svarsgrupp
  As a Admin
  I want to change name of Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario Outline: Given Svarsgrupp node
    Given Admin is checking Svarsgrupp node nr <nodeNr>
    And  Admin clicks on the link
    When Admin changes name to <newName>
    Then Admin verifies change

    Examples:
      | nodeNr | newName         |
      | 1      | newSvarsgrupp2  |
      | 3      | newSvarsgrupp4  |
      | 2      | newSvarsgrupp34 |

Feature: Admin changes Svarsgrupp user settings
  In order to be able to change the user settings as per the changing situation
  As a Admin
  I want to change Svarsgrupp user settings
# unclear as to what is msisdn
# cannot change fixednumber
# cannot change Inloggad/Ej inloggad

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Users 1 of Svarsgrupp node nr 1
  Note: new adm or not will take only two values USER or COMPANY_ADMIN
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    And Under Svarsgrupp node, Admin tries to expand Users
    And Admin clicks on the link of Svarsgrupp Users nr 1
    When Admin changes Svarsgrupp user settings:
      | new first name | NewSara       |
      | new last name  | NewVickman    |
      | new adm or not | COMPANY_ADMIN |

    Then Admin navigates back from user setting page
    And Admin expands Svarsgrupp
    And Under Svarsgrupp node, Admin tries to expand Users
    And Admin verifies the changes in Svarsgrupp Users nr 1

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

Feature: Admin clicks on tab Växelöversikt
  In order to expand Växelöversikt and observe its content
  As a Admin
  I want to click on tab Växelöversikt

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Tab Växelöversikt is clicked
    When Admin clicks on tab Växelöversikt
    Then Tab Växelöversikt expanded
    And Admin Web AB tree structure is shown

  Scenario: There are given number of Menystyrning
    Given There are 3 Menystyrning
    When Admin clicks on tab Växelöversikt
    Then Under Admin Web AB, all Menystyrning are shown

  Scenario: There are given number of Svarsgrupp
    Given There are 3 Svarsgrupp
    When Admin clicks on tab Växelöversikt
    Then Under Admin Web AB, all Svarsgrupp are shown

Feature: Admin clicks on the Menystyrning link
  In order to check if the Menystyrning link works
  As a Admin
  I want to click on the Menystyrning link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Tab Växelöversikt is clicked
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Menystyrning node nr <nodeNr>
    When Admin clicks on the link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |


Feature: Admin clicks on the Svarsgrupp link
  In order to check if the Svarsgrupp link works
  As a Admin
  I want to click on the Svarsgrupp link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Tab Växelöversikt is clicked
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr <nodeNr>
    When Admin clicks on the link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |

Feature: Admin clicks on the Users link
  In order to check if the Users link works
  As a Admin
  I want to click on the Users link

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start


  Scenario Outline: Users is expanded
    Given Admin clicks on tab Växelöversikt
    And Admin expands Users
    And Admin is checking Users node nr <nodeNr>
    When Admin clicks on the link
    Then Admin gets forwarded to correct page

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |

Feature: Admin expands Users
  In order to check if all users are shown
  As a Admin
  I want to expand Users

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: There are given number of users
    Given There are 10 Users
    And Admin clicks on tab Växelöversikt
    When Admin expands Users
    Then Under Admin Web AB, all Users are shown

Feature: Admin expands Svarsgrupp
  In order to navigate Svarsgrupp
  As a Admin
  I want to expand Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario: Svarsgrupp node nr 1
    Given Admin clicks on tab Växelöversikt
    And Admin is checking Svarsgrupp node nr 1
    When Admin expands Svarsgrupp
    Then For this node, Users logged in is visible

Feature: Admin expands Users under Svarsgrupp node
  In order to see which users are logged in under a Svarsgrupp
  As a Admin
  I want to Admin expands Users under Svarsgrupp node

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start
    And Admin clicks on tab Växelöversikt

  Scenario: Users Svarsgrupp node nr 1
    Given Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Users under Svarsgrupp expands

  Scenario: Users nr 1
    Given Admin is checking Svarsgrupp node nr 1
    And Admin expands Svarsgrupp
    When Under Svarsgrupp node, Admin tries to expand Users
    Then Users nr 1 is listed with name
    And Users nr 1 is listed with fixednumber
    And Users nr 1 is listed with adm or not
    And Users nr 1 is listed with Inloggad/Ej inloggad

Feature: Admin finds title, number, lock icon, link is visible under Menystyrning
  In order to check if all the nodes are visible inside given Menystyrning
  As a Admin
  I want to check given node of Menystyrning

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Given Menystyrning node nr
    Given Admin clicks on tab Växelöversikt
    When Admin is checking Menystyrning node nr <nodeNr>
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |

Feature: Admin finds title, number, lock icon, link is visible under Svarsgrupp
  In order to check if all the nodes are visible inside given Svarsgrupp
  As a Admin
  I want to check given node of Svarsgrupp

  Background:
    Given Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT
    And Admin goes to Admin Web Ab section
    And Admin clicks on Start

  Scenario Outline: Given Svarsgrupp node nr
    Given Admin clicks on tab Växelöversikt
    When Admin is checking Svarsgrupp node nr <nodeNr>
    Then For this node, title is visible
    Then For this node, number is visible
    Then For this node, lock icon is visible
    Then For this node, link is visible

    Examples:
      | nodeNr |
      | 1      |
      | 2      |
      | 3      |

