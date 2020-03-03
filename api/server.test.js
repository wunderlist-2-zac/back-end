require("dotenv").config();

describe("server", function() {
  describe("environment", function() {
    it("should use the testing environment", function() {
      expect(process.env.DATABASE).toBe("wunderlist");
    });
  });
});