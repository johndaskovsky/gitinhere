var expect = chai.expect;

describe("Cow", function(){
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
 describe("greets", function() {
    it("should throw if target is missing", function(){
      var cow = new Cow();
      expect(function(){
        cow.greets();
      }).to.throw(Error);
    });
    it("should greet target", function(){
      var cow = new Cow("James");
      expect(cow.greets("Betsy")).to.equal("James greets Betsy");
    });
 });
});
