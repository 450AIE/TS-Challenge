/**
 * 
实现 `StartsWith<T, U>`,接收两个string类型参数,然后判断 `T`是否以 `U`开头,根据结果返回 `true`或 `false`

例如:

type a = StartsWith<'abc', 'ac'> // expected to be false
type b = StartsWith<'abc', 'ab'> // expected to be true
type c = StartsWith<'abc', 'abcd'> // expected to be false
 */

type StartsWith<T extends string, U extends string, Count extends any[] = []> = U extends ""
  ? true
  : T extends `${infer TF}${infer TR}`
    ? U extends `${infer UF}${infer UR}`
      ? TF extends UF
        ? StartsWith<TR, UR>
        : false
      : false
    : false;

type a_ = StartsWith<"abc", "ac">; // expected to be false
type b_ = StartsWith<"abc", "ab">; // expected to be true
type c = StartsWith<"abc", "abcd">; // expected to be false
