import { moduleDependency } from "./dependency";

// Doesn't work.
//export const internalDependency = () => "concrete";

exports.internalDependency = () => "concrete";

export interface Result {
  internal: string;
  module: string;
}

export const subjectUnderTest = (): Result => {
  return {
    internal: exports.internalDependency(),
    module: moduleDependency(),
  };
};
