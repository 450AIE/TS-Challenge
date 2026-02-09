/**
 * 
实现KebabCase<T>，将大驼峰变为短横线写法

FooBarBaz -> foo-bar-baz

type FooBarBaz = KebabCase<"FooBarBaz">
const foobarbaz: FooBarBaz = "foo-bar-baz"

type DoNothing = KebabCase<"do-nothing">
const doNothing: DoNothing = "do-nothing"
 * 
 */

type UpperWord =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type KebabCase<T extends string, Count extends any[] = []> = T extends `${infer F}${infer R}`
  ? F extends UpperWord
    ? Count["length"] extends 0
      ? `${Lowercase<F>}${KebabCase<R, [...Count, unknown]>}`
      : `-${Lowercase<F>}${KebabCase<R, [...Count, unknown]>}`
    : `${Lowercase<F>}${KebabCase<R, [...Count, unknown]>}`
  : T;

type FooBarBaz = KebabCase<"FooBarBaz">;
