package org.cukesSel.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by poonam on 2/12/16.
 */
@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"},
        snippets = SnippetType.CAMELCASE,
//        features = "src/test/resources/features",
        features = "src/test/resources/features/admin_expands_users_under_svarsgrupp_node.feature",
        glue = "org.cukesSel.step_definitions",
        tags = "~@prob")
public class RunnerTest {
}