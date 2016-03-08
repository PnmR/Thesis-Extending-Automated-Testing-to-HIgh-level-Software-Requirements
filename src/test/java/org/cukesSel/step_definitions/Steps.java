package org.cukesSel.step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.openqa.selenium.support.ui.ExpectedConditions.*;

/**
 * Created by poonam on 2/14/16.
 */
public class Steps {

    // Create a new instance of the Firefox driver
    private final WebDriver driver = new FirefoxDriver();

    // wait for the server to render all the element
    private WebDriverWait wait = new WebDriverWait(driver, 10);

    private Scenario scenario;

    @Before
    public void before(Scenario scenario) {
        this.scenario = scenario;
    }

    @Given("^Admin visits (https?:\\/\\/.+)$")
    public void adminVisits(String website) throws Throwable {

        // visit the site
        driver.navigate().to(website);

        takeNSaveScreenshots("screenshots/WebsiteFirstLook.png");

    }

    @When("^Admin goes to Admin Web Ab section$")
    public void adminGoesToAdminWebABSection() throws Throwable {
        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
        searchInput.sendKeys("Admin Web Ab"); // writing into the form

        WebElement adminTab = getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
        wait.until(elementToBeClickable(adminTab));
        adminTab.click();

    }

    @When("^Admin clicks on Start")
    public void adminClicksOnStart() throws Throwable {

        WebElement startMenu = getElementSafely("//a[@id= 'start-menu-id' and contains(.,'Start')]", driver, wait);
        wait.until(elementToBeClickable(startMenu));
        startMenu.click();

    }

    @Then("^([\\wöåä]+) tab should be visible$")
    public void tabShouldBeVisible(String tabArg) throws Throwable {

        String tabXpath = String.format("//a[strong[contains(text(),'%s')]]", tabArg);
        WebElement tab = getElementSafely(tabXpath, driver, wait);

        assertThat(tab.isDisplayed(), is(equalTo(Boolean.TRUE)));

    }

    @When("^Admin clicks on tab ([\\wåöä]+)$")
    public void adminClicksOnTab(String tabName) throws Throwable {
        String tabXpath = String.format("//a[strong[contains(text(),'Växelöversikt') and not(@disabled)]]");
        WebElement tab = getElementSafely(tabXpath, driver, wait);
        wait.until(elementToBeClickable(tab));
        tab.click();

    }

    @Then("^Tab Växelöversikt expanded")
    public void tabVäxelöversiktExpanded() throws Throwable {
        String expandedTabXpath = String.format("//div[@class = 'company-overview ng-isolate-scope']");
        WebElement expandedTab = getElementSafely(expandedTabXpath, driver, wait);
        assertThat(expandedTab.isDisplayed(), is(equalTo(Boolean.TRUE)));

    }

    @Then("^Admin Web AB tree structure is shown$")
    public void adminWebAbTreeStructureIsShown() throws Throwable {
        String adminTreeXpath = String.format("//li[@class = 'overview-row last-child']");
        List<WebElement> adminTree = getElementsSafely(adminTreeXpath, driver, wait);

        assertThat(adminTree.size(), is(greaterThan(1))); // checks if there are more than one li element

    }

    private int gruppItemNum;

    @Given("^There (?:is|are) (\\d+) [\\wåöä]+$")
    public void thereAre(int number) throws Throwable {
        gruppItemNum = number;
    }

    @When("^Admin expands Users$")
    public void adminExpandsUsers() throws Throwable {
        String userXpandXpath = String.format("//div[h3[div[contains(text(), 'Users') and @class='ng-binding']]]//div/img[@alt = 'Expandera']");

        WebElement userXpand = getElementSafely(userXpandXpath, driver, wait);

        wait.until(elementToBeClickable(userXpand));
        userXpand.click();
    }


