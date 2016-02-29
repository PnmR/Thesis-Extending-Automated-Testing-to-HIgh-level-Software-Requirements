import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;
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

        WebDriver driver = new FirefoxDriver();

        // wait for the server to render all the element
        WebDriverWait wait = new WebDriverWait(driver, 10);


        driver.navigate().to("http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT");

        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);
        searchInput.sendKeys("Admin Web Ab"); // writing into the form

        //click on admin web ab search item
        WebElement adminTab = getElementSafely("//strong[contains(text(),'Admin Web AB')]", driver, wait);
        wait.until(elementToBeClickable(adminTab));
        adminTab.click();

        //click on start menu
        WebElement startMenu = getElementSafely("//a[@id= 'start-menu-id' and contains(.,'Start')]", driver, wait);
        wait.until(elementToBeClickable(startMenu));
        startMenu.click();

        // cick on växelöversikt
        String tabXpath = String.format("//a[strong[contains(text(),'Växelöversikt') and not(@disabled)]]");
        WebElement tab = getElementSafely(tabXpath, driver, wait);
        wait.until(elementToBeClickable(tab));
        tab.click();

        String userXpandXpath = String.format("//div[h3[div[contains(text(), 'Users') and @class='ng-binding']]]//div/img[@alt = 'Expandera']");
        WebElement userXpand = getElementSafely(userXpandXpath, driver, wait);

        wait.until(elementToBeClickable(userXpand));
        userXpand.click();

        String userXpath = String.format("//li[@class = 'overview-row last-child']/div/a[@class = 'overview-link-sep ng-scope']/span[@class ='overview-link-text ng-binding'  and @title and text()] ");

        List<WebElement> userList = getElementsSafely(userXpath,driver, wait);
        String text ="";
        for(WebElement u: userList) {
            text = text.concat(u.getText() +"\n");
        }
        JOptionPane.showMessageDialog(new JFrame(), text);
    }
    public static String getElementXPath(WebDriver webDriver, WebElement webElement) {
            String jscript = "function getPathTo(node) {" +
                    "  var stack = [];" +
                    " if(node.parentNode !== null) {"+
                    "  while(node.parentNode !== null) {" +
                    "    stack.unshift(node.tagName);" +
                    "    node = node.parentNode;" +
                    "  }" +
                    "  return stack.join('/');" +
                    "} else return '/' + node; " +
                    "}" +
                    "return getPathTo(arguments[0]);";
            JavascriptExecutor e = (JavascriptExecutor)webDriver;
            return (String)e.executeScript(jscript, webElement);
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
