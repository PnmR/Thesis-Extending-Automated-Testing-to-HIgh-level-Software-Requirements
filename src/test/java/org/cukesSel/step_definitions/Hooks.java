package org.cukesSel.step_definitions;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.swing.*;

/**
 * This class has pre and post conditions
 *
 * @author  Poonam Rai
 * @since   3/11/16
 */
public class Hooks {
    public static Scenario scenario;

    public static WebDriver driver;
    public static WebDriverWait wait;
    private static boolean dunit = false;

    @Before
    /**
     * Opens the Firefox application
     * Define the webdriverwait
     * Passes the scenario
     */
    public void before(Scenario scenario) {
        // Create a new instance of the Firefox driver
        driver = new FirefoxDriver();

        // defining waiting time for the driver
        wait = new WebDriverWait(driver, 10);

        this.scenario = scenario;
    }


    @After()
    /**
     * Take screenshot when a scenario is failed
     * and embed it to the report
     * Delete all cookies before closing the browser to avoid
     * shared state between tests
     * method also closes the browser
     *
     * @param scenario current scenario
     */
    public void tearDown(Scenario scenario) {
        if (scenario.isFailed()) {
            // Take a screenshot...
            final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png"); // and embed it in the report.
        }

        driver.manage().deleteAllCookies();
        driver.quit();
    }
}
