const fs = require('fs');

describe('distributable package', () => {
  it('uses the correct version of govuk-frontend', () => {
    const packageJson = require('../package.json');
    const distPackageJson = require('../scripts/package.json');

    expect(packageJson.dependencies["govuk-frontend"]).toEqual(distPackageJson.peerDependencies["govuk-frontend"]);
  });

  it('references the correct govuk-frontend in the readme', () => {
    const distPackageJson = require('../scripts/package.json');
    const readme = fs.readFileSync('./README.md', 'utf-8');


    const govukFrontendVersion = distPackageJson.peerDependencies["govuk-frontend"]
    expect(readme).toEqual(expect.stringContaining(`![govuk-frontend ${govukFrontendVersion}](https://img.shields.io/badge/govuk--frontend%20version-${govukFrontendVersion}-005EA5?logo=gov.uk&style=flat-square)`));
  });
});
