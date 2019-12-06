const yaml = require('js-yaml')
const fs = require('fs')
const request = require('sync-request')
const mkdirp = require('mkdirp')
const path = require('path')
const glob = require('glob')

function fetchExample(name) {
  // Collect examples from govuk-frontend on github
  const govukPackage = require('govuk-frontend/package.json')
  const cachePath = `.cache/govuk-frontend-examples/${name}.json`
  let govExamples

  console.log('Fetching', name, 'example from GitHub')

  const response = request(
    'GET',
    `https://raw.githubusercontent.com/alphagov/govuk-frontend/v${govukPackage.version}/src/govuk/components/${name}/${name}.yaml`
  )
  const data = response.getBody('utf8')

  govExamples = yaml.safeLoad(data)

  mkdirp.sync(path.dirname(cachePath))
  fs.writeFileSync(cachePath, JSON.stringify(govExamples))

  return govExamples
}

function fetchExamples() {
  const componentNames = glob
    .sync('src/govuk/components/*/index.js')
    .map(value => path.dirname(path.relative('src/govuk/components', value)))

  componentExamples = componentNames.map(fetchExample)
}

fetchExamples()
