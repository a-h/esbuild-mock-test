import {subjectUnderTest} from "."

const mockDependency = jest.fn(() => "mocked");
jest.mock("./dependency", () => ({
  moduleDependency: () => mockDependency(),
}));

describe("index.ts", () => {
  it("can replace module dependencies with mocks", () => {
    const result = subjectUnderTest();
    expect(result).toEqual({
      internal: "concrete",
      module: "mocked",
    });
  })
})
