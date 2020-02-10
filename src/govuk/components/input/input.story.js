import React, { useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Input } from '.';
import examples from './examples';
import processExampleData from '../../../../utils/processExampleData';

const stories = storiesOf('input', module);

// React specific examples - these don't get pumped into the tests
examples.examples.push({
  name: 'With onChange event',
  data: {
    name: 'foo',
    attributes: {
      onChange: action('onChange'),
      'data-foo': 'bar',
    },
  },
});

for (const example of Object.values(processExampleData(examples.examples))) {
  stories.add(example.name, () => <Input {...example.data} />);
}

function InputWithRef() {
  const ref = React.createRef();

  useEffect(() => {
    console.log(ref);
  });

  return (
    <>
      <Input name="foo" ref={ref} label={{ children: 'With forwarded ref' }} />
      <p className="govuk-body">
        Additonal <code>ref</code> prop can be given which will be passed
        through React.forwardRef and onto the input element.
      </p>
      <code>
        <pre>
          const ref = React.createRef();
          <br />
          return &lt;Input name="foo" ref=
          {'{ref}'} /&gt;
        </pre>
      </code>
      <p className="govuk-body">See devtools console for logged ref.</p>
    </>
  );
}

stories.add('Exposing ref', () => <InputWithRef />);
