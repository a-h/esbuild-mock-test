import {subjectUnderTest} from "."

const mockDependency = jest.fn(() => "mock");
jest.mock("./dependency", () => ({
  moduleDependency: () => mockDependency(),
}));

describe("index.ts", () => {
  it("can be mocked out", () => {
    const result = subjectUnderTest();
    expect(result).toEqual("result: mock");
  })
})
