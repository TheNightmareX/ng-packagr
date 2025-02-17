import { expect } from 'chai';

describe(`@sample/package-js`, () => {
  describe(`package.json`, () => {
    let PACKAGE;
    beforeAll(() => {
      PACKAGE = require('../dist/package.json');
    });

    it(`should exist`, () => {
      expect(PACKAGE).to.be.ok;
    });
  });

  describe(`secondary/package.json`, () => {
    let PACKAGE;
    beforeAll(() => {
      PACKAGE = require('../dist/secondary/package.json');
    });

    it(`should exist`, () => {
      expect(PACKAGE).to.be.ok;
    });
  });
});
