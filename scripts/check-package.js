const assert = require('assert');
const yargs = require('yargs');
const packageJson = require('../package.json');
const packageLockJson = require('../package-lock.json');

const { argv } = yargs.option('tag-name');

assert.strictEqual(
  `refs/tags/v${packageJson.version}`,
  argv['tag-name'],
  "Version entry in package.json doesn't match the Github tag you are trying to release"
);

assert.strictEqual(
  `refs/tags/v${packageLockJson.version}`,
  argv['tag-name'],
  "Version entry in package-lock.json doesn't match the Github tag you are trying to release"
);
