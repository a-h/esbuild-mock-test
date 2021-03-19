// Doesn't work.
// import * as index from "."; 

const index = require(".");

//@ts-ignore
jest.spyOn(index, "internalDependency").mockReturnValue("mocked");

describe("index.ts", () => {
  it("can replace internal dependencies with spies", () => {
    const result = index.subjectUnderTest();
    expect(result).toEqual({
      internal: "mocked",
      module: "concrete",
    });
  });
});
