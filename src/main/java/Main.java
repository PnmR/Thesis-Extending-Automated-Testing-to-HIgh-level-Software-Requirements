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


        new File(String.format("target/screenshots/%s", "hello")).mkdirs();
        int num = new File(String.format("target/screenshots/%s", "hello")).listFiles().length;

        File file = new File(String.format("target/screenshots/%s/pic%d.text", "hello", num+1));
        try {
            file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        new File(String.format("target/screenshots/%s", "hello")).mkdirs();
         num = new File(String.format("target/screenshots/%s", "hello")).listFiles().length;

         file = new File(String.format("target/screenshots/%s/pic%d.text", "hello", num+1));
        try {
            file.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }

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
