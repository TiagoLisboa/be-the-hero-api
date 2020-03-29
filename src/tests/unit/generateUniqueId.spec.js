const generateUniqueId = require("../../utils/generateUniqueId");

describe("Unique ID generation", () => {
  it("should generate an unique hexadecimal ID", () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});
