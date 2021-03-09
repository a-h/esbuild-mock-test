import { moduleDependency } from "./dependency";

export const subjectUnderTest = (): string => {
  const result = moduleDependency();
  return `result: ${result}`;
};
