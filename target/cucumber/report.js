$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org/cukesSel/features/admin_expands _users.feature");
formatter.feature({
  "line": 1,
  "name": "Admin expands Users",
  "description": "In order to check if all users are shown\nAs a Admin\nI want to expand Users",
  "id": "admin-expands-users",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3810421853,
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
  "duration": 1982941029,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 3007823992,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "duration": 1499494712,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking if all Users are shown",
  "description": "",
  "id": "admin-expands-users;checking-if-all-users-are-shown",
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
  "name": "There are 10 Users",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Admin clicks on tab Växelöversikt",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Admin expands Users",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "Under Admin Web AB, all Users are shown",
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
  "duration": 939220,
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
  "duration": 6927833799,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminExpandsUsers()"
});
formatter.result({
  "duration": 10458609567,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for presence of element located by: By.xpath: //div[h3[div[contains(text(), \u0027Users\u0027) and @class\u003d\u0027ng-binding\u0027]]]//div/img[@alt \u003d \u0027Expandera\u0027]\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027hogwarts\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-32-generic\u0027, java.version: \u00271.8.0_72\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7173e6c4-d0fe-4ddc-8d42-1fffdddb6209\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:261)\n\tat org.cukesSel.step_definitions.Support.getElementSafely(Support.java:40)\n\tat org.cukesSel.step_definitions.Steps.adminExpandsUsers(Steps.java:124)\n\tat ✽.When Admin expands Users(src/test/resources/org/cukesSel/features/admin_expands _users.feature:15)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[h3[div[contains(text(), \u0027Users\u0027) and @class\u003d\u0027ng-binding\u0027]]]//div/img[@alt \u003d \u0027Expandera\u0027]\"}\nCommand duration or timeout: 16 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027hogwarts\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-32-generic\u0027, java.version: \u00271.8.0_72\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7173e6c4-d0fe-4ddc-8d42-1fffdddb6209\n*** Element info: {Using\u003dxpath, value\u003d//div[h3[div[contains(text(), \u0027Users\u0027) and @class\u003d\u0027ng-binding\u0027]]]//div/img[@alt \u003d \u0027Expandera\u0027]}\n\tat sun.reflect.GeneratedConstructorAccessor13.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:911)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\n\tat org.cukesSel.step_definitions.Support.getElementSafely(Support.java:40)\n\tat org.cukesSel.step_definitions.Steps.adminExpandsUsers(Steps.java:124)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:234)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:74)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:144)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[h3[div[contains(text(), \u0027Users\u0027) and @class\u003d\u0027ng-binding\u0027]]]//div/img[@alt \u003d \u0027Expandera\u0027]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027hogwarts\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-32-generic\u0027, java.version: \u00271.8.0_72\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///tmp/anonymous6042298924213275595webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10723)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///tmp/anonymous6042298924213275595webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10732)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///tmp/anonymous6042298924213275595webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12614)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///tmp/anonymous6042298924213275595webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12619)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///tmp/anonymous6042298924213275595webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12561)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 475705454,
  "status": "passed"
});
formatter.before({
  "duration": 2292253790,
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
  "duration": 730141792,
  "status": "passed"
});
formatter.match({
  "location": "Steps.adminGoesToAdminWebABSection()"
});
formatter.result({
  "duration": 2629086162,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027hogwarts\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-32-generic\u0027, java.version: \u00271.8.0_72\u0027\nDriver info: driver.version: RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ec50ecfb-ebaf-4d96-8b4c-27b899c73671\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:911)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\n\tat org.cukesSel.step_definitions.Support.getElementSafely(Support.java:40)\n\tat org.cukesSel.step_definitions.Steps.adminGoesToAdminWebABSection(Steps.java:56)\n\tat ✽.And Admin goes to Admin Web Ab section(src/test/resources/org/cukesSel/features/admin_expands _users.feature:8)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:911)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\n\tat org.cukesSel.step_definitions.Support.getElementSafely(Support.java:40)\n\tat org.cukesSel.step_definitions.Steps.adminGoesToAdminWebABSection(Steps.java:56)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:234)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:74)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:144)\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\n\t... 68 more\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.adminClicksOnStart()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 19,
  "name": "Checking if Users is listed with name, fixednumber, adm or not, Inloggad/Ej inloggad",
  "description": "",
  "id": "admin-expands-users;checking-if-users-is-listed-with-name,-fixednumber,-adm-or-not,-inloggad/ej-inloggad",
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
  "name": "Admin expands Users",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "All Users are listed with name",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "All Users are listed with fixednumber",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "All Users are listed with adm or not",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "All Users are listed with Inloggad/Ej inloggad",
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
  "status": "skipped"
});
formatter.match({
  "location": "Steps.adminExpandsUsers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.allUsersAreListedWithName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.allUsersAreListedWithFixednumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.allUsersAreListedWithAdmOrNot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.allUsersAreListedWithInloggadEjInloggad()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2092147,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.52.0\u0027, revision: \u00274c2593cfc3689a7fcd7be52549167e5ccc93ad28\u0027, time: \u00272016-02-11 11:22:43\u0027\nSystem info: host: \u0027hogwarts\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.19.0-32-generic\u0027, java.version: \u00271.8.0_72\u0027\nDriver info: driver.version: FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d44.0.1, platform\u003dLINUX, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: ec50ecfb-ebaf-4d96-8b4c-27b899c73671\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:701)\n\tat org.openqa.selenium.firefox.FirefoxDriver.getScreenshotAs(FirefoxDriver.java:341)\n\tat org.cukesSel.step_definitions.Hooks.tearDown(Hooks.java:54)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:234)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:74)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:144)\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:151)\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:353)\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:380)\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:236)\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:184)\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:88)\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:110)\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:71)\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:55)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:90)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:160)\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:380)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\n\t... 43 more\nCaused by: java.net.ConnectException: Connection refused\n\tat java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:350)\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\n\tat java.net.Socket.connect(Socket.java:589)\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:74)\n\tat org.apache.http.impl.conn.DefaultHttpClientConnectionOperator.connect(DefaultHttpClientConnectionOperator.java:134)\n\t... 58 more\n",
  "status": "failed"
});
});