import React from "react";
import { storiesOf } from "@storybook/react";
import { WarningText } from ".";
import fixtures from "govuk-frontend/govuk/components/warning-text/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";

const stories = storiesOf("warning-text", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <WarningText {...example.options} />);
}
