import bodyParser from 'body-parser';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import 'regenerator-runtime/runtime';
import processExampleData from '../../utils/processExampleData';
import * as components from '../../src/govuk';


process.on('unhandledRejection', (err) => {
  throw err;
});

const app = express();

app.use(bodyParser.json());

app.post('/component/:component', async (req, res) => {
  const data = req.body;

  // component.__set__('logo', 'foo');
  const Component = components[data.macro_name];

  const props = processExampleData(data.params);

  res.send(ReactDOMServer.renderToStaticMarkup(<Component {...props} />));
});

app.post('/template', (req, res) => {
  const data = req.body;

  const template = `asd`;

  res.send(template);
});

app.listen(3000, () => console.log(`Ready`));
