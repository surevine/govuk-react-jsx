import React from "react";
import { storiesOf } from "@storybook/react";
import { InsetText } from ".";
import fixtures from "govuk-frontend/govuk/components/inset-text/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";

const stories = storiesOf("inset-text", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <InsetText {...example.options} />);
}
