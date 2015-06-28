var expect = chai.expect;

describe('RegExp', function(){
  it('should match', function(){
    expect('string').to.match(new RegExp('^string$'));
  })
});

describe("A test suite", function() {
  beforeEach(function() { });
  afterEach(function() { });
  it('should pass', function() {
    expect(true).to.be.true;
  });
});