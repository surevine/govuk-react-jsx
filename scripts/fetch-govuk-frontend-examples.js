const yaml = require('js-yaml');
const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const glob = require('glob');
const got = require('got');
const cliProgress = require('cli-progress');

const fetchExamplesProgress = new cliProgress.SingleBar(
  {
    format:
      'Fetching examples from govuk-frontend GitHub {bar} {percentage}% | ETA: {eta}s | {value}/{total}',
  },
  cliProgress.Presets.shades_classic
);

function fetchExample(name) {
  // Collect examples from govuk-frontend on github
  const govukPackage = require('govuk-frontend/package.json');
  const cachePath = `.cache/govuk-frontend-examples/${name}.json`;
  let govExamples;

  return got(
    `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${govukPackage.version}/src/govuk/components/${name}/${name}.yaml`
  )
    .then(response => response.body)
    .then(data => yaml.safeLoad(data))
    .then(
      govExamples =>
        new Promise(function(resolve, reject) {
          mkdirp.sync(path.dirname(cachePath));
          fs.writeFile(cachePath, JSON.stringify(govExamples), err => {
            if (err) {
              console.error(err);
              reject(err);
            }

            fetchExamplesProgress.increment();

            resolve(govExamples);
          });
        })
    );
}

function fetchExamples() {
  components = glob.sync('src/govuk/components/*/index.js');

  fetchExamplesProgress.start(components.length, 0);

  const promises = components
    .map(value => path.dirname(path.relative('src/govuk/components', value)))
    .map(fetchExample);

  return Promise.all(promises)
    .then(function(examples) {
      fetchExamplesProgress.stop();
      return examples;
    })
    .catch(err => console.log(err));
}

fetchExamples();
