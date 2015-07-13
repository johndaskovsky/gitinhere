var expect = chai.expect;

describe("Cow", function(){
  var sandbox;

  beforeEach(function(){
    sandbox = sinon.sandbox.create();

    sandbox.stub(window.console, "log");
    sandbox.stub(window.console, "error");
  });

  afterEach(function(){
    sandbox.restore();
  });




  describe("cow constructor", function() {
    it("should have a default name", function(){
      var cow = new Cow();
      expect(cow.name).to.equal("Anon cow");
    });
    it("should set cow's name if provided", function(){
      var cow = new Cow("Betsy");
      expect(cow.name).to.equal("Betsy");
    });
  });
 
 describe("#greets", function() {
    it("should throw if target is missing", function(){
      var cow = new Cow();
      cow.greets();

      sinon.assert.notCalled(console.log);
      sinon.assert.calledOnce(console.error);
      sinon.assert.calledWithExactly(console.error, "A missing target");

    });
    it("should greet target", function(){
      var cow = new Cow("James");
      var greetings = cow.greets("Betsy");

      sinon.assert.notCalled(console.error);
      sinon.assert.calledOnce(console.log);
      sinon.assert.calledWithExactly(console.log, "James greets Betsy");
    });





/*    it("should throw if target is missing", function(){
      var cow = new Cow();
      expect(function(){
        cow.greets();
      }).to.throw(Error);
    });
    it("should greet target", function(){
      var cow = new Cow("James");
      expect(cow.greets("Betsy")).to.equal("James greets Betsy");
    });
    */
 });

 
 describe("#lateGreets", function(){
  it("should pass an error if target is missing", function(done){
    var cow = new Cow("Samson");
    cow.lateGreets(null, function(err, greeting){
      expect(err).to.be.an.instanceof(Error);
      done();
    });
  });
  
  it("should greet the target after 1 second", function(done){
    var cow = new Cow("Samson");
    cow.lateGreets("Late Larry", function(err, greetings) {
      expect(greetings).to.equal("Samson greets Late Larry");
      done();
    });
  });



 });
});
