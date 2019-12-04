const yaml = require('js-yaml')
const fs = require('fs')
const request = require('sync-request')
const mkdirp = require('mkdirp')
const path = require('path')
const glob = require('glob')

function fetchExample(name) {
  // Collect examples from govuk-frontend on github
  const govukPackage = require('govuk-frontend/package.json')
  const cachePath = `.cache/govuk-frontend-examples/${name}.yaml`
  let govExamples

  const response = request(
    'GET',
    `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${govukPackage.version}/src/govuk/components/${name}/${name}.yaml`
  )
  const data = response.getBody('utf8')

  mkdirp.sync(path.dirname(cachePath))
  fs.writeFileSync(cachePath, data)

  govExamples = yaml.safeLoad(data)

  // Merge in any local examples

  //   const localExampleFilename = `tests/extra-cases/${name}.yaml`
  //   if (fs.existsSync(localExampleFilename)) {
  //     const localExamples = yaml.safeLoad(
  //       fs.readFileSync(localExampleFilename, { encoding: 'utf8' })
  //     )

  //     return {
  //       examples: govExamples.examples.concat(localExamples.examples)
  //     }
  //   } else {
  //     return govExamples
  //   }

  return govExamples
}

function fetchExamples() {
  const componentNames = glob
    .sync('src/govuk/components/*/index.js')
    .map(value => path.dirname(path.relative('src/govuk/components', value)))

  componentExamples = componentNames.map(fetchExample)
}

fetchExamples()