    //@Then ("^Under Admin Web AB, all ([A-z]+(?:er|ar)) are shown$")
    @Then("^Under Admin Web AB, all ([A-zöåä]+) are shown$")
    public void underAdminWebAbAllAreShown(String grupp) throws Throwable {
        String gruppXpath;
        if (grupp.equals("Users")) {
            gruppXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        } else {
            gruppXpath = String.format("//div[contains(text(), '%s') and @class='ng-binding']", grupp);
        }
        List<WebElement> gruppList = getElementsSafely(gruppXpath, driver, wait);
        int displayedElementUnderGrupp = 0;
        for (WebElement webEl : gruppList) {
            if (webEl.isDisplayed()) {
                displayedElementUnderGrupp++;
            }
        }
        assertThat(displayedElementUnderGrupp, is(equalTo(gruppItemNum)));

    }

    private String gruppText;

    @Given("^Admin is checking ([A-z]+) node nr (\\d+)$")
    public void adminCheckingNodeNr(String grupp, int nodeNum) throws Throwable {
        String gruppListXpath;
        if (grupp.equals("Users")) {
            gruppListXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        } else {
            gruppListXpath = String.format("//div/h3/div[contains(text(), '%s') and @class='ng-binding']", grupp);
        }
        List<WebElement> gruppList = getElementsSafely(gruppListXpath, driver, wait);
        gruppText = gruppList.get(nodeNum - 1).getText(); // index starts from 0

    }

    @Then("^For this node, (title|lock icon|link) is visible$")
    public void forThisNodeIsVisible(String item) throws Throwable {
        String partItemXpath = "";

        switch (item) {
            case "title":
                break;
            case "lock icon":
                partItemXpath = "/..//span[img]";
                break;
            case "link":
                partItemXpath = "/../a";
                break;
        }

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", gruppText);

        itemXpath.concat(partItemXpath);
        WebElement nodeItem = getElementSafely(itemXpath, driver, wait);

        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }


