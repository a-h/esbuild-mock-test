import { subjectUnderTest } from ".";
import * as index from "."; 

jest.spyOn(index, "internalDependency").mockReturnValue("mocked");

describe("index.ts", () => {
  it("can replace internal dependencies with spies", () => {
    const result = subjectUnderTest();
    expect(result).toEqual({
      internal: "mocked",
      module: "concrete",
    });
  });
});
