var after = require("./");

it('takes a time written in simple english', function(done){

  var a, b;

  after('500 milliseconds', function(){
    expect(a).to.be.not.true;
    expect(b).to.be.true;
    done();
  });

  setTimeout(function(){
    b = true;
  }, 350);

  setTimeout(function(){
    a = true;
  }, 600);

});

it('returns timeout id', function(done){

  var id = after('50 milliseconds', function(){
    throw new Error('should be cleaned');
  });

  clearTimeout(id);

  setTimeout(function(){
    done();
  }, 100);

});

it('takes initial parameters optionally', function(done){

  after('200ms', 3, 14, 156, function(a, b, c){

    expect(a).to.equal(3);
    expect(b).to.equal(14);
    expect(c).to.equal(156);
    done();

  });

});