    @Then("^For this node, number is visible$")
    public void forThisNodeNumberIsVisible() throws Throwable {

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", gruppText);
        WebElement nodeItem = getElementSafely(itemXpath, driver, wait);
        String text = nodeItem.getText();
        text = text.substring(text.indexOf('(') + 1, text.indexOf(')'));
        assertThat(isInteger(text), is(equalTo(Boolean.TRUE)));
        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    @When("^Admin expands Svarsgrupp$")
    public void adminExpandsSvarsgrupp() throws Throwable {

        String xpandXpath = String.format("//div[h3[div[contains(text(),'%s') and @class='ng-binding']]]//div/img[@alt = 'Expandera']", gruppText);
        WebElement xpand = getElementSafely(xpandXpath, driver, wait);
        wait.until(elementToBeClickable(xpand));
        xpand.click();
    }

    @Then("^For this node, Users logged in is visible$")
    public void forThisNodeUsersloggedInIsVisible() throws Throwable {
        String usersUndersvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]", gruppText);
        WebElement usersUndersvarsgrupp = getElementSafely(usersUndersvarsgruppXpath, driver, wait);

        assertThat(usersUndersvarsgrupp.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    @When("^Under Svarsgrupp node, Admin tries to expand Users$")
    public void whenAdminTriesToExpandAnvändareUnderSvarsgruppNode() throws Throwable {
        String usersExpandUnderSvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]//div[img[@alt ='Expandera']]", gruppText);
        WebElement usersExpandUnderSvarsgrupp = getElementSafely(usersExpandUnderSvarsgruppXpath, driver, wait);
        wait.until(elementToBeClickable(usersExpandUnderSvarsgrupp));
        usersExpandUnderSvarsgrupp.click();
    }

    @Then("^Users under Svarsgrupp expands$")
    public void thenUsersUnderSvarsgruppExpands() throws Throwable {
        String underSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul", gruppText);
        List<WebElement> underSvarsgruppUsers = getElementsSafely(underSvarsgruppUsersXpath, driver, wait);
        int displayedElementUnderSvarsgruppUsers = 0;
        for (WebElement element : underSvarsgruppUsers) {
            if (element.isDisplayed()) {
                displayedElementUnderSvarsgruppUsers++;
            }
        }
        assertThat(displayedElementUnderSvarsgruppUsers, is(greaterThan(1)));

    }

    @Then("^Users nr (\\d+) is listed with name$")
    public void usersNrIsListedWithName(int userNr) {
        String numNameRoleOfSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppUsers = getElementsSafely(numNameRoleOfSvarsgruppUsersXpath, driver, wait);
        String usersNumNameRole = numNameRoleOfSvarsgruppUsers.get(userNr - 1).getText();
        String usersName = usersNumNameRole.substring(userNr - 1, usersNumNameRole.indexOf("("));

        assertThat(usersName.isEmpty(), is(equalTo(Boolean.FALSE)));

    }

    @Then("^Users nr (\\d+) is listed with fixednumber$")
    public void usersNrIsListedWithFixedNumber(int userNr) {
        String numNameRoleOfSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppUsers = getElementsSafely(numNameRoleOfSvarsgruppUsersXpath, driver, wait);
        String usersNumNameRole = numNameRoleOfSvarsgruppUsers.get(userNr - 1).getText();
        String usersFixedNumberText = usersNumNameRole.substring(usersNumNameRole.indexOf("(") + 1, usersNumNameRole.indexOf(")"));
        String[] usersFixedNumberList = usersFixedNumberText.split(",");

        for (String usersFixedNumber : usersFixedNumberList) {
            usersFixedNumber = usersFixedNumber.trim();
            assertThat(isInteger(usersFixedNumber), is(equalTo(Boolean.TRUE)));
        }

    }

    @Then("^Users nr (\\d+) is listed with adm or not$")
    public void usersNrIsListedWithAdmOrNot(int userNr) {
        String numNameRoleOfSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppUsers = getElementsSafely(numNameRoleOfSvarsgruppUsersXpath, driver, wait);
        String usersNumNameRole = numNameRoleOfSvarsgruppUsers.get(userNr - 1).getText();
        String usersAdm;
        try {
            usersAdm = usersNumNameRole.substring(usersNumNameRole.indexOf("(", usersNumNameRole.indexOf("(") + 1) + 1, usersNumNameRole.indexOf(")", usersNumNameRole.indexOf(")") + 1));
        } catch (StringIndexOutOfBoundsException e) {
            usersAdm = "user";
        }

        assertThat(usersAdm.isEmpty(), is(equalTo(Boolean.FALSE)));

    }

    @Then("^Users nr (\\d+) is listed with Inloggad/Ej inloggad$")
    public void usersNrIsListedWithInloggadEjInloggad(int userNr) {
        String logStatusOfSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//span[@class = 'ng-binding ng-scope']", gruppText);
        List<WebElement> logStatusOfSvarsgruppUsers = getElementsSafely(logStatusOfSvarsgruppUsersXpath, driver, wait);
        String usersLogStatus = logStatusOfSvarsgruppUsers.get(userNr - 1).getText();

        assertThat(usersLogStatus.isEmpty(), is(equalTo(Boolean.FALSE)));
    }


    String gruppTitleText, gruppMobNum;

    @When("^Admin clicks on the link$")
    public void adminClicksOnTheLink() throws Throwable {
        String titleXpath;

        if (gruppText.contains("Svarsgrupp") || gruppText.contains("Menystyrning")) {
            titleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[contains(@class, 'ng-binding')]", gruppText);
        } else {
            titleXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        }
        WebElement gruppTitle = getElementSafely(titleXpath, driver, wait);
        gruppTitleText = gruppTitle.getText();
// seems unnecessary since there is not depicted whether the combination of name and num should be unique
//        List<WebElement> numList = getElementsSafely(String.format("//h3//div[contains(text(), '%s')]", grupp), driver, wait);
//        String text = numList.get(nodeIndex).getText();
//        gruppMobNum = text.substring(text.indexOf('('), text.indexOf(')') + 1);

        wait.until(elementToBeClickable(gruppTitle));
        gruppTitle.click();

    }

    @Then("^Admin gets forwarded to correct page$")
    public void adminGetsForwardedToCorrectPage() throws Throwable {
        // seems unnecessary since there is not depicted whether the combination of name and num should be unique
//        String forwardedNumXpath = "//h1[contains(@id, 'change-')]/span[@class = 'h1-number ng-binding']";
//        List<WebElement> forwardedMobNumList = getElementsSafely(forwardedNumXpath, driver, wait);
        String forwardedTitleXpath;

        if (gruppText.contains("Svarsgrupp") || gruppText.contains("Menystyrning")) {
            forwardedTitleXpath = "//h1[contains(@id, 'change-')]/span[@class = 'ng-binding']";
        } else {
            gruppTitleText = gruppTitleText.substring(0, gruppTitleText.indexOf("(")).trim();
            forwardedTitleXpath = "//div[@class= 'tsr-row ng-scope']/div/h1[@class = 'ng-binding']";
        }

        Pattern pattern = Pattern.compile("\"(.*?)\"");

        WebElement forwardedTitle = getElementSafely(forwardedTitleXpath, driver, wait);
//        JOptionPane.showMessageDialog(new JFrame(), forwardedTitle.size());
        Matcher matcher = pattern.matcher(gruppTitleText);
        if (matcher.find()) {
            gruppTitleText = matcher.group(1);
        }
        assertThat(forwardedTitle.getText(), is(equalTo(gruppTitleText)));
//        assertThat(forwardedMobNumList.get(0).getText(), is(equalTo(gruppMobNum)));
    }

    private String changedGruppName;

    @When("^Admin changes name to (.+)$")
    public void adminChangesNameTo(String newName) throws Throwable {
        // click on bytNamn
        String bytNamnXpath = "//h1[contains(@id , 'change-')]/a[not(@disabled) and span[contains(text(), 'Byt namn')]]";
        WebElement bytNamn = getElementSafely(bytNamnXpath, driver, wait);
        wait.until(elementToBeClickable(bytNamn));
        bytNamn.click();

        // writing on the input
        String titleInputXpath = "//h1[contains(@id, 'change-')]/span/input[contains(@name, 'Name')]";
        WebElement titleInput = getElementSafely(titleInputXpath, driver, wait);

        // to write over the input text
        changedGruppName = newName;
        titleInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changedGruppName);
        driver.findElement(By.xpath("//div[@class = 'tsr-header-main']")).click(); //clicking outside to save the change
    }

