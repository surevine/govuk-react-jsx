const fs = require('fs');
const semver = require('semver');
const packageJson = require('../package.json');
const packageLockJson = require('../package-lock.json');
const distPackageJson = require('../scripts/package.json');

describe('distributable package', () => {
  it('uses the correct version of govuk-frontend', () => {
    expect(packageJson.dependencies['govuk-frontend']).toEqual(
      distPackageJson.peerDependencies['govuk-frontend']
    );
  });

  it('references the correct govuk-frontend in the readme', () => {
    const readme = fs.readFileSync('./README.md', 'utf-8');
    const govukFrontendVersion =
      distPackageJson.peerDependencies['govuk-frontend'];
    expect(readme).toEqual(
      expect.stringContaining(
        `![govuk-frontend ${govukFrontendVersion}](https://img.shields.io/badge/govuk--frontend%20version-${govukFrontendVersion}-005EA5?logo=gov.uk&style=flat-square)`
      )
    );
  });

  it.each([
    'govuk-frontend',
    'react-router-dom',
    'react-router',
    'react',
    'react-helmet',
  ])(
    'peer dependency version of %s matches that in the base package-lock.json',
    (dependency) => {
      expect(
        semver.satisfies(
          packageLockJson.dependencies[dependency].version,
          distPackageJson.peerDependencies[dependency]
        )
      ).toBe(true);
    }
  );
});
