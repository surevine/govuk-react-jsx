import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from ".";
import fixtures from "govuk-frontend/govuk/components/button/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";
import { WithRef } from "../../../../utils/WithRef";

const stories = storiesOf("button", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Button {...example.options} />);
}

stories.add("with ref", () => (
  <WithRef Component={Button} {...fixtures.fixtures[0].options} />
));
