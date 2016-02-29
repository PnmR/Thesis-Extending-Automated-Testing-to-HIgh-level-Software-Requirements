package org.cukesSel.step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.greaterThan;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfAllElementsLocatedBy;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;

/**
 * Created by poonam on 2/14/16.
 */
public class Steps {

    // Create a new instance of the Firefox driver
    private final WebDriver driver = new FirefoxDriver();

    // wait for the server to render all the element
    private WebDriverWait wait = new WebDriverWait(driver, 10);

    @Given("^I visit (https?:\\/\\/.+)$")
    public void iVisit(String website) throws Throwable {

        // visit the site
        driver.navigate().to(website);
    }

    @When("^I go to Admin Web Ab section$")
    public void IGoToAdminWebABSection() throws Throwable {
        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
        searchInput.sendKeys("Admin Web Ab"); // writing into the form

        WebElement adminTab = getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
        wait.until(elementToBeClickable(adminTab));
        adminTab.click();

    }

    @When("^I click on Start")
    public void iClickOnStart() throws Throwable {

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

    @When("^I click on tab ([\\wåöä]+)$")
    public void iClickOnTab(String tabName) throws Throwable {
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

    @When("^I expand Users$")
    public void iExpandUsers() throws Throwable {
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
        int count = 0;
        for (WebElement webEl : gruppList) {
            if (webEl.isDisplayed()) {
                count++;
            }
        }
        assertThat(count, is(equalTo(gruppItemNum)));

    }

    String grupp;
    private int nodeIndex;

    @Given("^I am checking ([A-z]+) node nr (\\d+)$")
    public void iAmCheckingNodeNr(String grupp, int nodeNum) throws Throwable {
        this.nodeIndex = nodeNum - 1; // index starts from 0
        this.grupp = grupp;
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

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", grupp);

        itemXpath.concat(partItemXpath);
        List<WebElement> itemList = getElementsSafely(itemXpath, driver, wait);
        WebElement nodeItem = itemList.get(nodeIndex);

        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }


    @Then("^For this node, number is visible$")
    public void forThisNodeNumberIsVisible() throws Throwable {

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", grupp);
        List<WebElement> itemList = getElementsSafely(itemXpath, driver, wait);
        WebElement nodeItem = itemList.get(nodeIndex);
        String text = nodeItem.getText();
        text = text.substring(text.indexOf('(') + 1, text.indexOf(')'));
        assertThat(isInteger(text), is(equalTo(Boolean.TRUE)));
        assertThat(nodeItem.isDisplayed(), is(equalTo(Boolean.TRUE)));
    }

    String gruppTitle, gruppMobNum;

    @When("^I click on the link$")
    public void iClickOnTheLink() throws Throwable {
        // mistake on the span class on svarsgrupp
        String titleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[contains(class, ng-binding)]", grupp);
        List<WebElement> titleList = getElementsSafely(titleXpath, driver, wait);
        gruppTitle = titleList.get(nodeIndex).getText();

        List<WebElement> numList = getElementsSafely(String.format("//h3//div[contains(text(), '%s')]", grupp), driver, wait);
        String text = numList.get(nodeIndex).getText();
        gruppMobNum = text.substring(text.indexOf('('), text.indexOf(')') + 1);

        wait.until(elementToBeClickable(titleList.get(nodeIndex)));
        titleList.get(nodeIndex).click();

    }

    @Then("^I get forwarded to correct page$")
    public void iGetForwardedToCorrectPage() throws Throwable {
        String forwardedNumXpath = "//h1[contains(id, change-)]/span[@class = 'h1-number ng-binding']";
        List<WebElement> forwardedMobNumList = getElementsSafely(forwardedNumXpath, driver, wait);


        Pattern pattern = Pattern.compile("\"(.*?)\"");
        String forwardedTitleXpath = "//h1[contains(id, change-)]/span[@class = 'ng-binding']";
        List<WebElement> forwardedTitleList = getElementsSafely(forwardedTitleXpath, driver, wait);
        Matcher matcher = pattern.matcher(gruppTitle);
        if (matcher.find()) {
            gruppTitle = matcher.group(1);
        }
        assertThat(forwardedTitleList.get(0).getText(), is(equalTo(gruppTitle)));
        assertThat(forwardedMobNumList.get(0).getText(), is(equalTo(gruppMobNum)));
    }

    private String changedMenystyrningName;

    @When("^I change name to (.+)$")
    public void iChangeMenystyrningName(String newName) throws Throwable {
        // click on bytNamn
        String bytNamnXpath = "//h1[@id = 'change-aaName-wrapper']/a[not(@disabled) and span[contains(text(), 'Byt namn')]]";
        WebElement bytNamn = getElementSafely(bytNamnXpath, driver, wait);
        wait.until(elementToBeClickable(bytNamn));
        bytNamn.click();

        // writing on the input
        String titleInputXpath = "//h1[@id = 'change-aaName-wrapper']/span/input[@name = 'aaName']";
        WebElement titleInput = getElementSafely(titleInputXpath, driver, wait);

        // to write over the input text
        changedMenystyrningName = newName;
        titleInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), changedMenystyrningName);
        driver.findElement(By.xpath("//div[@class = 'tsr-header-main']")).click(); //clicking outside to save the change
    }

    @Then("^I verify change$")
    public void iVerifyChangeIn() throws Throwable {
        // go back to the page
        driver.navigate().back();

        String menystyrningTitleXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[@class = 'ng-binding']", "Menystyrning");
        List<WebElement> menystyrningTitleList = getElementsSafely(menystyrningTitleXpath, driver, wait);
        String menyStyrningTitle = menystyrningTitleList.get(0).getText();
        Pattern pattern = Pattern.compile("\"(.*?)\"");
        Matcher matcher = pattern.matcher(menyStyrningTitle);
        if (matcher.find()) {
            menyStyrningTitle = matcher.group(1);
        }
        assertThat(menyStyrningTitle, is(equalTo(changedMenystyrningName)));

    }


    public Boolean isInteger(String s) {
        try {
            Integer.parseInt(s);
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


    @After()
    public void closeBrowser() {
        // close the browser
        driver.quit();
    }
}
