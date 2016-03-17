package org.cukesSel.step_definitions;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.util.List;

import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfAllElementsLocatedBy;
import static org.openqa.selenium.support.ui.ExpectedConditions.presenceOfElementLocated;

/**
 * This class has all the supporting methods for the step definitions
 * Created by poonam on 3/11/16.
 */
public class Support {

    public static Boolean isInteger(String s) {
        try {
            // using Long so that it would not throw NumberFormatException when the number is too large
            // especially for the phone number including also the country code
            Long.parseLong(s);
            return Boolean.TRUE;
        } catch (NumberFormatException e) {
            return Boolean.FALSE;
        }
    }


    /**
     * method to wait before actually capturing the element
     * @param myXpathArg Xpath to the element
     * @param driver driver used
     * @param wait wait used
     * @return WebElement element from the xpath
     */
    public static WebElement getElementSafely(String myXpathArg, WebDriver driver, WebDriverWait wait) {
        wait.until(presenceOfElementLocated(By.xpath(myXpathArg)));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.findElement(By.xpath(myXpathArg));

    }

    /**
     * method to wait before actually capturing the elements
     * @param myXpathArg Xpath to the list of elements
     * @param driver driver used
     * @param wait wait used
     * @return List<WebElement> List of elements from the xpath
     */
    public static List<WebElement> getElementsSafely(String myXpathArg, WebDriver driver, WebDriverWait wait) {
        wait.until(presenceOfAllElementsLocatedBy(By.xpath(myXpathArg)));
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.findElements(By.xpath(myXpathArg));

    }

    /**
     * method to take screenshot and save them
     * @param fileName path where screenshot is saved
     */
    public static void takeNSaveScreenshots(String fileName) {
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        File scrFile = ((TakesScreenshot) Hooks.driver).getScreenshotAs(OutputType.FILE);

        try {
            FileUtils.copyFile(scrFile, new File(fileName));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
