/***
 * 
实现`Trim<T>`，它接受一个明确的字符串类型，并返回一个新字符串，其中两端的空白符都已被删除。

例如

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
 * 
 */

type Trim<T extends string> = T extends ` ${infer R}` ? Trim<R> : T extends `${infer L} ` ? Trim<L> : T;

type A = Trim<"  Hello World  ">;
