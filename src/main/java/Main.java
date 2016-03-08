import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfAllElementsLocatedBy;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;

/**
 * Created by poonam on 2/15/16.
 * Main class serves as merely a java class where i test my tests.
 */
public class Main {
    public static void main(String[] args) {

//        WebDriver driver = new FirefoxDriver();
//
//        // wait for the server to render all the element
//        WebDriverWait wait = new WebDriverWait(driver, 10);
//
//
//        driver.navigate().to("http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT");
//
//        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
//        searchInput.sendKeys("Admin Web Ab"); // writing into the form
//
//        //click on admin web ab search item
//        WebElement adminTab = getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
//        wait.until(elementToBeClickable(adminTab));
//        adminTab.click();
//
//        //click on start menu
//        WebElement startMenu = getElementSafely("//a[@id= 'start-menu-id' and contains(.,'Start')]", driver, wait);
//        wait.until(elementToBeClickable(startMenu));
//        startMenu.click();
//
//        // cick on växelöversikt
//        String tabXpath = String.format("//a[strong[contains(text(),'Växelöversikt') and not(@disabled)]]");
//        WebElement tab = getElementSafely(tabXpath, driver, wait);
//        wait.until(elementToBeClickable(tab));
//        tab.click();
//
//        // admin checking
//        String gruppListXpath;
//        String grupp = "Svarsgrupp";
//        if(grupp.equals("Users")) {
//            gruppListXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");
//        } else {
//            gruppListXpath = String.format("//div/h3/div[contains(text(), '%s') and @class='ng-binding']", grupp);
//        }
//        List<WebElement> gruppList = getElementsSafely(gruppListXpath, driver, wait);
//        String gruppText = gruppList.get(0).getText(); // index starts from 0
//
//        //expand svarsgrupp
//        String svarsgruppListXpath = String.format("//div/h3/div[contains(text(), 'Svarsgrupp') and @class='ng-binding']");
//        List<WebElement> svarsgruppList = getElementsSafely(svarsgruppListXpath, driver, wait);
//        String svarsgrupp = svarsgruppList.get(0).getText();
//        String xpandXpath = String.format("//div[h3[div[contains(text(),'%s') and @class='ng-binding']]]//div/img[@alt = 'Expandera']", svarsgrupp);
//        WebElement xpand = getElementSafely(xpandXpath, driver, wait);
//        wait.until(elementToBeClickable(xpand));
//        xpand.click();
//
//               // users logged in is visible
////        String usersUndersvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]", gruppText);
////        WebElement usersUndersvarsgrupp = getElementSafely(usersUndersvarsgruppXpath, driver, wait);
//
//        //admin try to expand Användare under Svarsgrupp Node
//        String usersExpandUnderSvarsgruppXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]//div[img[@alt ='Expandera']]", gruppText);
//        WebElement usersExpandUnderSvarsgrupp = getElementSafely(usersExpandUnderSvarsgruppXpath, driver, wait);
//        wait.until(elementToBeClickable(usersExpandUnderSvarsgrupp));
//        usersExpandUnderSvarsgrupp.click();
//
//        // admin clicks on the users link
//        int userNr = 1;
//        String svarsgruppUsersLinkXpath = String.format("//li[div[h3[div[contains(text(), '%s')]]]]//div[contains(., 'Users')]/../ul//a[span[@class = 'overview-link-text ng-binding' and @title]]", gruppText);
//        List<WebElement> svarsgruppUsersLinkList = getElementsSafely(svarsgruppUsersLinkXpath, driver, wait);
//        WebElement svarsgruppUsersLink = svarsgruppUsersLinkList.get(userNr-1);
//
//        wait.until(elementToBeClickable(svarsgruppUsersLink));
//        svarsgruppUsersLink.click();
//
//        // Admin changes name
//        String firstNameInputXpath = String.format("//input[@id = 'change-firstname-id']");
//        WebElement firstNameInput = getElementSafely(firstNameInputXpath, driver, wait);
//        firstNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"),"newSara");
//
//        String lastNameInputXpath = String.format("//input[@id = 'change-lastname-id']");
//        WebElement lastNameInput = getElementSafely(lastNameInputXpath, driver, wait);
//        lastNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"),"newVickman");
//
//
//        // COMPANY_ADMIN
//        String admOrNotXpath = String.format("//label[input[@type = 'radio' and @value = 'USER']]");
//        WebElement admOrNot = getElementSafely(admOrNotXpath, driver, wait);
//        wait.until(elementToBeClickable(admOrNot));
//        admOrNot.click();
//
////
////        String saveXpath = String.format("//input[@id = 'save-user-id']");
////        WebElement saveList = getElementSafely(saveXpath, driver, wait);
////        wait.until(elementToBeClickable(saveList));
////        saveList.click();
////
//        driver.navigate().back();


        // Create a new instance of the Firefox driver
        WebDriver driver = new FirefoxDriver();

        // wait for the server to render all the element
        WebDriverWait wait = new WebDriverWait(driver, 10);


            // visit the site
            driver.navigate().to("https://www.google.se");
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
// Now you can do whatever you need to do with it, for example copy somewhere
        try {
            FileUtils.copyFile(scrFile, new File("screenshots/first.png"));
        } catch (IOException e) {
            e.printStackTrace();
        }


        //        File screenShotFile = underSvarsgrupp.get(0).getScreenshotAs(OutputType.FILE);
//// Now you can do whatever you need to do with it, for example copy somewhere
//        try {
//            FileUtils.copyFile(screenShotFile, new File("/home/poonam/Code/projects/Thesis/ProjectKontor/screenshots"));
//        } catch (IOException e) {
//            e.printStackTrace();
//        }

    }

    public static Boolean isInteger(String s) {
        try {
            Long.parseLong(s);
            return Boolean.TRUE;
        } catch (NumberFormatException e) {
            return Boolean.FALSE;
        }
    }


    public static String getElementXPath(WebDriver webDriver, WebElement webElement) {
        String jscript = "function getPathTo(node) {" +
                "  var stack = [];" +
                " if(node.parentNode !== null) {" +
                "  while(node.parentNode !== null) {" +
                "    stack.unshift(node.tagName);" +
                "    node = node.parentNode;" +
                "  }" +
                "  return stack.join('/');" +
                "} else return '/' + node; " +
                "}" +
                "return getPathTo(arguments[0]);";
        JavascriptExecutor e = (JavascriptExecutor) webDriver;
        return (String) e.executeScript(jscript, webElement);
//        return (String)((JavascriptExecutor)driver).executeScript(javaScript, element);

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

    public static List<WebElement> getElementsSafely(String myXpath, WebDriver driver, WebDriverWait wait) {
        wait.until(presenceOfAllElementsLocatedBy(By.xpath(myXpath)));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.findElements(By.xpath(myXpath));

    }
}
