$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/admin_expands_users_under_svarsgrupp_node.feature");
formatter.feature({
  "line": 1,
  "name": "Admin expands Users under Svarsgrupp node",
  "description": "In order to see which users are logged in under a Svarsgrupp\nAs a Admin\nI want to Admin expands Users under Svarsgrupp node",
  "id": "admin-expands-users-under-svarsgrupp-node",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-users-under-svarsgrupp-node;given-svarsgrupp-node-nr",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Under Svarsgrupp node, Admin tries to expand Users",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Users under Svarsgrupp expands",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-expands-users-under-svarsgrupp-node;given-svarsgrupp-node-nr;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 19,
      "id": "admin-expands-users-under-svarsgrupp-node;given-svarsgrupp-node-nr;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-expands-users-under-svarsgrupp-node;given-svarsgrupp-node-nr;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4116711050,
  "status": "passed"
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
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Admin clicks on tab Växelöversikt",
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
  "duration": 2285698154,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 3002544052,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1699054468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Växelöversikt",
      "offset": 20
    }
  ],
  "location": "Steps.adminClicksOnTab(String)"
});
formatter.result({
  "duration": 7390345483,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-users-under-svarsgrupp-node;given-svarsgrupp-node-nr;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Under Svarsgrupp node, Admin tries to expand Users",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Users under Svarsgrupp expands",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 573986621,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1652196398,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1901170152,
  "status": "passed"
});
formatter.match({
  "location": "Steps.thenUsersUnderSvarsgruppExpands()"
});
formatter.result({
  "duration": 925487587,
  "status": "passed"
});
formatter.after({
  "duration": 77310912,
  "status": "passed"
});
});