package org.cukesSel.step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;
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
        driver.get(website);
    }

    @When("^I go to Admin Web Ab section$")
    public void IGoToAdminWebABSection() throws Throwable {


        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
        searchInput.sendKeys("Admin Web Ab"); // writing into the form

        WebElement adminTab = getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
        adminTab.click();

    }

    @When("^I click on Start")
    public void iClickOnStart() throws Throwable {

        WebElement startMenu = getElementSafely("//a[@id= 'start-menu-id' and contains(.,'Start')]", driver, wait);
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

    @Given("^There are (\\d+) [\\wåöä]+$")
    public void thereAreSvarsgrupp(int number) throws Throwable {
        gruppItemNum = number;
    }

    //@Then ("^Under Admin Web AB, all ([A-z]+(?:er|ar)) are shown$")
    @Then("^Under Admin Web AB, all ([A-zöåä]+) are shown$")
    public void underAdminWebAbAllAreShown(String grupp) throws Throwable {
        String gruppXpath = String.format("//div[contains(text(), '%s') and @class='ng-binding']", grupp);
        List<WebElement> gruppList = getElementsSafely(gruppXpath, driver, wait);
        int count = 0;
        for (WebElement webEl : gruppList) {
            if (webEl.isDisplayed()) {
                count++;
            }
        }
        assertThat(count, is(equalTo(gruppItemNum)));

    }

    @Then("^For a ([A-z]+), (title|lock icon|link) is visible$")
    public void forAIsVisible(String grupp, String item) throws Throwable {
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
        String gruppXpath = String.format("//div[contains(text(), '%s') and @class='ng-binding']", grupp);
        List<WebElement> gruppList = getElementsSafely(gruppXpath, driver, wait);

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", grupp);

        itemXpath.concat(partItemXpath);
        List<WebElement> itemList = getElementsSafely(itemXpath, driver, wait);

        int count = 0;
        for (WebElement e : itemList) {
            if (e.isDisplayed()) {
                count++;
            }
        }
        assertThat(count, is(equalTo(gruppList.size())));

    }


    @Then("^For a ([A-z]+), number is visible$")
    public void forANumberIsVisible(String grupp) throws Throwable {
        String gruppXpath = String.format("//div[contains(text(), '%s') and @class='ng-binding']", grupp);
        List<WebElement> gruppList = getElementsSafely(gruppXpath, driver, wait);

        String itemXpath = String.format("//h3//div[contains(text(), '%s')]", grupp);
        List<WebElement> itemList = getElementsSafely(itemXpath, driver, wait);

        int count = 0;
        for (WebElement e : itemList) {
            String text = e.getText();
            text = text.substring(text.indexOf('(') + 1, text.indexOf(')'));
            if (isInteger(text)) {
                count++;
            }
        }
        assertThat(count, is(equalTo(gruppList.size())));

    }

    String menyStyrningTitle, menyStyrningNum;

    @When("^I click on Menystyrningens link$")
    public void iClickOnMenystyrningensLink() throws Throwable {

        String myXpath = String.format("//h3//div[contains(text(), '%s')]/../a/span[@class = 'ng-binding']", "Menystyrning");
        List<WebElement> menystyrningTitleList = getElementsSafely(myXpath, driver, wait);
        menyStyrningTitle = menystyrningTitleList.get(0).getText();

        List<WebElement> menystyrningNumList = getElementsSafely("//h3//div[contains(text(), 'Menystyrning')]", driver, wait);
        String text = menystyrningNumList.get(0).getText();
        menyStyrningNum = text.substring(text.indexOf('('), text.indexOf(')') + 1);

        wait.until(elementToBeClickable(menystyrningTitleList.get(0)));
        menystyrningTitleList.get(0).click();

    }

    @Then("^I get forwarded to correct menystyrning page$")
    public void iGetForwardedToCorrectMenystyrningPage() throws Throwable {
        String forwardedMenystyrningNumXpath = "//h1[@id = 'change-aaName-wrapper']/span[@class = 'h1-number ng-binding']";
        List<WebElement> forwardedMenystyrningNum = getElementsSafely(forwardedMenystyrningNumXpath, driver, wait);


        Pattern pattern = Pattern.compile("\"(.*?)\"");
        String forwardedMenystyrningTitleXpath = "//h1[@id = 'change-aaName-wrapper']/span[@class = 'ng-binding']";
        List<WebElement> forwardedMenystyrningTitle = getElementsSafely(forwardedMenystyrningTitleXpath, driver, wait);
        Matcher matcher = pattern.matcher(menyStyrningTitle);
        if (matcher.find()) {
            menyStyrningTitle = matcher.group(1);
        }
        assertThat(forwardedMenystyrningTitle.get(0).getText(), is(equalTo(menyStyrningTitle)));
        assertThat(forwardedMenystyrningNum.get(0).getText(), is(equalTo(menyStyrningNum)));
    }

    @When("^I change Menystyrning name$")
    public void iChangeMenystyrningName() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I verify change in \"([^\"]*)\"$")
    public void iVerifyChangeIn(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
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
        //  driver.quit();
    }
}
