package org.cukesSel;

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
        // features lies normally in the same directory path as the package path of junit runner
        // for eg, if "RunnerTest" lies in "org.cukesSel
        //then Cucumber will search feature file in "org/cukesSel"
        // but if someone needs to override this, simple give path to the features
        features = "src/test/resources/org/cukesSel/book_features/example.feature"

        //   features = "src/test/resources/features/admin_expands_users_under_svarsgrupp_node.feature",
        //if steps are on some places other than the normal cucumber file structure glue can be fed with the steps path
        //glue = "org.cukesSel.step_definitions"

)
public class RunnerTest {
}
