import {subjectUnderTest} from "."

describe("index.ts", () => {
  it("can be executed with the concrete dependency", () => {
    const result = subjectUnderTest();
    expect(result).toEqual("result: concrete");
  })
})
