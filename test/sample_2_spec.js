var expect = chai.expect;

describe('karma tests with chai', function() {
  it('should expose the Chai assert method', function() {
    return assert.ok('everything', 'everything is ok');
  });
  it('should expose the Chai expect method', function() {
    return expect('foo').to.not.equal('bar');
  });
  return it('should expose the Chai should property', function() {
    1..should.not.equal(2);
    return should.exist(123);
  });
});