import React from "react";
import { storiesOf } from "@storybook/react";
import { Hint } from ".";
import fixtures from "govuk-frontend/govuk/components/hint/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";

const stories = storiesOf("hint", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Hint {...example.options} />);
}
