import bodyParser from 'body-parser';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import 'regenerator-runtime/runtime';
// import Helmet from 'react-helmet';
import processExampleData from '../../utils/processExampleData';
import * as components from '../../src/govuk';

process.on('unhandledRejection', (err) => {
  throw err;
});

const app = express();

app.use(bodyParser.json());

app.post('/component/:component', async (req, res) => {
  const data = req.body;

  const Component = components[data.macro_name];
  let props;

  try {
    props = processExampleData(data.params, req.params.component);
  } catch (error) {
    throw new Error(
      `Error processing example data for ${data.macro_name} -> ${error}`
    );
  }

  try {
    res.send(ReactDOMServer.renderToStaticMarkup(<Component {...props} />));
  } catch (error) {
    throw new Error(
      `Error rendering ${
        data.macro_name
      } -> ${error}\n\nData provided was:\n${JSON.stringify(props, null, 2)}`
    );
  }
});

// app.post('/template', (req, res) => {
//   const data = req.body;

//   const { Template } = components;
//   console.log(data);
//   const props = processExampleData(data);
//   console.log(props);

//   const body = ReactDOMServer.renderToStaticMarkup(<Template {...props} />);
//   const helmet = Helmet.renderStatic();

//   // Simulate the component being embedded in a proper html page
//   let html = `
//     <!doctype html>
//     <html ${helmet.htmlAttributes.toString()}>
//         <head>
//             ${helmet.title.toString()}
//             ${helmet.meta.toString()}
//             ${helmet.link.toString()}
//         </head>
//         <body ${helmet.bodyAttributes.toString()}>
//             ${body}
//         </body>
//     </html>
//   `;

//   // Remove data-react-helmet attribute - no configurable way to do this so has to be a string replace
//   // See https://github.com/nfl/react-helmet/issues/79
//   html = html.replace(/data-react-helmet="true"/g, '');

//   console.log(html);

//   res.send(html);
// });

app.listen(3000, () => console.log(`Ready`));
