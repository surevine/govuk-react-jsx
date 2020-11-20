import React from "react";
import { storiesOf } from "@storybook/react";
import { Breadcrumbs } from ".";
import fixtures from "govuk-frontend/govuk/components/breadcrumbs/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";

const stories = storiesOf("breadcrumbs", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Breadcrumbs {...example.options} />);
}
