import { subjectUnderTest } from ".";

describe("index.ts", () => {
  it("can be executed with the concrete dependencies", () => {
    const result = subjectUnderTest();
    expect(result).toEqual({
      internal: "concrete",
      module: "concrete",
    });
  });
});
