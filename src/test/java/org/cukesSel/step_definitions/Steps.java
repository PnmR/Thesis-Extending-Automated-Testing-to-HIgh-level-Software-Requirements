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
import static org.hamcrest.Matchers.not;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.openqa.selenium.support.ui.ExpectedConditions.*;

/**
 * Created by poonam on 2/14/16.
 */
public class Steps {

    // passing the driver instance from Hooks
    private final WebDriver driver = Hooks.driver;

    // passing the waiting variable from Hooks
    private WebDriverWait wait = Hooks.wait;

    // passing scenario from Hooks
    private Scenario scenario = Hooks.scenario;



    @Given("^Admin visits (https?:\\/\\/.+)$")
    public void adminVisits(String website) throws Throwable {

        // visit the site
        driver.navigate().to(website);


        Support.takeNSaveScreenshots(scenario);
    }

    @When("^Admin goes to Admin Web Ab section$")
    public void adminGoesToAdminWebABSection() throws Throwable {
        WebElement searchInput = Support.getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
        searchInput.sendKeys("Admin Web Ab"); // writing into the form

        WebElement adminTab = Support.getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
        wait.until(elementToBeClickable(adminTab));
        adminTab.click();

        Support.takeNSaveScreenshots(scenario);
    }

    @When("^Admin clicks on Start")
    public void adminClicksOnStart() throws Throwable {

        WebElement startMenu = Support.getElementSafely("//a[@id= 'start-menu-id' and contains(.,'Start')]", driver, wait);
        wait.until(elementToBeClickable(startMenu));
        startMenu.click();

        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^([\\wöåä]+) tab should be visible$")
    public void tabShouldBeVisible(String tabArg) throws Throwable {

        String tabXpath = String.format("//a[strong[contains(text(),'%s')]]", tabArg);
        WebElement tab = Support.getElementSafely(tabXpath, driver, wait);

        assertThat(tab.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    @When("^Admin clicks on tab ([\\wåöä]+)$")
    public void adminClicksOnTab(String tabName) throws Throwable {
        String tabXpath = String.format("//a[strong[contains(text(),'Växelöversikt') and not(@disabled)]]");
        WebElement tab = Support.getElementSafely(tabXpath, driver, wait);
        // sometimes the webelement although are visible not ready to be clicked
        wait.until(elementToBeClickable(tab));

        tab.click();

        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^Tab Växelöversikt expanded")
    public void tabVäxelöversiktExpanded() throws Throwable {
        String expandedTabXpath = String.format("//div[@class = 'company-overview ng-isolate-scope']");
        WebElement expandedTab = Support.getElementSafely(expandedTabXpath, driver, wait);
        assertThat(expandedTab.isDisplayed(), is(equalTo(Boolean.TRUE)));

        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^Admin Web AB tree structure is shown$")
    public void adminWebAbTreeStructureIsShown() throws Throwable {
        String adminTreeXpath = String.format("//li[@class = 'overview-row last-child']");
        List<WebElement> adminTree = Support.getElementsSafely(adminTreeXpath, driver, wait);

        assertThat(adminTree.size(), is(greaterThan(1))); // checks if there are more than one li element
    }

    private int gruppItemNum;
    @Given("^There (?:is|are) (\\d+) [\\wåöä]+$")
    public void thereAre(int number) throws Throwable {
        gruppItemNum = number;
    }

    @When("^Admin expands Användare$")
    public void adminExpandsAnvändare() throws Throwable {
        String användareXpandXpath = String.format("//div[h3[div[contains(text(), 'Användare') and @class='ng-binding']]]//div/img[@alt = 'Expandera']");
        WebElement användareXpand = Support.getElementSafely(användareXpandXpath, driver, wait);
        wait.until(elementToBeClickable(användareXpand));
        användareXpand.click();

        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^All Användare are listed with name$")
    public void allAnvändareAreListedWithName() throws Throwable {
        String användareXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        List<WebElement> användareList = Support.getElementsSafely(användareXpath, driver, wait);
        for (WebElement användare : användareList) {
            String användareNumNameRole = användare.getText();
            // extracting only name from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
            String användareName = användareNumNameRole.substring(0, användareNumNameRole.indexOf("("));

            assertThat(användareName.isEmpty(), is(equalTo(Boolean.FALSE)));
        }
    }

    @Then("^All Användare are listed with fixednumber$")
    public void allAnvändareAreListedWithFixednumber() throws Throwable {
        String användareXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        List<WebElement> användareList = Support.getElementsSafely(användareXpath, driver, wait);
        for (WebElement användare : användareList) {
            String användareNumNameRole = användare.getText();

            // extracting only phone number from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
            String användareFixedNumberText = användareNumNameRole.substring(användareNumNameRole.indexOf("(") + 1, användareNumNameRole.indexOf(")"));

            // sometimes there might be more than one number listed separated by comma
            String[] användareFixedNumberList = användareFixedNumberText.split(",");

            for (String användareFixedNumber : användareFixedNumberList) {
                // removing leading and trailing white space
                användareFixedNumber = användareFixedNumber.trim();

                assertThat(Support.isInteger(användareFixedNumber), is(equalTo(Boolean.TRUE)));
            }
        }

    }

    @Then("^All Användare are listed with adm or not$")
    public void allAnvändareAreListedWithAdmOrNot() throws Throwable {
        String användareXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        List<WebElement> användareList = Support.getElementsSafely(användareXpath, driver, wait);
        for (WebElement användare : användareList) {
            String användareNumNameRole = användare.getText();
            String användareRole;
            // extracting only "adm" inside second parenthesis from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
            // if the Användare is not adm then there will not be second parenthesis which is why that may throw StringIndexOutOfBoundsException
            try {
                användareRole = användareNumNameRole.substring(användareNumNameRole.indexOf("(", användareNumNameRole.indexOf("(") + 1) + 1, användareNumNameRole.indexOf(")", användareNumNameRole.indexOf(")") + 1));
            } catch (StringIndexOutOfBoundsException e) {
                användareRole = "användare"; // if the användare is not adm then it is användare
            }

            assertThat(användareRole.isEmpty(), is(equalTo(Boolean.FALSE)));
        }
    }

    @Then("^All Användare are listed with Inloggad/Ej inloggad$")
    public void allAnvändareAreListedWithInloggadEjInloggad() throws Throwable {
        String användareXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/..//span[@class = 'ng-scope' and img] ");
        List<WebElement> användareList = Support.getElementsSafely(användareXpath, driver, wait);
        for (WebElement användare : användareList) {
            String användareLogStatus = användare.getText();
            assertThat(användareLogStatus.isEmpty(), is(equalTo(Boolean.FALSE)));
        }
    }

    //@Then ("^Under Admin Web AB, all ([A-z]+(?:er|ar)) are shown$")
    @Then("^Under Admin Web AB, all ([A-zöåä]+) are shown$")
    public void underAdminWebAbAllAreShown(String grupp) throws Throwable {
        String gruppXpath;
        if (grupp.equals("Användare")) {
            gruppXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        } else {
            gruppXpath = String.format("//div[contains(text(), '%s') and @class='ng-binding']", grupp);
        }
        List<WebElement> gruppList = Support.getElementsSafely(gruppXpath, driver, wait);

        //counting total number of grupp entries displayed
        int displayedGruppEntries = 0;
        for (WebElement webEl : gruppList) {
            if (webEl.isDisplayed()) {
                displayedGruppEntries++;
            }
        }
        assertThat(displayedGruppEntries, is(equalTo(gruppItemNum)));

    }

    private String gruppText;

    @Given("^Admin is checking ([A-zöåä]+) node nr (\\d+)$")
    public void adminCheckingNodeNr(String grupp, int nodeNum) throws Throwable {
        String gruppListXpath;
        if (grupp.equals("Användare")) {
            gruppListXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        } else {
            gruppListXpath = String.format("//div/h3/div[contains(text(), '%s') and @class='ng-binding']", grupp);
        }
        List<WebElement> gruppList = Support.getElementsSafely(gruppListXpath, driver, wait);
        gruppText = gruppList.get(nodeNum - 1).getText(); // list index starts from 0
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

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", gruppText); // repeating part of Xpath

        itemXpath.concat(partItemXpath); // adding the unique rest part of Xpath
        WebElement nodeItem = Support.getElementSafely(itemXpath, driver, wait);

        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }


    @Then("^For this node, number is visible$")
    public void forThisNodeNumberIsVisible() throws Throwable {

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", gruppText);
        WebElement nodeItem = Support.getElementSafely(itemXpath, driver, wait);
        String text = nodeItem.getText();

        // extracting only text disregarding round bracket
        text = text.substring(text.indexOf('(') + 1, text.indexOf(')'));

        assertThat(Support.isInteger(text), is(equalTo(Boolean.TRUE)));
        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    @When("^Admin expands Svarsgrupp$")
    public void adminExpandsSvarsgrupp() throws Throwable {

        String xpandXpath = String.format("//div[h3[div[contains(text(),'%s') and @class='ng-binding']]]//div/img[@alt = 'Expandera']", gruppText);
        WebElement xpand = Support.getElementSafely(xpandXpath, driver, wait);
        wait.until(elementToBeClickable(xpand));
        xpand.click();
        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^For this node, Användare logged in is visible$")
    public void forThisNodeAnvändareloggedInIsVisible() throws Throwable {
        String användareUndersvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]", gruppText);
        WebElement användareUndersvarsgrupp = Support.getElementSafely(användareUndersvarsgruppXpath, driver, wait);

        assertThat(användareUndersvarsgrupp.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    @When("^Under Svarsgrupp node, Admin tries to expand Användare$")
    public void whenAdminTriesToExpandAnvändareUnderSvarsgruppNode() throws Throwable {
        String användareExpandUnderSvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]//div[img[@alt ='Expandera']]", gruppText);
        WebElement användareExpandUnderSvarsgrupp = Support.getElementSafely(användareExpandUnderSvarsgruppXpath, driver, wait);
        wait.until(elementToBeClickable(användareExpandUnderSvarsgrupp));
        användareExpandUnderSvarsgrupp.click();
        Support.takeNSaveScreenshots(scenario);
    }

    @Then("^Användare under Svarsgrupp expands$")
    public void thenAnvändareUnderSvarsgruppExpands() throws Throwable {
        String underSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul", gruppText);
        List<WebElement> underSvarsgruppAnvändare = Support.getElementsSafely(underSvarsgruppAnvändareXpath, driver, wait);
        int displayedElementUnderSvarsgruppAnvändare = 0;
        for (WebElement element : underSvarsgruppAnvändare) {
            if (element.isDisplayed()) {
                displayedElementUnderSvarsgruppAnvändare++;
            }
        }
        assertThat(displayedElementUnderSvarsgruppAnvändare, is(not(equalTo(0))));
    }

    @Then("^Svarsgrupp Användare nr (\\d+) is listed with name$")
    public void svarsgruppAnvändareNrIsListedWithName(int användareNr) {
        String numNameRoleOfSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppAnvändare = Support.getElementsSafely(numNameRoleOfSvarsgruppAnvändareXpath, driver, wait);
        String användareNumNameRole = numNameRoleOfSvarsgruppAnvändare.get(användareNr - 1).getText();
        // extracting only name from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
        String användareName = användareNumNameRole.substring(0, användareNumNameRole.indexOf("("));

        assertThat(användareName.isEmpty(), is(equalTo(Boolean.FALSE)));
    }

    @Then("^Svarsgrupp Användare nr (\\d+) is listed with fixednumber$")
    public void svarsgruppAnvändareNrIsListedWithFixedNumber(int användareNr) {
        String numNameRoleOfSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppAnvändare = Support.getElementsSafely(numNameRoleOfSvarsgruppAnvändareXpath, driver, wait);
        String användareNumNameRole = numNameRoleOfSvarsgruppAnvändare.get(användareNr - 1).getText();
        // extracting only phone number from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
        String användareFixedNumberText = användareNumNameRole.substring(användareNumNameRole.indexOf("(") + 1, användareNumNameRole.indexOf(")"));

        // sometimes there might be more than one number listed separated by comma
        String[] användareFixedNumberList = användareFixedNumberText.split(",");

        for (String användareFixedNumber : användareFixedNumberList) {
            användareFixedNumber = användareFixedNumber.trim();  // removing leading and trailing white space
            assertThat(Support.isInteger(användareFixedNumber), is(equalTo(Boolean.TRUE)));
        }

    }

    @Then("^Svarsgrupp Användare nr (\\d+) is listed with adm or not$")
    public void svarsgruppAnvändareNrIsListedWithAdmOrNot(int användareNr) {
        String numNameRoleOfSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppAnvändare = Support.getElementsSafely(numNameRoleOfSvarsgruppAnvändareXpath, driver, wait);
        String användareNumNameRole = numNameRoleOfSvarsgruppAnvändare.get(användareNr - 1).getText();
        String användareRole;

        // extracting only "adm" inside second parenthesis from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
        // if the användare is not adm then there will not be second parenthesis which is why that may throw StringIndexOutOfBoundsException
        try {
            användareRole = användareNumNameRole.substring(användareNumNameRole.indexOf("(", användareNumNameRole.indexOf("(") + 1) + 1, användareNumNameRole.indexOf(")", användareNumNameRole.indexOf(")") + 1));
        } catch (StringIndexOutOfBoundsException e) {
            användareRole = "användare";
        }

        assertThat(användareRole.isEmpty(), is(equalTo(Boolean.FALSE)));

    }

    @Then("^Svarsgrupp Användare nr (\\d+) is listed with Inloggad/Ej inloggad$")
    public void svarsgruppAnvändareNrIsListedWithInloggadEjInloggad(int användareNr) {
        String logStatusOfSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//span[@class = 'ng-binding ng-scope']", gruppText);
        List<WebElement> logStatusOfSvarsgruppAnvändare = Support.getElementsSafely(logStatusOfSvarsgruppAnvändareXpath, driver, wait);
        String användareLogStatus = logStatusOfSvarsgruppAnvändare.get(användareNr - 1).getText();

        assertThat(användareLogStatus.isEmpty(), is(equalTo(Boolean.FALSE)));
    }


    private String gruppTitleText, gruppMobNum;

    @When("^Admin clicks on the [A-zöäå]+ link$")
    public void adminClicksOnTheLink() throws Throwable {
        String titleXpath;

        if (gruppText.contains("Svarsgrupp") || gruppText.contains("Menystyrning")) {
            titleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[contains(@class, 'ng-binding')]", gruppText);
        } else {
            titleXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
        }
        WebElement gruppTitle = Support.getElementSafely(titleXpath, driver, wait);
        gruppTitleText = gruppTitle.getText();
// seems unnecessary since there is not depicted whether the combination of name and num should be unique
//        List<WebElement> numList = getElementsSafely(String.format("//h3//div[contains(text(), '%s')]", grupp), driver, wait);
//        String text = numList.get(nodeIndex).getText();
//        gruppMobNum = text.substring(text.indexOf('('), text.indexOf(')') + 1);

        wait.until(elementToBeClickable(gruppTitle));
        gruppTitle.click();

        Support.takeNSaveScreenshots(scenario);

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
        //discarding quotation mark
        Pattern pattern = Pattern.compile("\"(.*?)\"");

        WebElement forwardedTitle = Support.getElementSafely(forwardedTitleXpath, driver, wait);
//        JOptionPane.showMessageDialog(new JFrame(), forwardedTitle.size());
        Matcher matcher = pattern.matcher(gruppTitleText);
        if (matcher.find()) {
            gruppTitleText = matcher.group(1);
        }

        // if the name is longer than 20 character the website neglects character after 20th and replace with three dots
        String forwardedTitleText = forwardedTitle.getText();
        if (forwardedTitleText.length() > 20) {
            forwardedTitleText = forwardedTitleText.substring(0, 20);
            forwardedTitleText = forwardedTitleText.concat("...");
        }

        assertThat(forwardedTitleText, is(equalTo(gruppTitleText)));
//        assertThat(forwardedMobNumList.get(0).getText(), is(equalTo(gruppMobNum)));
    }

    private String changedGruppName;

    @When("^Admin changes name to (.+)$")
    public void adminChangesNameTo(String newName) throws Throwable {
        // click on bytNamn
        String bytNamnXpath = "//h1[contains(@id , 'change-')]/a[not(@disabled) and span[contains(text(), 'Byt namn')]]";
        WebElement bytNamn = Support.getElementSafely(bytNamnXpath, driver, wait);
        wait.until(elementToBeClickable(bytNamn));
        bytNamn.click();

        Support.takeNSaveScreenshots(scenario);

        // writing on the input
        String titleInputXpath = "//h1[contains(@id, 'change-')]/span/input[contains(@name, 'Name')]";
        WebElement titleInput = Support.getElementSafely(titleInputXpath, driver, wait);

        // to write over the input text
        changedGruppName = newName;
        titleInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changedGruppName);
        driver.findElement(By.xpath("//div[@class = 'tsr-header-main']")).click(); //clicking outside to save the change
    }

    @Then("^Admin verifies if the name is changed$")
    public void adminVerifiesIfTheNameIsChanged() throws Throwable {

        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        // go back to the page
        driver.navigate().back();

        String gruppTitleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[contains(@class , 'ng-binding')]", gruppText);
        String gruppTitle = Support.getElementSafely(gruppTitleXpath, driver, wait).getText();

    }

    private int listSizeBeforeTryingToExpand, listSizeAfterTryingToExpand;

    @When("^Admin tries to expand ([A-zöåä /]+)$")
    public void adminTriesToExpand(String expandText) throws Throwable {
        String underGruppXpath = String.format("//ul[contains(@data-title,'%s')]/li/ul//li", gruppText);
        List<WebElement> underGrupp = Support.getElementsSafely(underGruppXpath, driver, wait);
        listSizeBeforeTryingToExpand = underGrupp.size();

        String circleUnderGruppXpath = String.format("//ul[contains(@data-title,'%s')]//li/div[contains(. , '%s')]/span[@class = 'circle']", gruppText, expandText);
        WebElement circleUnderGrupp = Support.getElementSafely(circleUnderGruppXpath, driver, wait);
        circleUnderGrupp.click();
        listSizeAfterTryingToExpand = underGrupp.size();

    }

    @Then("^[A-zåöä /]+ does not expand$")
    public void doesNotExpand() throws Throwable {
        assertThat(listSizeAfterTryingToExpand, is(equalTo(listSizeBeforeTryingToExpand)));
    }

    @Given("^Admin clicks on the link of Svarsgrupp Användare nr (\\d+)$")
    public void adminClicksOnTheLinkOfSvarsgruppAnvändareNr(int användareNr) throws Throwable {
        String svarsgruppAnvändareLinkXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//a[span[@class = 'overview-link-text ng-binding' and @title]]", gruppText);
        List<WebElement> svarsgruppAnvändareLinkList = Support.getElementsSafely(svarsgruppAnvändareLinkXpath, driver, wait);
        WebElement svarsgruppAnvändareLink = svarsgruppAnvändareLinkList.get(användareNr - 1);
        wait.until(elementToBeClickable(svarsgruppAnvändareLink));
        svarsgruppAnvändareLink.click();
        Support.takeNSaveScreenshots(scenario);
    }

    private Map<String, String> changes;

    @When("^Admin changes Svarsgrupp Användare settings:$")
    public void adminChangesSvarsgruppAnvändareSettings(Map<String, String> changes) throws Throwable {
        this.changes = changes;

        // changing first name
        String firstNameInputXpath = String.format("//input[@id = 'change-firstname-id']");
        WebElement firstNameInput = Support.getElementSafely(firstNameInputXpath, driver, wait);
        wait.until(visibilityOf(firstNameInput));
        firstNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changes.get("new first name"));

        //changing last name
        String lastNameInputXpath = String.format("//input[@id = 'change-lastname-id']");
        WebElement lastNameInput = Support.getElementSafely(lastNameInputXpath, driver, wait);
        lastNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changes.get("new last name"));

        // changing adm or not
        String admOrNotXpath = String.format("//label[input[@type = 'radio' and @value = '%s']]", changes.get("new adm or not"));
        WebElement admOrNot = Support.getElementSafely(admOrNotXpath, driver, wait);
        wait.until(elementToBeClickable(admOrNot));
        admOrNot.click();

        //saving the changes
        String saveXpath = String.format("//input[@id = 'save-user-id']");
        WebElement saveList = Support.getElementSafely(saveXpath, driver, wait);
        wait.until(elementToBeClickable(saveList));
        saveList.click();

    }

    @Then("^Admin navigates back from Användare setting page$")
    public void adminNavigatesBackFromAnvändareSettingPage() throws Throwable {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        driver.navigate().back();

    }

    @Then("^Admin verifies the changes in Svarsgrupp Användare nr (\\d+)$")
    public void adminVerifiesTheChangesInSvarsgruppAnvändareNr(int användareNr) throws Throwable {

        String numNameRoleOfSvarsgruppAnvändareXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Användare')]/../ul//span[@class = 'overview-link-text ng-binding' and @title]", gruppText);
        List<WebElement> numNameRoleOfSvarsgruppAnvändare = Support.getElementsSafely(numNameRoleOfSvarsgruppAnvändareXpath, driver, wait);

        // extracting the text which enlists Användare number, name and role
        String användareNumNameRole = numNameRoleOfSvarsgruppAnvändare.get(användareNr - 1).getText();

        // extracting only full name from the text- Maria Niskanen  (0706554610, 060171501) (adm)
        String användareFullName = användareNumNameRole.substring(0, användareNumNameRole.indexOf("("));

        // splitting full name into first and last name
        String[] name = användareFullName.split(" ");
        String firstName = name[0];
        String lastName = name[1];

        // extracting only "adm" inside second parenthesis from the whole text- Maria Niskanen  (0706554610, 060171501) (adm)
        // if the Användare is not adm then there will not be second parenthesis which is why that may throw StringIndexOutOfBoundsException
        String användareAdm;
        try {
            användareAdm = användareNumNameRole.substring(användareNumNameRole.indexOf("(", användareNumNameRole.indexOf("(") + 1) + 1, användareNumNameRole.indexOf(")", användareNumNameRole.indexOf(")") + 1));
        } catch (StringIndexOutOfBoundsException e) {
            användareAdm = "användare"; // if the användare is not adm then it is användare
        }

        String admOrNot = "";
        switch (changes.get("new adm or not")) {
            case "Användare":
                admOrNot = "användare";
                break;
            case "COMPANY_ADMIN":
                admOrNot = "adm";
                break;
        }
        assertThat(användareAdm, is(equalTo(admOrNot)));
        assertThat(firstName, is(equalTo(changes.get("new first name"))));
        assertThat(lastName, is(equalTo(changes.get("new last name"))));

    }


}
