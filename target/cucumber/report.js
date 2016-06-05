$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("admin_cannot_expand_the_inga_medlemmar_tillgängliga_under_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin cannot expand the Inga medlemmar tillgängliga under Svarsgrupp",
  "description": "In order to\nAs a Admin\nI want the Inga medlemmar tillgängliga under Svarsgrupp to not expand",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that you can not expand Inga medlemmar tillgängliga",
  "description": "",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Inga medlemmar tillgängliga",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Inga medlemmar tillgängliga does not expand",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 19,
      "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 21,
      "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 22,
      "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3607825792,
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
  "duration": 1896645858,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2892225301,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1593107653,
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
  "duration": 5796945395,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that you can not expand Inga medlemmar tillgängliga",
  "description": "",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Inga medlemmar tillgängliga",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Inga medlemmar tillgängliga does not expand",
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
  "duration": 583787089,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1727275245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inga medlemmar tillgängliga",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1190269388,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 1923973,
  "status": "passed"
});
formatter.after({
  "duration": 79013191,
  "status": "passed"
});
formatter.before({
  "duration": 2955032705,
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
  "duration": 1730372939,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2900121449,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1562251751,
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
  "duration": 6756955363,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that you can not expand Inga medlemmar tillgängliga",
  "description": "",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Inga medlemmar tillgängliga",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Inga medlemmar tillgängliga does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 570064437,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1604870618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inga medlemmar tillgängliga",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1200095152,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 22213,
  "status": "passed"
});
formatter.after({
  "duration": 78376971,
  "status": "passed"
});
formatter.before({
  "duration": 2196427888,
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
  "duration": 1744426087,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2767906706,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1543738764,
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
  "duration": 7467609504,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that you can not expand Inga medlemmar tillgängliga",
  "description": "",
  "id": "admin-cannot-expand-the-inga-medlemmar-tillgängliga-under-svarsgrupp;verify-that-you-can-not-expand-inga-medlemmar-tillgängliga;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Inga medlemmar tillgängliga",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Inga medlemmar tillgängliga does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 565136223,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1587858825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Inga medlemmar tillgängliga",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1186831256,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 1545270,
  "status": "passed"
});
formatter.after({
  "duration": 70852238,
  "status": "passed"
});
formatter.uri("admin_cannot_expand_the_stängd_svarsgrupp_under_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin cannot expand the Stängd svarsgrupp under Svarsgrupp",
  "description": "In order to\nAs a Admin\nI want the Stängd svarsgrupp under Svarsgrupp to not expand",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that you can not expand the Stängd svarsgrupp",
  "description": "",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Stängd svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Stängd svarsgrupp does not expand",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 19,
      "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 21,
      "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 22,
      "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2255603719,
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
  "duration": 1771478274,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2852560387,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1529645479,
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
  "duration": 6778321030,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that you can not expand the Stängd svarsgrupp",
  "description": "",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Stängd svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Stängd svarsgrupp does not expand",
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
  "duration": 564937060,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1596594728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stängd svarsgrupp",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1194972215,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 22085,
  "status": "passed"
});
formatter.after({
  "duration": 68959304,
  "status": "passed"
});
formatter.before({
  "duration": 2200987238,
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
  "duration": 1742193936,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2853530642,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1514265285,
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
  "duration": 5146662104,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that you can not expand the Stängd svarsgrupp",
  "description": "",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Stängd svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Stängd svarsgrupp does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 576941960,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1649162204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stängd svarsgrupp",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1199255086,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 24119,
  "status": "passed"
});
formatter.after({
  "duration": 71633658,
  "status": "passed"
});
formatter.before({
  "duration": 2331443865,
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
  "duration": 1777615973,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2866696030,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1513472126,
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
  "duration": 6647781431,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that you can not expand the Stängd svarsgrupp",
  "description": "",
  "id": "admin-cannot-expand-the-stängd-svarsgrupp-under-svarsgrupp;verify-that-you-can-not-expand-the-stängd-svarsgrupp;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Stängd svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Stängd svarsgrupp does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 566595956,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1581906643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stängd svarsgrupp",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1187307052,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 35596,
  "status": "passed"
});
formatter.after({
  "duration": 74179534,
  "status": "passed"
});
formatter.uri("admin_cannot_expand_the_vid_maximal_kölängd_kötid_under_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin cannot expand the Vid maximal kölängd / kötid under Svarsgrupp",
  "description": "In order to\nAs a Admin\nI want the Vid maximal kölängd / kötid under Svarsgrupp to not expand",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that you can not expand the Vid maximal kölängd / kötid",
  "description": "",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Vid maximal kölängd / kötid",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Vid maximal kölängd / kötid does not expand",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 19,
      "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 21,
      "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 22,
      "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2147599958,
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
  "duration": 1739012940,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2882493960,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1513099154,
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
  "duration": 7002412868,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that you can not expand the Vid maximal kölängd / kötid",
  "description": "",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Vid maximal kölängd / kötid",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Vid maximal kölängd / kötid does not expand",
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
  "duration": 564408267,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1598465319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vid maximal kölängd / kötid",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1192543434,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 25224,
  "status": "passed"
});
formatter.after({
  "duration": 75452715,
  "status": "passed"
});
formatter.before({
  "duration": 2133883222,
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
  "duration": 1727224770,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2859663756,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1517076249,
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
  "duration": 6733821388,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that you can not expand the Vid maximal kölängd / kötid",
  "description": "",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Vid maximal kölängd / kötid",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Vid maximal kölängd / kötid does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 567326122,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1599136093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vid maximal kölängd / kötid",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1182796850,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 25025,
  "status": "passed"
});
formatter.after({
  "duration": 73847814,
  "status": "passed"
});
formatter.before({
  "duration": 2221295796,
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
  "duration": 1962808956,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2897410727,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1515000268,
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
  "duration": 5795502647,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that you can not expand the Vid maximal kölängd / kötid",
  "description": "",
  "id": "admin-cannot-expand-the-vid-maximal-kölängd-/-kötid-under-svarsgrupp;verify-that-you-can-not-expand-the-vid-maximal-kölängd-/-kötid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin tries to expand Vid maximal kölängd / kötid",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Vid maximal kölängd / kötid does not expand",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 576773162,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1671091202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vid maximal kölängd / kötid",
      "offset": 22
    }
  ],
  "location": "Steps.adminTriesToExpand(String)"
});
formatter.result({
  "duration": 1193316387,
  "status": "passed"
});
formatter.match({
  "location": "Steps.doesNotExpand()"
});
formatter.result({
  "duration": 23855,
  "status": "passed"
});
formatter.after({
  "duration": 75879750,
  "status": "passed"
});
formatter.uri("admin_changes_name_of_menystyrning.feature");
formatter.feature({
  "line": 1,
  "name": "Admin changes name of Menystyrning",
  "description": "In order to personalise a Menystyrning\nAs a Admin\nI want to change name of Menystyrning",
  "id": "admin-changes-name-of-menystyrning",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Given Menystyrning node",
  "description": "",
  "id": "admin-changes-name-of-menystyrning;given-menystyrning-node",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr \u003cnodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to \u003cnewName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;",
  "rows": [
    {
      "cells": [
        "nodeNr",
        "newName"
      ],
      "line": 19,
      "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;1"
    },
    {
      "cells": [
        "1",
        "newMenystyrningfirs6"
      ],
      "line": 20,
      "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;2"
    },
    {
      "cells": [
        "2",
        "newMenystyrningse80cond"
      ],
      "line": 21,
      "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;3"
    },
    {
      "cells": [
        "3",
        "newMenystyrningthijljlrd"
      ],
      "line": 22,
      "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2132694130,
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
  "duration": 1730182459,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2887132581,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1553917186,
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
  "duration": 5740876949,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Given Menystyrning node",
  "description": "",
  "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newMenystyrningfirs6",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 573468212,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1426142482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newMenystyrningfirs6",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2214938520,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2017206455,
  "status": "passed"
});
formatter.after({
  "duration": 86210156,
  "status": "passed"
});
formatter.before({
  "duration": 2159425531,
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
  "duration": 1767900524,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2956124532,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1497073299,
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
  "duration": 6806113051,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Given Menystyrning node",
  "description": "",
  "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newMenystyrningse80cond",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 568014792,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1427510311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newMenystyrningse80cond",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2381336779,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2014358139,
  "status": "passed"
});
formatter.after({
  "duration": 79570978,
  "status": "passed"
});
formatter.before({
  "duration": 2258783806,
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
  "duration": 1866922839,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2866521282,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1499029302,
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
  "duration": 5462688324,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Given Menystyrning node",
  "description": "",
  "id": "admin-changes-name-of-menystyrning;given-menystyrning-node;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newMenystyrningthijljlrd",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 574827856,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1419821277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newMenystyrningthijljlrd",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2415447498,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2052777219,
  "status": "passed"
});
formatter.after({
  "duration": 75718326,
  "status": "passed"
});
formatter.uri("admin_changes_name_of_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin changes name of Svarsgrupp",
  "description": "In order to personalise Svarsgrupp\nAs a Admin\nI want to change name of Svarsgrupp",
  "id": "admin-changes-name-of-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Given Svarsgrupp node",
  "description": "",
  "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003cnodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to \u003cnewName\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;",
  "rows": [
    {
      "cells": [
        "nodeNr",
        "newName"
      ],
      "line": 19,
      "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;1"
    },
    {
      "cells": [
        "1",
        "newSvarsgrupp2"
      ],
      "line": 20,
      "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;2"
    },
    {
      "cells": [
        "3",
        "newSvarsgrupp4"
      ],
      "line": 21,
      "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;3"
    },
    {
      "cells": [
        "2",
        "newSvarsgrupp34"
      ],
      "line": 22,
      "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2132075035,
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
  "duration": 1848136390,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2915410970,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1459731754,
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
  "duration": 6719434965,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Given Svarsgrupp node",
  "description": "",
  "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newSvarsgrupp2",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
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
  "duration": 566543151,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1394120092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newSvarsgrupp2",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2175249525,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2213285027,
  "status": "passed"
});
formatter.after({
  "duration": 79225651,
  "status": "passed"
});
formatter.before({
  "duration": 2141229118,
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
  "duration": 1783935128,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2852533167,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1453231155,
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
  "duration": 7413757547,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Given Svarsgrupp node",
  "description": "",
  "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newSvarsgrupp4",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564960731,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1399453850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newSvarsgrupp4",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2292242884,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2117763618,
  "status": "passed"
});
formatter.after({
  "duration": 91553315,
  "status": "passed"
});
formatter.before({
  "duration": 2256556786,
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
  "duration": 1736671406,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2891065243,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1462338254,
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
  "duration": 6547077772,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Given Svarsgrupp node",
  "description": "",
  "id": "admin-changes-name-of-svarsgrupp;given-svarsgrupp-node;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin changes name to newSvarsgrupp34",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin verifies if the name is changed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 686898567,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1376571481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "newSvarsgrupp34",
      "offset": 22
    }
  ],
  "location": "Steps.adminChangesNameTo(String)"
});
formatter.result({
  "duration": 2179036152,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminVerifiesIfTheNameIsChanged()"
});
formatter.result({
  "duration": 2662918165,
  "status": "passed"
});
formatter.after({
  "duration": 87752680,
  "status": "passed"
});
formatter.uri("admin_changes_svarsgrupp_användare_settings.feature");
formatter.feature({
  "line": 1,
  "name": "Admin changes Svarsgrupp Användare settings",
  "description": "In order to be able to change the Användare settings as per the changing situation\nAs a Admin\nI want to change Svarsgrupp Användare settings",
  "id": "admin-changes-svarsgrupp-användare-settings",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2190530411,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 5,
      "value": "# unclear as to what is msisdn"
    },
    {
      "line": 6,
      "value": "# cannot change fixednumber"
    },
    {
      "line": 7,
      "value": "# cannot change Inloggad/Ej inloggad"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 10,
  "name": "Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Admin goes to Admin Web Ab section",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on Start",
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
  "duration": 1743273711,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2867661925,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1512982853,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Användare 1 of Svarsgrupp node nr 1",
  "description": "Note: new adm or not will take only two values Användare or COMPANY_ADMIN",
  "id": "admin-changes-svarsgrupp-användare-settings;användare-1-of-svarsgrupp-node-nr-1",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Admin clicks on the link of Svarsgrupp Användare nr 1",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Admin changes Svarsgrupp Användare settings:",
  "rows": [
    {
      "cells": [
        "new first name",
        "Sara"
      ],
      "line": 22
    },
    {
      "cells": [
        "new last name",
        "Vickman"
      ],
      "line": 23
    },
    {
      "cells": [
        "new adm or not",
        "COMPANY_ADMIN"
      ],
      "line": 24
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Admin navigates back from Användare setting page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Admin verifies the changes in Svarsgrupp Användare nr 1",
  "keyword": "And "
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
  "duration": 5576999588,
  "status": "passed"
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
  "duration": 572977951,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1589473464,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1898696777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 52
    }
  ],
  "location": "Steps.adminClicksOnTheLinkOfSvarsgruppAnvändareNr(int)"
});
formatter.result({
  "duration": 1771627987,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminChangesSvarsgruppAnvändareSettings(String,String\u003e)"
});
formatter.result({
  "duration": 3068652837,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminNavigatesBackFromAnvändareSettingPage()"
});
formatter.result({
  "duration": 942253180,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 2092513687,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1806853482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "Steps.adminVerifiesTheChangesInSvarsgruppAnvändareNr(int)"
});
formatter.result({
  "duration": 566224025,
  "status": "passed"
});
formatter.after({
  "duration": 85601939,
  "status": "passed"
});
formatter.uri("admin_clicks_on_start_of_admin _web _ab_section.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on Start of Admin Web Ab section",
  "description": "In order to be able to navigate through different parts of Company start Page\nAs an Admin\nI want to click on start of Admin Web Ab section",
  "id": "admin-clicks-on-start-of-admin-web-ab-section",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2159975112,
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
  "duration": 1768162634,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2969190502,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1482119635,
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
  "duration": 554250131,
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
  "duration": 536771397,
  "status": "passed"
});
formatter.after({
  "duration": 68254166,
  "status": "passed"
});
formatter.uri("admin_clicks_on_tab_växelöversikt.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on tab Växelöversikt",
  "description": "In order to expand Växelöversikt and observe its content\nAs a Admin\nI want to click on tab Växelöversikt",
  "id": "admin-clicks-on-tab-växelöversikt",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2102433166,
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
  "duration": 1709221853,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2874355557,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1499268925,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-tab-växelöversikt;tab-växelöversikt-is-clicked",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Tab Växelöversikt expanded",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Admin Web AB tree structure is shown",
  "keyword": "And "
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
  "duration": 6929791874,
  "status": "passed"
});
formatter.match({
  "location": "Steps.tabVäxelöversiktExpanded()"
});
formatter.result({
  "duration": 1396736347,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminWebAbTreeStructureIsShown()"
});
formatter.result({
  "duration": 554949549,
  "status": "passed"
});
formatter.after({
  "duration": 70219263,
  "status": "passed"
});
formatter.before({
  "duration": 2121417727,
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
  "duration": 1697802302,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2868653955,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1485000498,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Checking if all Menystyrning are shown",
  "description": "",
  "id": "admin-clicks-on-tab-växelöversikt;checking-if-all-menystyrning-are-shown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "There are 3 Menystyrning",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Under Admin Web AB, all Menystyrning are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.thereAre(int)"
});
formatter.result({
  "duration": 113070,
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
  "duration": 6427881043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 24
    }
  ],
  "location": "Steps.underAdminWebAbAllAreShown(String)"
});
formatter.result({
  "duration": 606418840,
  "status": "passed"
});
formatter.after({
  "duration": 69938864,
  "status": "passed"
});
formatter.before({
  "duration": 2249780250,
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
  "duration": 1669550062,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2852346996,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1429894901,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Checking if all Svarsgrupp are shown",
  "description": "",
  "id": "admin-clicks-on-tab-växelöversikt;checking-if-all-svarsgrupp-are-shown",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "There are 3 Svarsgrupp",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "Under Admin Web AB, all Svarsgrupp are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "Steps.thereAre(int)"
});
formatter.result({
  "duration": 135783,
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
  "duration": 7092251689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 24
    }
  ],
  "location": "Steps.underAdminWebAbAllAreShown(String)"
});
formatter.result({
  "duration": 601639349,
  "status": "passed"
});
formatter.after({
  "duration": 68330777,
  "status": "passed"
});
formatter.uri("admin_clicks_on_the_användare_link.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on the Användare link",
  "description": "In order to check if the Användare link works\nAs a Admin\nI want to click on the Användare link",
  "id": "admin-clicks-on-the-användare-link",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Användare is expanded",
  "description": "",
  "id": "admin-clicks-on-the-användare-link;användare-is-expanded",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin expands Användare",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Användare node nr \u003cnodeNr\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin clicks on the Användare link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-clicks-on-the-användare-link;användare-is-expanded;",
  "rows": [
    {
      "cells": [
        "nodeNr"
      ],
      "line": 19,
      "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 21,
      "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 22,
      "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2119301566,
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
  "duration": 1665473892,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2897226728,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1491748104,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Användare is expanded",
  "description": "",
  "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin expands Användare",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Användare node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin clicks on the Användare link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6370942117,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsAnvändare()"
});
formatter.result({
  "duration": 1674159564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Användare",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 36
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 557706610,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1582573621,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 604592701,
  "status": "passed"
});
formatter.after({
  "duration": 89616908,
  "status": "passed"
});
formatter.before({
  "duration": 2120281695,
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
  "duration": 1714111210,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2824538303,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1431689976,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Användare is expanded",
  "description": "",
  "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin expands Användare",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Användare node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin clicks on the Användare link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6933513399,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsAnvändare()"
});
formatter.result({
  "duration": 1636344437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Användare",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 571102976,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1573812430,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 584022049,
  "status": "passed"
});
formatter.after({
  "duration": 81453956,
  "status": "passed"
});
formatter.before({
  "duration": 2120968004,
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
  "duration": 1735737097,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2878852836,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1499473020,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Användare is expanded",
  "description": "",
  "id": "admin-clicks-on-the-användare-link;användare-is-expanded;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin expands Användare",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Användare node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin clicks on the Användare link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6937941747,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsAnvändare()"
});
formatter.result({
  "duration": 1645732325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Användare",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 36
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 557964308,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1543476230,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 617146788,
  "status": "passed"
});
formatter.after({
  "duration": 79187320,
  "status": "passed"
});
formatter.uri("admin_clicks_on_the_menystyrning_link.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on the Menystyrning link",
  "description": "In order to check if the Menystyrning link works\nAs a Admin\nI want to click on the Menystyrning link",
  "id": "admin-clicks-on-the-menystyrning-link",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr \u003cnodeNr\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;",
  "rows": [
    {
      "cells": [
        "nodeNr"
      ],
      "line": 18,
      "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 20,
      "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 21,
      "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2139400993,
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
  "name": "Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
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
formatter.match({
  "arguments": [
    {
      "val": "http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
      "offset": 13
    }
  ],
  "location": "Steps.adminVisits(String)"
});
formatter.result({
  "duration": 1870317667,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2880516041,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1424900900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6867694191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 567902611,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1372446284,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 596764900,
  "status": "passed"
});
formatter.after({
  "duration": 76069506,
  "status": "passed"
});
formatter.before({
  "duration": 2092259385,
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
  "name": "Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
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
formatter.match({
  "arguments": [
    {
      "val": "http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
      "offset": 13
    }
  ],
  "location": "Steps.adminVisits(String)"
});
formatter.result({
  "duration": 1742514767,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2845244590,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1505033339,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 7001714242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564214009,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1467647356,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 566571041,
  "status": "passed"
});
formatter.after({
  "duration": 81486508,
  "status": "passed"
});
formatter.before({
  "duration": 2223051466,
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
  "name": "Admin visits http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
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
formatter.match({
  "arguments": [
    {
      "val": "http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER\u003dSelenium2\u0026IDP\u003dTIWSS\u0026MO_ROLE\u003dCUSTOMER_SUPPORT",
      "offset": 13
    }
  ],
  "location": "Steps.adminVisits(String)"
});
formatter.result({
  "duration": 1701655890,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2842085433,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1466925604,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-menystyrning-link;tab-växelöversikt-is-clicked;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Menystyrning link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6794833804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564716240,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1391740501,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 565077823,
  "status": "passed"
});
formatter.after({
  "duration": 78785010,
  "status": "passed"
});
formatter.uri("admin_clicks_on_the_svarsgrupp_link.feature");
formatter.feature({
  "line": 1,
  "name": "Admin clicks on the Svarsgrupp link",
  "description": "In order to check if the Svarsgrupp link works\nAs a Admin\nI want to click on the Svarsgrupp link",
  "id": "admin-clicks-on-the-svarsgrupp-link",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003cnodeNr\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;",
  "rows": [
    {
      "cells": [
        "nodeNr"
      ],
      "line": 18,
      "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 19,
      "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 20,
      "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 21,
      "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2260207046,
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
  "duration": 1741697094,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2869607722,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1474418579,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 5660823009,
  "status": "passed"
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
  "duration": 571671636,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1378894794,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 573792135,
  "status": "passed"
});
formatter.after({
  "duration": 80008942,
  "status": "passed"
});
formatter.before({
  "duration": 2332460377,
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
  "duration": 1741564556,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2817975968,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1453673586,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6528315266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564444867,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1378242074,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 562748059,
  "status": "passed"
});
formatter.after({
  "duration": 75677515,
  "status": "passed"
});
formatter.before({
  "duration": 2288344993,
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
  "duration": 1746537267,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2924051648,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1500766233,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Tab Växelöversikt is clicked",
  "description": "",
  "id": "admin-clicks-on-the-svarsgrupp-link;tab-växelöversikt-is-clicked;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on the Svarsgrupp link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Admin gets forwarded to correct page",
  "keyword": "Then "
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
  "duration": 6530749232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 566933919,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnTheLink()"
});
formatter.result({
  "duration": 1382352757,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGetsForwardedToCorrectPage()"
});
formatter.result({
  "duration": 573107845,
  "status": "passed"
});
formatter.after({
  "duration": 76829892,
  "status": "passed"
});
formatter.uri("admin_expands_användare.feature");
formatter.feature({
  "line": 1,
  "name": "Admin expands Användare",
  "description": "In order to check if all Användare are shown\nAs a Admin\nI want to expand Användare",
  "id": "admin-expands-användare",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2129776968,
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
  "duration": 1724264395,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2850012873,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1479534976,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking if all Användare are shown",
  "description": "",
  "id": "admin-expands-användare;checking-if-all-användare-are-shown",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@prob"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "There are 10 Användare",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin expands Användare",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Under Admin Web AB, all Användare are shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 10
    }
  ],
  "location": "Steps.thereAre(int)"
});
formatter.result({
  "duration": 109011,
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
  "duration": 7240168781,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsAnvändare()"
});
formatter.result({
  "duration": 1670885372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Användare",
      "offset": 24
    }
  ],
  "location": "Steps.underAdminWebAbAllAreShown(String)"
});
formatter.result({
  "duration": 738689388,
  "status": "passed"
});
formatter.after({
  "duration": 67603215,
  "status": "passed"
});
formatter.before({
  "duration": 2259343767,
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
  "duration": 1892451049,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2837197327,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1469023865,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Checking if Användare is listed with name, fixednumber, adm or not, Inloggad/Ej inloggad",
  "description": "",
  "id": "admin-expands-användare;checking-if-användare-is-listed-with-name,-fixednumber,-adm-or-not,-inloggad/ej-inloggad",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "Admin expands Användare",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "All Användare are listed with name",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "All Användare are listed with fixednumber",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "All Användare are listed with adm or not",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "All Användare are listed with Inloggad/Ej inloggad",
  "keyword": "And "
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
  "duration": 7401864838,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsAnvändare()"
});
formatter.result({
  "duration": 1668725798,
  "status": "passed"
});
formatter.match({
  "location": "Steps.allAnvändareAreListedWithName()"
});
formatter.result({
  "duration": 738210124,
  "status": "passed"
});
formatter.match({
  "location": "Steps.allAnvändareAreListedWithFixednumber()"
});
formatter.result({
  "duration": 707512906,
  "status": "passed"
});
formatter.match({
  "location": "Steps.allAnvändareAreListedWithAdmOrNot()"
});
formatter.result({
  "duration": 710336810,
  "status": "passed"
});
formatter.match({
  "location": "Steps.allAnvändareAreListedWithInloggadEjInloggad()"
});
formatter.result({
  "duration": 821518372,
  "status": "passed"
});
formatter.after({
  "duration": 73926208,
  "status": "passed"
});
formatter.uri("admin_expands_användare_under_svarsgrupp_node.feature");
formatter.feature({
  "line": 1,
  "name": "Admin expands Användare under Svarsgrupp node",
  "description": "In order to see which Användare are logged in under a Svarsgrupp\nAs a Admin\nI want to Admin expands Användare under Svarsgrupp node",
  "id": "admin-expands-användare-under-svarsgrupp-node",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr",
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
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Användare under Svarsgrupp expands",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 19,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 20,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 21,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 22,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2230493347,
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
  "duration": 1719474272,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2873505549,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1442213041,
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
  "duration": 6342244408,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;2",
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
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Användare under Svarsgrupp expands",
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
  "duration": 586573620,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1562507588,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1913828468,
  "status": "passed"
});
formatter.match({
  "location": "Steps.thenAnvändareUnderSvarsgruppExpands()"
});
formatter.result({
  "duration": 818170511,
  "status": "passed"
});
formatter.after({
  "duration": 72552901,
  "status": "passed"
});
formatter.before({
  "duration": 2366309661,
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
  "duration": 1729228235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2865277689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1479806367,
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
  "duration": 6526774352,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Svarsgrupp node nr 2",
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
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Användare under Svarsgrupp expands",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 584351061,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1563622187,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1857538942,
  "status": "passed"
});
formatter.match({
  "location": "Steps.thenAnvändareUnderSvarsgruppExpands()"
});
formatter.result({
  "duration": 775466699,
  "status": "passed"
});
formatter.after({
  "duration": 69864899,
  "status": "passed"
});
formatter.before({
  "duration": 2125358450,
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
  "duration": 1756045259,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2851686276,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1437439623,
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
  "duration": 6367641994,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "Admin is checking Svarsgrupp node nr 3",
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
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Användare under Svarsgrupp expands",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 678506364,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1562760840,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1835049455,
  "status": "passed"
});
formatter.match({
  "location": "Steps.thenAnvändareUnderSvarsgruppExpands()"
});
formatter.result({
  "duration": 761502428,
  "status": "passed"
});
formatter.after({
  "duration": 77203937,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr \u003csvarsgruppAnvändareNodeNr\u003e is listed with name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr \u003csvarsgruppAnvändareNodeNr\u003e is listed with fixednumber",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr \u003csvarsgruppAnvändareNodeNr\u003e is listed with adm or not",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr \u003csvarsgruppAnvändareNodeNr\u003e is listed with Inloggad/Ej inloggad",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr",
        "svarsgruppAnvändareNodeNr"
      ],
      "line": 34,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;1"
    },
    {
      "cells": [
        "2",
        "1"
      ],
      "line": 35,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;2"
    },
    {
      "cells": [
        "2",
        "2"
      ],
      "line": 36,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;3"
    },
    {
      "cells": [
        "2",
        "3"
      ],
      "line": 37,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;4"
    },
    {
      "cells": [
        "2",
        "4"
      ],
      "line": 38,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;5"
    },
    {
      "cells": [
        "2",
        "5"
      ],
      "line": 39,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;6"
    },
    {
      "cells": [
        "2",
        "6"
      ],
      "line": 40,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;7"
    },
    {
      "cells": [
        "2",
        "7"
      ],
      "line": 41,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;8"
    },
    {
      "cells": [
        "2",
        "8"
      ],
      "line": 42,
      "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2325636129,
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
  "duration": 1694839525,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2865941984,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1500987184,
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
  "duration": 6378220803,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 1 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 1 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 1 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 1 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 574830588,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1558099235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1879336147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 566869008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 566757705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 566839159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 558395958,
  "status": "passed"
});
formatter.after({
  "duration": 73264677,
  "status": "passed"
});
formatter.before({
  "duration": 2246497542,
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
  "duration": 1758133235,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2859042766,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1495548134,
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
  "duration": 6945795508,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 2 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 2 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 2 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 2 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 569504145,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1593543090,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1867498106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 573848473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 567505529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 569430008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 571200904,
  "status": "passed"
});
formatter.after({
  "duration": 76221880,
  "status": "passed"
});
formatter.before({
  "duration": 2139555982,
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
  "duration": 1714345279,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2883215135,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1483888496,
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
  "duration": 7253694901,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 3 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 3 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 3 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 3 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 562186010,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1587184282,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1876513424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 574871232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 570618877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 575256155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 567341467,
  "status": "passed"
});
formatter.after({
  "duration": 71904535,
  "status": "passed"
});
formatter.before({
  "duration": 2152554041,
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
  "duration": 1711258548,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2882232527,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1480868117,
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
  "duration": 6212613795,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 4 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 4 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 4 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 4 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 571623447,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1554420507,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1851925400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 568595429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 570044560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 568606502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 556679699,
  "status": "passed"
});
formatter.after({
  "duration": 72574910,
  "status": "passed"
});
formatter.before({
  "duration": 2204631424,
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
  "duration": 1757020570,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2835092185,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1493033372,
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
  "duration": 6509550340,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 5 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 5 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 5 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 5 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564583567,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1763128857,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1952201043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 600788803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 557858601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 559079097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 554157441,
  "status": "passed"
});
formatter.after({
  "duration": 68769972,
  "status": "passed"
});
formatter.before({
  "duration": 2317620968,
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
  "duration": 1689015482,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2825367853,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1493510078,
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
  "duration": 6624557134,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 6 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 6 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 6 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 6 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 571974899,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1600898921,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1895741808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 587142574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 556610302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 556116239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 558142258,
  "status": "passed"
});
formatter.after({
  "duration": 68628112,
  "status": "passed"
});
formatter.before({
  "duration": 2167704639,
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
  "duration": 1813607722,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2936869170,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1570456358,
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
  "duration": 6494624725,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 7 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 7 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 7 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 7 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 573826659,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1614638577,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1831468321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 567468169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 564173836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 567431816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 552515786,
  "status": "passed"
});
formatter.after({
  "duration": 67759391,
  "status": "passed"
});
formatter.before({
  "duration": 2369949334,
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
  "duration": 2017208852,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2893553742,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1461606769,
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
  "duration": 6750663164,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Given Svarsgrupp node nr and given Svarsgrupp Användare node nr",
  "description": "",
  "id": "admin-expands-användare-under-svarsgrupp-node;given-svarsgrupp-node-nr-and-given-svarsgrupp-användare-node-nr;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Admin expands Svarsgrupp",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Under Svarsgrupp node, Admin tries to expand Användare",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Svarsgrupp Användare nr 8 is listed with name",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Svarsgrupp Användare nr 8 is listed with fixednumber",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Svarsgrupp Användare nr 8 is listed with adm or not",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Svarsgrupp Användare nr 8 is listed with Inloggad/Ej inloggad",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 566096030,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1570971341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.whenAdminTriesToExpandAnvändareUnderSvarsgruppNode()"
});
formatter.result({
  "duration": 1866758889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithName(int)"
});
formatter.result({
  "duration": 601028649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithFixedNumber(int)"
});
formatter.result({
  "duration": 557711860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithAdmOrNot(int)"
});
formatter.result({
  "duration": 554170300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 24
    }
  ],
  "location": "Steps.svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int)"
});
formatter.result({
  "duration": 572901981,
  "status": "passed"
});
formatter.after({
  "duration": 75111116,
  "status": "passed"
});
formatter.uri("admin_expands_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin expands Svarsgrupp",
  "description": "In order to see the Svarsgrupp settings\nAs a Admin\nI want to expand Svarsgrupp",
  "id": "admin-expands-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003csvarsgruppNodeNr\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "For this node, Användare logged in is visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;",
  "rows": [
    {
      "cells": [
        "svarsgruppNodeNr"
      ],
      "line": 17,
      "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 18,
      "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 19,
      "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2233602871,
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
  "duration": 1731948041,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2828793885,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1432871200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "For this node, Användare logged in is visible",
  "keyword": "Then "
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
  "duration": 6503504385,
  "status": "passed"
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
  "duration": 570259664,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1602639268,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeAnvändareloggedInIsVisible()"
});
formatter.result({
  "duration": 556051365,
  "status": "passed"
});
formatter.after({
  "duration": 71315336,
  "status": "passed"
});
formatter.before({
  "duration": 2357592764,
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
  "duration": 1725554398,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2842768562,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1516925547,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-expands-svarsgrupp;given-svarsgrupp-node-nr;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Admin expands Svarsgrupp",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "For this node, Användare logged in is visible",
  "keyword": "Then "
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
  "duration": 7173048573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 561416387,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsSvarsgrupp()"
});
formatter.result({
  "duration": 1574752827,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeAnvändareloggedInIsVisible()"
});
formatter.result({
  "duration": 559362886,
  "status": "passed"
});
formatter.after({
  "duration": 74753689,
  "status": "passed"
});
formatter.uri("admin_finds_title_number_lock_icon_link_is_visible_under_menystyrning.feature");
formatter.feature({
  "line": 1,
  "name": "Admin finds title, number, lock icon, link is visible under Menystyrning",
  "description": "In order to check if all the nodes are visible inside given Menystyrning\nAs a Admin\nI want to check given node of Menystyrning",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Given Menystyrning node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr \u003cnodeNr\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;",
  "rows": [
    {
      "cells": [
        "nodeNr"
      ],
      "line": 20,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 21,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 22,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 23,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2213976627,
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
  "duration": 1714235888,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2890515771,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1468976835,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Given Menystyrning node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 6984427302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "1",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 564467919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 554506807,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 580974684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 553239367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 547947300,
  "status": "passed"
});
formatter.after({
  "duration": 73876838,
  "status": "passed"
});
formatter.before({
  "duration": 2343650645,
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
  "duration": 1783868444,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2849072860,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1531679599,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Given Menystyrning node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 6015489356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 572929666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 563656434,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 575054523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 558525027,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 547483590,
  "status": "passed"
});
formatter.after({
  "duration": 69993213,
  "status": "passed"
});
formatter.before({
  "duration": 2179153895,
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
  "duration": 1755429537,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2848456940,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1481345063,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Given Menystyrning node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-menystyrning;given-menystyrning-node-nr;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Menystyrning node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 6807237835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Menystyrning",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 39
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 563376238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 553845685,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 574322084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 551680165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 544182352,
  "status": "passed"
});
formatter.after({
  "duration": 72229590,
  "status": "passed"
});
formatter.uri("admin_finds_title_number_lock_icon_link_is_visible_under_svarsgrupp.feature");
formatter.feature({
  "line": 1,
  "name": "Admin finds title, number, lock icon, link is visible under Svarsgrupp",
  "description": "In order to check if all the nodes are visible inside given Svarsgrupp\nAs a Admin\nI want to check given node of Svarsgrupp",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr \u003cnodeNr\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;",
  "rows": [
    {
      "cells": [
        "nodeNr"
      ],
      "line": 20,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 21,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 22,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;3"
    },
    {
      "cells": [
        "3"
      ],
      "line": 23,
      "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2200858333,
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
  "duration": 1728974341,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2914136945,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1538894457,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 6023408725,
  "status": "passed"
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
  "duration": 571163835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 564736991,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 575963303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 551971697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 549417079,
  "status": "passed"
});
formatter.after({
  "duration": 67412917,
  "status": "passed"
});
formatter.before({
  "duration": 2239690987,
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
  "duration": 1749078488,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2850135673,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1494606873,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 2",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 2520605544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "2",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 562253549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 556353920,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 572702750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 560887979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 550048405,
  "status": "passed"
});
formatter.after({
  "duration": 70072735,
  "status": "passed"
});
formatter.before({
  "duration": 2212515867,
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
  "duration": 1724798866,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2909912841,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1521801472,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Given Svarsgrupp node nr",
  "description": "",
  "id": "admin-finds-title,-number,-lock-icon,-link-is-visible-under-svarsgrupp;given-svarsgrupp-node-nr;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Admin is checking Svarsgrupp node nr 3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "For this node, title is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "For this node, number is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "For this node, lock icon is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "For this node, link is visible",
  "keyword": "Then "
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
  "duration": 6946094471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Svarsgrupp",
      "offset": 18
    },
    {
      "val": "3",
      "offset": 37
    }
  ],
  "location": "Steps.adminCheckingNodeNr(String,int)"
});
formatter.result({
  "duration": 561173101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 565477689,
  "status": "passed"
});
formatter.match({
  "location": "Steps.forThisNodeNumberIsVisible()"
});
formatter.result({
  "duration": 571729765,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lock icon",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 553643693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "link",
      "offset": 15
    }
  ],
  "location": "Steps.forThisNodeIsVisible(String)"
});
formatter.result({
  "duration": 544698419,
  "status": "passed"
});
formatter.after({
  "duration": 71563429,
  "status": "passed"
});
});