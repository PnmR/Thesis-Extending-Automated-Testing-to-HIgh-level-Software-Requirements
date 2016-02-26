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
import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsEqual.equalTo;
import static org.openqa.selenium.support.ui.ExpectedConditions.elementToBeClickable;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfAllElementsLocatedBy;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;

/**
 * Created by poonam on 2/15/16.
 */
public class Main {
    public static void main(String[] args) {

        WebDriver driver = new FirefoxDriver();

        // wait for the server to render all the element
        WebDriverWait wait = new WebDriverWait(driver, 10);


        driver.get("http://smesol-aw-test.sundsvall.dewire.com:8080/web/smesol/index?CT_REMOTE_USER=Selenium&IDP=TIWSS&MO_ROLE=CUSTOMER_SUPPORT");

        WebElement searchInput = getElementSafely("//*[@id ='search-all-company-id']", driver, wait);



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
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        wait.until(presenceOfElementLocated(By.xpath(myXpathArg)));
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