    @Then("^Admin verifies change$")
    public void adminVerifiesChange() throws Throwable {
        // go back to the page
        driver.navigate().back();

        String gruppTitleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[contains(@class , 'ng-binding')]", gruppText);
        String gruppTitle = getElementSafely(gruppTitleXpath, driver, wait).getText();
        Pattern pattern = Pattern.compile("\"(.*?)\"");
        Matcher matcher = pattern.matcher(gruppTitle);
        if (matcher.find()) {
            gruppTitle = matcher.group(1);
        }
        assertThat(gruppTitle, is(equalTo(changedGruppName)));

    }

    private int listSizeBeforeTryingToExpand, listSizeAfterTryingToExpand;

    @When("^Admin tries to expand ([A-zöåä /]+)$")
    public void adminTriesToExpand(String expandText) throws Throwable {
        String underGruppXpath = String.format("//ul[contains(@data-title,'%s')]/li/ul//li", gruppText);
        List<WebElement> underGrupp = getElementsSafely(underGruppXpath, driver, wait);
        listSizeBeforeTryingToExpand = underGrupp.size();
        //click inga bla bla
        String circleUnderGruppXpath = String.format("//ul[contains(@data-title,'%s')]//li/div[contains(. , '%s')]/span[@class = 'circle']", gruppText, expandText);
        WebElement circleUnderGrupp = getElementSafely(circleUnderGruppXpath, driver, wait);
        circleUnderGrupp.click();
        listSizeAfterTryingToExpand = underGrupp.size();

    }

    @Then("^It does not expand$")
    public void itDoesNotExpand() throws Throwable {
        assertThat(listSizeAfterTryingToExpand, is(equalTo(listSizeBeforeTryingToExpand)));
    }

    @Given("^Admin clicks on the link of Svarsgrupp Users nr (\\d+)$")
    public void adminClicksOnTheLinkOfSvarsgruppUsersNr(int userNr) throws Throwable {
        String svarsgruppUsersLinkXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//a[span[@class = 'overview-link-text ng-binding' and @title]]", gruppText);
        List<WebElement> svarsgruppUsersLinkList = getElementsSafely(svarsgruppUsersLinkXpath, driver, wait);
        WebElement svarsgruppUsersLink = svarsgruppUsersLinkList.get(userNr - 1);
        wait.until(elementToBeClickable(svarsgruppUsersLink));
        svarsgruppUsersLink.click();

    }

