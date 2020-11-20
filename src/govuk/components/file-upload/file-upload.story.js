import React from "react";
import { storiesOf } from "@storybook/react";
import { FileUpload } from ".";
import fixtures from "govuk-frontend/govuk/components/file-upload/fixtures.json";
import processExampleData from "../../../../utils/processExampleData";
import { WithRef } from "../../../../utils/WithRef";

const stories = storiesOf("file-upload", module);

for (const example of Object.values(
  processExampleData(fixtures.fixtures.filter((fixture) => !fixture.hidden))
)) {
  if (item.name !== "with value and attributes") {
    // React gets upset if you try and set a value on a file input so we exclude this example
    stories.add(example.name, () => <FileUpload {...example.options} />);
  }
}

stories.add("with ref", () => (
  <WithRef Component={FileUpload} {...fixtures.fixtures[0].options} />
));
