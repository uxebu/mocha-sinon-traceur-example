import {Some} from './test'
var assert = require('assert');
require('./sinon-cleanup');

describe('something', () => {
  it('that should work', () => {
    assert.equal(new Some().method(), 'works');
  });

  it('should have called', function() {
    var some = new Some();
    var stub = this.sinon.stub(some, 'value');
    stub.returns(42);

    assert.equal(some.method(), 42);
  });
  
});