    private Map<String, String> changes;

    @When("^Admin changes Svarsgrupp user settings:$")
    public void adminChangesSvarsgruppUserSettings(Map<String, String> changes) throws Throwable {
        this.changes = changes;

        String firstNameInputXpath = String.format("//input[@id = 'change-firstname-id']");
        WebElement firstNameInput = getElementSafely(firstNameInputXpath, driver, wait);
        wait.until(visibilityOf(firstNameInput));
        firstNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changes.get("new first name"));

        String lastNameInputXpath = String.format("//input[@id = 'change-lastname-id']");
        WebElement lastNameInput = getElementSafely(lastNameInputXpath, driver, wait);
        lastNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changes.get("new last name"));

        String admOrNotXpath = String.format("//label[input[@type = 'radio' and @value = '%s']]", changes.get("new adm or not"));
        WebElement admOrNot = getElementSafely(admOrNotXpath, driver, wait);
        wait.until(elementToBeClickable(admOrNot));
        admOrNot.click();


        String saveXpath = String.format("//input[@id = 'save-user-id']");
        WebElement saveList = getElementSafely(saveXpath, driver, wait);
        wait.until(elementToBeClickable(saveList));
        saveList.click();

    }

    @Then("^Admin navigates back from user setting page$")
    public void adminNavigatesBackFromUserSettingPage() throws Throwable {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.navigate().back();

    }

    @Then("^Admin verifies the changes in Svarsgrupp Users nr (\\d+)$")
    public void adminVerifiesTheChangesInSvarsgruppUsersNr(int userNr) throws Throwable {

        String numNameRoleOfSvarsgruppUsersXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppUsers = getElementsSafely(numNameRoleOfSvarsgruppUsersXpath, driver, wait);
        String usersNumNameRole = numNameRoleOfSvarsgruppUsers.get(userNr - 1).getText();
        String usersFullName = usersNumNameRole.substring(userNr - 1, usersNumNameRole.indexOf("("));
        String[] name = usersFullName.split(" ");
        String firstName = name[0];
        String lastName = name[1];
        String usersAdm;
        try {
            usersAdm = usersNumNameRole.substring(usersNumNameRole.indexOf("(", usersNumNameRole.indexOf("(") + 1) + 1, usersNumNameRole.indexOf(")", usersNumNameRole.indexOf(")") + 1));
        } catch (StringIndexOutOfBoundsException e) {
            usersAdm = "user";
        }

        String admOrNot = "";
        switch (changes.get("new adm or not")) {
            case "USER":
                admOrNot = "user";
                break;
            case "COMPANY_ADMIN":
                admOrNot = "adm";
                break;
        }
        assertThat(usersAdm, is(equalTo(admOrNot)));
        assertThat(firstName, is(equalTo(changes.get("new first name"))));
        assertThat(lastName, is(equalTo(changes.get("new last name"))));

    }

    public Boolean isInteger(String s) {
        try {
            Long.parseLong(s);
            return Boolean.TRUE;
        } catch (NumberFormatException e) {
            return Boolean.FALSE;
        }
    }

    public static WebElement getElementSafely(String myXpathArg, WebDriver driver, WebDriverWait wait) {
        wait.until(presenceOfElementLocated(By.xpath(myXpathArg)));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.findElement(By.xpath(myXpathArg));

    }


    public static List<WebElement> getElementsSafely(String myXpathArg, WebDriver driver, WebDriverWait wait) {
        wait.until(presenceOfAllElementsLocatedBy(By.xpath(myXpathArg)));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.findElements(By.xpath(myXpathArg));

    }

    public void takeNSaveScreenshots(String fileName) {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);

        try {
            FileUtils.copyFile(scrFile, new File(fileName));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @After()
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); // ... and embed it in the report.
        }

        driver.quit();
    }

    @After()
    public void closeBrowser() {

        // close the browser
        driver.quit();
    }


}
