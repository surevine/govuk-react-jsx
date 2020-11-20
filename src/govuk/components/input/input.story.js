import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from ".";
import fixtures from "govuk-frontend/govuk/components/input/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";
import { WithRef } from "../../../../utils/WithRef";

const stories = storiesOf("input", module);

// React specific examples - these don't get pumped into the tests
examples.examples.push({
  name: "With onChange event",
  data: {
    name: "foo",
    attributes: {
      onChange: action("onChange"),
      "data-foo": "bar",
    },
  },
});

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <Input {...example.options} />);
}

stories.add("with ref", () => (
  <WithRef Component={Input} {...fixtures.fixtures[0].options} />
));
