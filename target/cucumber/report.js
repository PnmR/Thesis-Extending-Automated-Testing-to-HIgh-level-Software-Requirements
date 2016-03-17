$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org/cukesSel/features/admin_clicks_on_start_of_admin _web _ab_section.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on Start of Admin Web Ab section",
  "description": "In order to be able to navigate through different parts of Company start Page\nAs an Admin\nI want to click on start of Admin Web Ab section",
  "id": "admin-clicks-on-start-of-admin-web-ab-section",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3568278859,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Admin is in the Admin Web Ab section",
  "description": "",
  "id": "admin-clicks-on-start-of-admin-web-ab-section;admin-is-in-the-admin-web-ab-section",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Admin goes to Admin Web Ab section",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Admin clicks on Start",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 10,
      "value": "#    Then Company listed #prob"
    }
  ],
  "line": 11,
  "name": "Växelöversikt tab should be visible",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Logg tab should be visible",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
      "offset": 13
    }
  ],
  "location": "Steps.adminVisits(String)"
});
formatter.result({
  "duration": 1917719513,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2925815524,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1491741274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Växelöversikt",
      "offset": 0
    }
  ],
  "location": "Steps.tabShouldBeVisible(String)"
});
formatter.result({
  "duration": 566173258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logg",
      "offset": 0
    }
  ],
  "location": "Steps.tabShouldBeVisible(String)"
});
formatter.result({
  "duration": 539237416,
  "status": "passed"
});
formatter.after({
  "duration": 74664826,
  "status": "passed"
});
});