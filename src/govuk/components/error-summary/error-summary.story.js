import React from "react";
import { storiesOf } from "@storybook/react";
import { ErrorSummary } from ".";
import { Input } from "../input";
import fixtures from "govuk-frontend/govuk/components/error-summary/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";

const stories = storiesOf("error-summary", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  stories.add(example.name, () => <ErrorSummary {...example.options} />);
}

stories.add("Error summary linking to input", () => (
  <>
    <ErrorSummary
      errorList={[
        {
          children: "Error message linking to input field in error state",
          href: "#foo",
        },
      ]}
    />

    <Input
      name="foo"
      id="foo"
      label={{ children: "Input field in error state" }}
      errorMessage={{ children: "Error message here" }}
    />
  </>
));
