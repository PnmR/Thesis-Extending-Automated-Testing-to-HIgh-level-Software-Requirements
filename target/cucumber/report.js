$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/visiting_company_start_page.feature");
formatter.feature({
  "line": 1,
  "name": "Visiting Company Start Page",
  "description": "In order to navigate through different parts of Company start Page\nAs a user\nI want to visit Company start page",
  "id": "visiting-company-start-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "I visit http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I go to Admin Web Ab section",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Start",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
      "offset": 8
    }
  ],
  "location": "Steps.iVisit(String)"
});
formatter.result({
  "duration": 4963944797,
  "status": "passed"
});
formatter.match({
  "location": "Steps.IGoToAdminWebABSection()"
});
formatter.result({
  "duration": 1979653539,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iClickOnStart()"
});
formatter.result({
  "duration": 1096353790,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "",
  "description": "",
  "id": "visiting-company-start-page;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@new"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "There is 10 Users",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on tab Växelöversikt",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I expand Users",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "Under Admin Web AB, all Users are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 9
    }
  ],
  "location": "Steps.thereAre(int)"
});
formatter.result({
  "duration": 1022549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Växelöversikt",
      "offset": 15
    }
  ],
  "location": "Steps.iClickOnTab(String)"
});
formatter.result({
  "duration": 1466566960,
  "status": "passed"
});
formatter.match({
  "location": "Steps.iExpandUsers()"
});
formatter.result({
  "duration": 7741148613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Users",
      "offset": 24
    }
  ],
  "location": "Steps.underAdminWebAbAllAreShown(String)"
});
formatter.result({
  "duration": 786723649,
  "status": "passed"
});
formatter.after({
  "duration": 68782491,
  "status": "passed"
});
});