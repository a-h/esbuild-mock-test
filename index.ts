import { moduleDependency } from "./dependency";

export const internalDependency = () => "concrete";

export interface Result {
  internal: string;
  module: string;
}

export const subjectUnderTest = (): Result => {
  return {
    internal: internalDependency(),
    module: moduleDependency(),
  };
};
